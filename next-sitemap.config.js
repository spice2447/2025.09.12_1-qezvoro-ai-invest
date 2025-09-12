/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://example.com',
  generateRobotsTxt: false,
  transform: async (config, path) => {
    // можно дописать локализацию путей
    return { loc: path, changefreq: 'weekly', priority: 0.7, lastmod: new Date().toISOString() };
  }
}
