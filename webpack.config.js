const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin") 

const config = {
  //번들링 설정. 
  "mode" : "development", // 또는 "production" 프로덕션으로 바꾸면 압축속도는 오래걸리지만 많이 압축을 해준다. 
  "entry" : {
    "app" : ["./src/index"]
  },
  "output" : {
    "filename": "bundle.js",
    "path": __dirname + "/public"
  },

  //전처리기 설정
  "module" : {
    "rules" : [
      {
        "test": /\.js$/, 
        "loader": "babel-loader", //js는 바벨로더로 전처리해주겠다. 
      }
    ]
  },
  
  "plugins":[
    new HtmlWebpackPlugin({
      "template": __dirname + "/public/index.html"
    }),
    // new CleanWebpackPlugin(),
  ],
  "devServer": {
    "static":{
      "directory": __dirname+"/public"
    },
    "port": 3000
  }
}

module.exports = config;