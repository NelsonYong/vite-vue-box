import styleImport from 'vite-plugin-style-import';

export function configStyleImportPlugin(isBuild: boolean) {
  if (!isBuild) {
    return [];
  }
  const styleImportPlugin = styleImport({
    libs: [
      // {
      //   libraryName: 'vant',
      //   esModule: true,
      //   resolveStyle: (name) => {
      //     return `vant/lib/${name}/index.less`;
      //   },
      // },
    ],
  });

  return styleImportPlugin;
}
