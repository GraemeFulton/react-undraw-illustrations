var shell = require('shelljs');
var startCase = require('lodash.startcase');

shell.ls('src/svg/*.svg').forEach(filename => {
  const withoutExtension = filename.slice(8, filename.length-9)
  const component = startCase(withoutExtension).replace(/ /g, '')
  shell.mkdir(`src/node_modules/components/${component}`);
  //shell.touch(`src/node_modules/components/${component}/package.json`);
  //shell.touch(`src/node_modules/components/${component}/Readme.md`);
  // shell.touch(`src/node_modules/components/${component}/${component}.js`);
  // shell.cd(`src/node_modules/components/${component}/package.json`);
  createJs(component);
  //shell.rm(filename)
})

// function createJson(component) {
//  const file = `src/node_modules/components/${component}/package.json`
//   shell.touch(file);
////How do I insert content into the file?
//   return insertJsonContent(component)
// }
//
// function insertJsonContent(component) {
//   return {
//     "private": true,
//     "name": `${component}`,
//     "main" `./${component}.js`
//   }
// }

function createJs(component) {
  const file = `src/node_modules/components/${component}/${component}.js`
  shell.touch(file);
  //How do I insert content into the file?
}

function insertJsContent(component) {
  return `
    import React from 'react';
    import PropTypes from 'prop-types';

    const ${component} = props => (
      <div>
      </div>
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
