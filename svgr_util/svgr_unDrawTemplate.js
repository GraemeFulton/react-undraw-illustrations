//THIS TEMPLATE DOES NOT SUPPORT INJECTING getExport and getForwardRed from svgr
const unDrawTemplate = (code, config, state) => {
  const props = getProps(config, state);

  return `
    import React from 'react';
    import PropTypes from 'prop-types';

    const ${state.componentName} = ${props} => (
      ${code}
    );

    ${state.componentName}.propTypes = {
        /**
        * Hex color
        */
        primaryColor: PropTypes.string,
        /**
        * percentage
        */
        height: PropTypes.string,
        /**
        * custom class for svg
        */
        class: PropTypes.string
      };

      ${state.componentName}.defaultProps = {
        primaryColor:'#6c68fb',
        height:'100%',
        class:''
      };

    export default ${state.componentName};
  `
}

module.exports = unDrawTemplate;
