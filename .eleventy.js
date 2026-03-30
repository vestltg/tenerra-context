module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("public");
	eleventyConfig.addPassthroughCopy("articles/**/assets/");

	return {
		dir: {
			input: ".",
			includes: "_includes",
			output: "_site",
		},
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",
	};
};
