const path = require("path")

const { 
    override, 
    fixBabelImports,
    addWebpackResolve,
    addWebpackAlias
  } = require('customize-cra')
  
module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd-mobile',
     style: 'css',
   }),
   addWebpackResolve({
     extensions:[".js",".json",".jsx"]
   }),
   addWebpackAlias({
     "@":path.resolve(__dirname,"src/"),
     "@a":path.resolve(__dirname,"src/assets/"),
     "@c":path.resolve(__dirname,"src/components/"),
     "@u":path.resolve(__dirname,"src/utils"),
     "@g":path.resolve(__dirname,"src/guide"),
     "@r":path.resolve(__dirname,"src/role"),
   })
 );