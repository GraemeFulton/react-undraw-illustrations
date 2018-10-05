const unDrawTemplate = require('../svgr_util/svgr_UndrawTemplate');

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
  svgo: true,
  svgoConfig: { "plugins": [{ "removeTitle": false }] },
  template: unDrawTemplate,
  titleProp: false,
  runtimeConfig: true,
  svgProps: {
    style: '',
    className: '{ props.class }',
  },
};

module.exports =  unDrawConfig;
