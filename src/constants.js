import { fileURLToPath } from 'url'
import { dirname } from 'path'

//constants
export const __dirname = dirname(fileURLToPath(import.meta.url))
export const PORT = 3000