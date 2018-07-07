# Pic


[![GitHub license](https://img.shields.io/github/license/mutoe/pic.svg?style=flat-square)](https://github.com/mutoe/pic/blob/master/LICENSE)
[![Travis](https://img.shields.io/travis/mutoe/pic.svg?style=flat-square)](https://www.travis-ci.org/mutoe/pic)
[![codecov](https://img.shields.io/codecov/c/github/mutoe/pic.svg?style=flat-square)](https://codecov.io/gh/mutoe/pic)

> This time that is the vue + koa version of the photo sharing website.  
> 这次用 vue 和 koa 继续完成那个弃坑的图片分享网站.

## Build Setup

``` bash
# install dependencies
# 安装依赖
yarn

# serve with hot reload at localhost:8080
# 启动开发服务器
yarn dev

# run unit and e2e tests
# 运行单元测试和端对端测试
yarn test

# build for production with minification
# 打包并压缩
yarn build
```

### Pre-launch preparation 上线前准备

#### History 模式

前端路由使用了 history 模式, 所以需要在服务器中进行相关配置 ( 或者关掉它 ), 参考  
https://router.vuejs.org/zh-cn/essentials/history-mode.html

#### OSS Authorization Configuration

The picture is saved on aliyun OSS service.
In order to avoid exposing the app secret, extract the configuration and put it under `server/.env`.
The content is as follows:
``` ini
# Aliyun OSS Configuration
OSS_URI = https://timeimage.oss-cn-shenzhen.aliyuncs.com
OSS_DIR_PATH = uploads/
OSS_KEY_ID = yourKeyId
OSS_KEY_SECRET = yourKeySecret
OSS_EXPIRE =
OSS_MAX_SIZE =

# callback
OSS_CB_HOST = https://pic.mutoe.com
OSS_CB_PORT =
OSS_CB_PATH = /api/auth/ossCallback
```

You can also copy a copy of `.env.example` in the `server` directory 
and rename it to `.env`, then modify the contents.

## Related Links

### Validator

ElementUI has built-in async-validator component for form validation rules  
有关表单验证规则部分, ElementUI 内置了 async-validator 组件

async-validator  
https://github.com/yiminghe/async-validator
