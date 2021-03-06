const COMPONENT_HEIGHT_RATIOS = {
  nav: .1,
  content: .9005  
}

export default content = {
  getNavDimensions: function(screenDimensions) {
    return {
      height: screenDimensions.height * COMPONENT_HEIGHT_RATIOS.nav,
      width : screenDimensions.width
    };
  },

  getContentDimensions: function(screenDimensions) {
    return {
      height: screenDimensions.height * COMPONENT_HEIGHT_RATIOS.content,
      width : screenDimensions.width
    };
  }
}