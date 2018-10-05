//THIS TEMPLATE DOES NOT SUPPORT INJECTING getExport and getForwardRed from svgr
module.exports = unDrawTemplate = (code, config, state) => {
  const getProps = config => {
    const props = []
    if (config.ref) props.push('svgRef')
    if (config.titleProp) props.push('title')
    if (config.expandProps) props.push('...props')

    if (props.length === 0) return '()'
    if (props.length === 1 && config.expandProps) return 'props'

    return `({ ${props.join(', ')} })`
  }

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
