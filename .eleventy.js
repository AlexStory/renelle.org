module.exports = config => {
    config.addPassthroughCopy({
        "src/_includes/assets/css/main.css": "./main.css",
        "src/assets/logo.svg": "./logo.svg",
    });

    return {
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "dist",
        }
    }
}