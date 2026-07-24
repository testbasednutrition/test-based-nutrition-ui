import fs from 'fs';
import path from 'path';

import { specialists } from './src/data/specialists.ts';

const publicDir = path.resolve('public');

console.log('Total static specialists:', specialists.length);
specialists.forEach((s, idx) => {
  if (!s.image) {
    console.log(`[MISSING IMAGE PROP] ${s.name} (${s.slug})`);
  } else if (s.image.startsWith('/')) {
    const fullPath = path.join(publicDir, s.image);
    if (!fs.existsSync(fullPath)) {
      console.log(`[FILE NOT FOUND] ${s.name} (${s.slug}) -> ${s.image}`);
    }
  }
});
