/**
 * @name configManualChunk
 * @description chunk
 */

const vendorLibs: { match: string[]; output: string }[] = [
  {
    match: ['vant'],
    output: 'vant'
  }
]
export const configManualChunk = (id: string) => {
  if (/[\\/]node_modules[\\/]/.test(id)) {
    const matchItem = vendorLibs.find((item) => {
      const reg = new RegExp(
        `[\\/]node_modules[\\/]_?(${item.match.join('|')})(.*)`,
        'ig'
      )
      return reg.test(id)
    })
    return matchItem ? matchItem.output : null
  }
}
