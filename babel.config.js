module.exports = api => {
  api.cache(true);

  // target設定はbrowserlist参照
  // https://github.com/browserslist/browserslist
  return  {
    "presets": [
      ["@babel/preset-env" ,  {
        "targets": [
          "last 1 version",
          "IE 11"
        ]
      }]
    ]
  }
}
