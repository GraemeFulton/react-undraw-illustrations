const glob = require('glob');
const startCase = require('lodash.startcase');
//svgr is used for conversion, CAREFUL if you update it:
//It has a history of implementing non-backwards compatible updates
//that would break the template and/or the config files
const svgr = require('@svgr/core');
const fs = require('fs');
const unDrawConfig = require('../svgr_util/svgr.config');
const path = "src/node_modules/components/";
//glob allows selecting only a certain type of files, hard to do with fs.readdir alone
glob('svg/*.svg', (error, files) => {
  if(error) throw new Error('glob cannot read this file for some reason');
  files.forEach(file => {
    const componentName = formatFileName(file);
    fs.mkdirSync(`${path}${componentName}`);
    createJs(file, componentName);
    createJson(componentName);
    createReadMe(componentName);
    // Deletes the original file, disable if you want to keep the files:
    fs.unlinkSync(file);
  });
})

function formatFileName(file){
  const pathAndExtensionRemoved = file.slice(4, file.length -4);
  return 'Undraw' + startCase(pathAndExtensionRemoved).replace(/ /g, '');
}

function createReadMe(component) {
  const readMeContent =
    `${component}` + " example:" + "\n" +
    "```js " + "\n" +
    `<${component}
    primaryColor='#6c68fb'
    height= '250px'
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

function createJs(file, component) {
  const svgFile = fs.readFileSync(file, 'utf-8');
  return svgr.default(
    svgFile,
    //this is where the rendered React component is customized:
    unDrawConfig,
    { componentName: component }
  )
  .then (jsxFile => {
    fs.writeFileSync(`${path}${component}/${component}.js`, jsxFile);
    console.log(`Succesfully created component: ${component}` )
  })
  .catch (err => {
    throw new Error("failed to generate React component, check svgr config and template")
  })
}
