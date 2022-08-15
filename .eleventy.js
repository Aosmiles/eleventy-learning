module.exports = function (eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy('./src/css/style.css')
  eleventyConfig.addPassthroughCopy('./src/assets/')
  
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: 'dist',
    },
    templateFormats: ['md', 'njk', 'html', 'liquid'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dateTemplateEngine: 'njk',
  };
}