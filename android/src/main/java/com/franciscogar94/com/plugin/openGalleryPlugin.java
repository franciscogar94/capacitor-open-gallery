package com.franciscogar94.com.plugin;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.ActivityCallback;
import com.getcapacitor.annotation.CapacitorPlugin;
import android.content.Intent;
import android.net.Uri;

@CapacitorPlugin(name = "openGallery")
public class openGalleryPlugin extends Plugin {

    private openGallery implementation = new openGallery();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }
    @ActivityCallback
    private void callback(PluginCall call){
        call.resolve();
    }
    @PluginMethod
    public void openGallery(PluginCall call){
        String image = call.getString("image");
        if (image == null){
            image = "content://media/internal/images/media";
        }
        Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(image));
        intent.setType("image/jpeg");
        getActivity().startActivity(intent);
      //  startActivityForResult(call,intent,"callback");
        call.resolve();
    }

}
