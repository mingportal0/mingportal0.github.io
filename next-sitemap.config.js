/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://mingportal0.github.io',
  changefreq: 'daily',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  additionalPaths: async (config) => {
    const result = []
    const allTags = ['creo', 'database', 'error', 'java', 'javascript', 'react', 'server', 'spring', 'windchill', '컴퓨터지식']
    // all possible values
    allTags.map(t => {
      result.push({
        loc: `/tags?tag=` + t,
        changefreq: config.changefreq,
        priority: 0.7,
        lastmod: new Date().toISOString(),
      })
    })

    return result
  },
}
