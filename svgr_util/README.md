## How to use the conversion script for React unDraw Components

* Place new illustrations in `svg` folder; make sure their filename is of type: file-name.svg
* Run `yarn convert` in your terminal
* The script will create a folder `WhateverTheNewIllustrationNameIs` in `src/node_modules/components`, including `package.json`, `Readme.md` and `WhateverTheNewIllustrationNameIs.js` files, and delete the original files in `svg` folder
* To add customization, run search + find in your text editor and replace `style={{}}` within the newly created React components with `style={{height:props.height, width:'100%'}}`, and `fill="#6c63ff"` with `fill={props.primaryColor}`
* There might be a future update to the package used for conversion that might enable automating the customization step as well. This would happen by modifying `svgr.config.js`, check svgr [npm](https://www.npmjs.com/package/svgr/v/1.4.0) and [GitHub](https://github.com/smooth-code/svgr)
