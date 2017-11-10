const COMPONENT_HEIGHT_RATIOS = {
  nav: .1,
  content: .901
}

export default content = {
  getNavDimensions: function(screenDimensions) {
    return {
      height: Math.max(screenDimensions.height * COMPONENT_HEIGHT_RATIOS.nav),
      width : screenDimensions.width
    };
  },

  getContentDimensions: function(screenDimensions) {
    return {
      height: Math.max(screenDimensions.height * COMPONENT_HEIGHT_RATIOS.content),
      width : screenDimensions.width
    };
  }
}