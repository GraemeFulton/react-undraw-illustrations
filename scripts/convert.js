const glob = require('glob');
const startCase = require('lodash.startcase');
const svgToJsx = require('svg-to-jsx');
const prettier =  require('prettier');
const svgr = require('@svgr/core');
const fs = require('fs');
const path = "src/node_modules/components/";
const unDrawConfig = require('../svgr_util/svgr.config');
// const { unDrawTemplate } = require('../svgr_util/svgr_UndrawTemplate');
//const reactDomTemplate = require('../svgr_util/svgr_template');
//glob allows selecting only a certain type of files, hard to do with fs.readdir alone
glob('src/svg/*.svg', (error, files) => {
  if(error) throw new Error('glob cannot read this file for some reason');
  files.forEach(file => {
    const onlyTitle = file.slice(8, file.length-9)
    const componentName = startCase(onlyTitle).replace(/ /g, '')
    // fs.mkdirSync(`${path}${componentName}`);
    createJs2(file, componentName);
    // createJson(componentName);
    // createReadMe(componentName);
    //fs.unlinkSync(file);
  });
})

function createReadMe(component) {
  const readMeContent =
    `${component}` + " example:" + "\n" +
    "```js " + "\n" +
    `<${component}
    primaryColor='#6c68fb'
    accentColor='#43d1a0'
    height='250px'
    />` + "\n" +
    "```"

  fs.writeFileSync(
    `${path}${component}/Readme.md`,
    readMeContent
  );
}

function createJson(component) {
  const jsonContent = {
    "private": true,
    "name": `${component}`,
    "main": `./${component}.js`,
  }

  fs.writeFileSync(
    `${path}${component}/package.json`,
    JSON.stringify(jsonContent));
}

function createJs2(file, component) {
  const svgFile = fs.readFileSync(file, 'utf-8');

  return svgr.default(
    svgFile,
    //this config file customizes the rendered React component specifically for this project
    unDrawConfig,
    { componentName: component }
  )
  .then (jsxFile => {
    console.log(jsxFile);
    // const prettierJsx = prettier.format(jsxFile, {
    //   parser: 'babylon',
    // });
    // fs.writeFileSync(`${path}${component}/${component}.js`, generateReactComponent(component, prettierJsx));
  })
  .catch (err => {
    throw new Error("failed to generate React component")
  })
}


// function createJs(component, file) {
//   const svgFile = fs.readFileSync(file, 'utf-8');
//   return svgToJsx(svgFile)
//   .then (jsxFile => {
//     const prettierJsx = prettier.format(jsxFile, {
//       parser: 'babylon',
//     });
//     fs.writeFileSync(`${path}${component}/${component}.js`, generateReactComponent(component, prettierJsx));
//   })
//   .catch (err => {
//     throw new Error("failed to generate React component")
//   })
// }

function generateReactComponent(content, props, component) {
  return `
    import React from 'react';
    import PropTypes from 'prop-types';

    const ${component} = props => (
      ${content}
    );

    ${component}.propTypes = {
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

      ${component}.defaultProps = {
        primaryColor:'#6c68fb',
        height:'100%',
        class:''
      };

    export default ${component};
  `
}
