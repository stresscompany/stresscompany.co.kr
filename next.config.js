module.exports = {
  assetPrefix: '',
  async exportPathMap () {
    return Object.assign({}, {}, {
      '/': { page: '/' }
    })
  }
}