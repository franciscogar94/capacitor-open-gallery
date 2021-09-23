import { WebPlugin } from '@capacitor/core';

import type { openGalleryPlugin } from './definitions';

export class openGalleryWeb extends WebPlugin implements openGalleryPlugin {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async openGallery() {
    throw this.unimplemented('This plugins is incompatible with browser');
  };
}
