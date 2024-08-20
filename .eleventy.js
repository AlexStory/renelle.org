module.exports = config => {
    config.addPassthroughCopy({
        "src/_includes/assets/css/main.css": "./main.css"
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