//THIS TEMPLATE DOES NOT SUPPORT getExport, getForwardRed and getProps from svgr
module.exports = unDrawTemplate = (code, config, state) => {
  return `
    import React from 'react';
    import PropTypes from 'prop-types';

    const ${state.componentName} = props => (
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
        style: PropTypes.object,
        /**
        * custom class for svg
        */
        class: PropTypes.string
      };

      ${state.componentName}.defaultProps = {
        primaryColor:'#6c68fb',
        style: { height: '100%', width:'100%' },
        class:''
      };

    export default ${state.componentName};
  `
}
