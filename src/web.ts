import { WebPlugin } from '@capacitor/core';

import type { openGalleryPlugin } from './definitions';

export class openGalleryWeb extends WebPlugin implements openGalleryPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async openGallery() {
    throw this.unimplemented('This plugins is incompatible with browser');
  };
}
