# 再探 Web Function - 用数据阐释优势

## 前言

在 web 服务请求的场景下，web 函数不需要做 事件转化，有天然的优势

而原先基于 event 的 serverless components web [组件们](https://github.com/serverless-components/tencent-framework-components) "身世浮沉雨打萍"

## 同样代码的 8 个案例

1. 使用 `serverless express` 部署的一个 `node10.15` event 类型 SCF
1. 使用 `serverless express` 部署的一个 `node12.16` event 类型 SCF
1. 使用 `serverless scf` 部署的一个 `node10.15` web 类型 SCF
1. 使用 `serverless scf` 部署的一个 `node12.16` web 类型 SCF
1. 使用自定义镜像 node10 部署的一个 web 类型 SCF
1. 使用自定义镜像 node12 部署的一个 web 类型 SCF
1. 使用自定义镜像 node14 部署的一个 web 类型 SCF
1. 使用自定义镜像 node16 部署的一个 web 类型 SCF

预制并发实例都为 `1`，内存都为 `128MB`,压测代码都是相同的配置
