1.如果没有全局安装webpack-cli，需要先全局安装

```javascript
npm i webpack webpack-cli -g
```

然后再某个文件夹内执行一下命令

```javascript
npm i webpack webpack-cli -D
```

2.初始化npm包管理器，安装成功后会出现package.json

```javascript
npm init
```

3.新建一个webpack配置文件 build/webpack.config.js

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 入口文件配置
    entry: './src/js/index.js',
    // 出口文件配置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.less$/i, // 匹配 .less 文件
                // 注意之前说过的，loader是从下到上的一个执行顺序
                use: [ // 还有官方的示例 这里是loader 咱们需要改成use
                    'style-loader', // 创建style标签，并将js中的css代码添加到style标签中
                    'css-loader', // 将css文件以common.js的方式整合到js文件中
                    'less-loader', // 将less文件解析成css文件
                ],
            },

        ]
    },
    devServer: {
        static:{
            directory: path.join(__dirname, 'dist'),//这里指定启动目录
        },
        port: 8000,//监听的端口号
        compress: true, //启动压缩
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ]
};
```

4.编写打包的入口文件index.js和html模板文件

src\js\index.js

```javascript
import '../css/index.less'
console.log(666)
```

src\index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div class="demo">
    
</div>
</body>
</html>
```

5.编写css文件

src\css\index.less

```css
.demo {
  width: 200px;
  height: 200px;
  margin: 200px auto;
  background-color: antiquewhite;
}
```

6.安装 less编译插件，安装html编译插件

```javascript
npm install less less-loader style-loader css-loader -D
npm i html-webpack-plugin
```

7.配置启动命令

package.json

```javascript
"dev": "webpack-dev-server --config build/webpack.config.js"
```

8.安装webpack-dev-server插件，用于启动客户端

```javascript
cnpm i webpack-dev-server --save
```

9.执行npm run dev

自动打开浏览器看到一个黄色正方形