import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const pathUrl = import.meta.url
const path = fileURLToPath(pathUrl)

export const __root = resolve(dirname(path), '../')

