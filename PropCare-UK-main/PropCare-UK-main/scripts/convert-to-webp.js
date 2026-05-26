/**
 * Convert PNG images to WebP for Lighthouse performance optimization.
 * Keeps original PNGs for fallback. WebP saves ~70-80% file size.
 * Run: node scripts/convert-to-webp.js
 */
import sharp from 'sharp'
import { readdirSync, statSync } from 'fs'
import { join, extname, basename } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ROOT = join(__dirname, '..')

const dirs = [
  join(ROOT, 'public', 'projects'),
  join(ROOT, 'public'),
]

async function convert() {
  for (const dir of dirs) {
    const files = readdirSync(dir).filter(f => {
      const ext = extname(f).toLowerCase()
      const full = join(dir, f)
      return (ext === '.png' || ext === '.jpg' || ext === '.jpeg') && statSync(full).isFile()
    })

    for (const file of files) {
      const input = join(dir, file)
      const output = join(dir, basename(file, extname(file)) + '.webp')
      const info = await sharp(input)
        .webp({ quality: 80, effort: 6 })
        .toFile(output)
      
      const originalSize = statSync(input).size
      const savings = ((1 - info.size / originalSize) * 100).toFixed(1)
      console.log(`✅ ${file} → ${basename(output)} | ${(originalSize/1024).toFixed(0)}KB → ${(info.size/1024).toFixed(0)}KB (${savings}% smaller)`)
    }
  }
  console.log('\n✅ All images converted to WebP.')
}

convert().catch(console.error)
