declare module 'path' {
  import * as pathType from 'node:path'
  const pathModule: typeof pathType
  export = pathModule
}
