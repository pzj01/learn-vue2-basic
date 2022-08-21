module.exports = {
  //预设配置
  presets: [
    //vue脚手架的babel插件预设
    '@vue/cli-plugin-babel/preset',
    //babel的默认预设环境
    ["@babel/preset-env",{modules:false}],
  ],
  plugins: [
    //element-ui按需引入插件配置
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      }
    ]
  ]
}
