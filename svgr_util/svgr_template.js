module.exports = reactDomTemplate = (code, config, state) => {
  const getProps = config => {
    const props = []
    if (config.ref) props.push('svgRef')
    if (config.titleProp) props.push('title')
    if (config.expandProps) props.push('...props')

    if (props.length === 0) return '()'
    if (props.length === 1 && config.expandProps) return 'props'

    return `({ ${props.join(', ')} })`
  }

  const props = getProps(config, state)

  let result = `import React from 'react'\n\n`
  result += `const ${state.componentName} = ${props} => ${code}\n\n`
  // result += getForwardRef(config, state)
  // result += getExport(config, state)

  return result;
};

// module.exports = reactDomTemplate;
