module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `
            @import "@/assets/styles/_reset.scss";
            @import "@/assets/styles/_mixins.scss";
            @import "@/assets/styles/_animations.scss";
            @import "@/assets/styles/_helpers.scss";
            @import "@/assets/styles/_colors.scss";
            @import "@/assets/styles/_typographics.scss";
            @import "@/assets/styles/_base.scss";
          `
        }
      }
    }
  };