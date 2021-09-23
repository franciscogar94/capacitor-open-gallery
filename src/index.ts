import { registerPlugin } from '@capacitor/core';

import type { openGalleryPlugin } from './definitions';

const openGallery = registerPlugin<openGalleryPlugin>('openGallery', {
  web: () => import('./web').then(m => new m.openGalleryWeb()),
});

export * from './definitions';
export { openGallery };
