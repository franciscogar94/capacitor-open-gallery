export interface openGalleryPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  openGallery(options?:OpenGalleryOptions): Promise<void>;
}
/**Opciones */
export interface OpenGalleryOptions{
  /** File URI de la imagen que quieres abrir en galeria 
   * File URI from image that u want to open in gallery
  */
  image?:string
}


