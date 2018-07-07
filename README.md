# Pic


[![GitHub license](https://img.shields.io/github/license/mutoe/pic.svg?style=flat-square)](https://github.com/mutoe/pic/blob/master/LICENSE)
[![Travis](https://img.shields.io/travis/mutoe/pic.svg?style=flat-square)](https://www.travis-ci.org/mutoe/pic)

> This time that is the vue + koa version of the photo sharing website.

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn dev

# run unit
yarn test:unit

# build for production with minification
yarn build
```

### Pre-launch preparation

#### History Router Mode

The vue route USES history mode, so you need to configure the server (or turn it off).
refer to https://router.vuejs.org/zh-cn/essentials/history-mode.html

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

ElementUI has built-in async-validator component for form validation rules.

> async-validator  
https://github.com/yiminghe/async-validator
