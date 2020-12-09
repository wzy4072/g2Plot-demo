基于 [Ant Design of Vue](https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn/) 实现的 [Ant Design Pro](https://pro.ant.design/)

- 预览: https://preview.pro.antdv.com
- 首页: https://pro.antdv.com
- 文档: https://pro.antdv.com/docs/getting-started
- 更新日志: https://pro.antdv.com/docs/changelog
- 常见问题: https://pro.antdv.com/docs/faq

## 环境和依赖

- node
- yarn
- webpack
- eslint
- @vue/cli ~3
- [ant-design-vue](https://github.com/vueComponent/ant-design-vue) - Ant Design Of Vue 实现
- [vue-cropper](https://github.com/xyxiao001/vue-cropper) - 头像裁剪组件
- [@antv/g2](https://antv.alipay.com/zh-cn/index.html) - Alipay AntV 数据可视化图表
- [Viser-vue](https://viserjs.github.io/docs.html#/viser/guide/installation) - antv/g2 封装实现

> 请注意，我们强烈建议本项目使用 [Yarn](https://yarnpkg.com/) 包管理工具，这样可以与本项目演示站所加载完全相同的依赖版本 (yarn.lock) 。由于我们没有对依赖进行强制的版本控制，采用非 yarn 包管理进行引入时，可能由于 Pro 所依赖的库已经升级版本而引入了新版本所导致的问题。作者可能会由于时间问题无法及时排查而导致您采用本项目作为基项目而出现问题。

## 项目下载和运行

- 安装依赖

```
yarn install
```

- 开发模式运行

```
yarn run serve
```

- 编译项目

```
yarn run build
```

### 项目打包分析

> 1.0.1 分析结果 
较大文件

xlsx.js  // 导出xlsx文件功能

data-set.js
g2.js
dist.js
echarts.all.js
lodash.js
moment.js