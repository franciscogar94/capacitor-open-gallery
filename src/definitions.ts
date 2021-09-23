export interface openGalleryPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
