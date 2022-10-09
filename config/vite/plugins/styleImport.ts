import styleImport from 'vite-plugin-style-import'

export function configStyleImportPlugin(isBuild: boolean) {
  if (!isBuild) {
    return []
  }
  const styleImportPlugin = styleImport({
    libs: []
  })

  return styleImportPlugin
}
