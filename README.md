# open-gallery

Capacitor plugin to open gallery platform app

## Install

```bash
npm install open-gallery
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`openGallery(...)`](#opengallery)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => any
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>any</code>

--------------------


### openGallery(...)

```typescript
openGallery(options?: OpenGalleryOptions | undefined) => any
```

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code><a href="#opengalleryoptions">OpenGalleryOptions</a></code> |

**Returns:** <code>any</code>

--------------------


### Interfaces


#### OpenGalleryOptions

Opciones

| Prop        | Type                | Description                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| **`image`** | <code>string</code> | File URI de la imagen que quieres abrir en galeria File URI from image that u want to open in gallery |

</docgen-api>
