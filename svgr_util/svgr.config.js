const unDrawTemplate = require('./svgr_UndrawTemplate');

const unDrawConfig = {
  h2xConfig: null,
  expandProps: false,
  dimensions: false,
  icon: false,
  native: false,
  prettier: true,
  prettierConfig: null,
  ref: false,
  replaceAttrValues: null,
  svgo: false,
  template: unDrawTemplate,
  titleProp: false,
  runtimeConfig: true,
  svgProps: {
    style: '',
    className: '{ props.class }',
  },
};

module.exports =  unDrawConfig;

//A fix for better formatting of svgProps that might enable customizing the //style attribute directly was committed right when I was writing this but //because I'm not 100% sure how well it works, I prefer not trying it.
//It is possible that in the future a replaceAttrValues option will be updated
//to enable directly assigning {props.primaryColor} so that you don't need to //do it manually by search and replace.
