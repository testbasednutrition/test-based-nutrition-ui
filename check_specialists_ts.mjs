import { specialists } from './src/data/specialists.ts';

const targetNames = ['Lyndsey', 'William', 'Fiona', 'Kimberly', 'Emily', 'Jayden', 'Trevor'];

console.log('--- STATIC SPECIALISTS MATCHES ---');
specialists.forEach(s => {
  if (targetNames.some(name => s.name.includes(name))) {
    console.log(`${s.name} (${s.slug}) | Image: ${s.image}`);
  }
});
