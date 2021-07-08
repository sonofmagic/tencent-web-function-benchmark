
![Banner](https://pic4.zhimg.com/80/v2-4eb8cd11b7622220b1718169a9432ad0.jpg)
# 再探 Web Function - 用数据阐释优势

> 上一篇文章: [初探 SCF 的 Web function 和 Custom image](https://zhuanlan.zhihu.com/p/379733946)
## 前言

最近腾讯云SCF云函数 , 公测了 Web函数 ，这种函数类型专注于 Serverless Web 服务场景。

相比于原先的事件(Event)函数 , Web函数转换链路短,性能损耗也较低。 

原先Event函数：Api网关Http请求转换成SCF函数事件,事件再在SCF内部转化成Http请求交给Web框架处理

现在Web函数在Api网关那里，直接把Http请求透传了。函数可以直接通过Http请求触发，这造就了它 在 Web 场景的天然的优势。

在此，笔者针对 **相同代码** 的 `Event函数` , `Web函数`， 部署了 **`8`** 个用例，不断提升并发量进行压力测试，以探究不同的函数类型和Runtime对 `QPS`,`TPS`,`Latency` 的影响。

## 测试用例

1. **`[event-node10]`** : 使用 `serverless express` 部署的一个 `node10.15` event 类型 SCF 
1. **`[event-node12]`** : 使用 `serverless express` 部署的一个 `node12.16` event 类型 SCF
1. **`[web-node10]`** : 使用 `serverless scf` 部署的一个 `node10.15` web 类型 SCF
1. **`[web-node12]`** : 使用 `serverless scf` 部署的一个 `node12.16` web 类型 SCF
1. **`[web-custom-image-node10]`** : 使用自定义镜像 `node10` 部署的一个 web 类型 SCF
1. **`[web-custom-image-node12]`** : 使用自定义镜像 `node12` 部署的一个 web 类型 SCF
1. **`[web-custom-image-node14]`** : 使用自定义镜像 `node14` 部署的一个 web 类型 SCF
1. **`[web-custom-image-node16]`** : 使用自定义镜像 `node16` 部署的一个 web 类型 SCF

>注: 使用的Web框架为 `nodejs` 最泛用的 `express`，只含有计算不含 `IO`操作 ， 自定义镜像的 `nodejs` 都使用的 `alpine` 版本

其中，函数的预制并发实例都为 `10` , 并提前做好 `warm up`，内存都为 `128MB` (自定义镜像不同，有自己的[内存规则](https://cloud.tencent.com/document/product/583/56051)) 

本地压测代码都是相同的配置：

每个函数压测时间为 `10s` , 并发数以 `10` 为一梯度，累加到 `100`。`Fire Request` 为 Get 请求。

## 测试结果数据图表

> 本图表 [可交互地址在此](https://icebreaker.top/chart/scf-event-vs-web-vs-custom-image) (建议用pc打开，笔者没有做移动端兼容)

### 平均QPS (Avg Req/Sec) 

![Req_Sec 平均折线图 ](https://pic4.zhimg.com/80/v2-c5d99d9ebcab3a801408410531d44962.png)
从折线图中，我们可以看出，随着并发量的增加, 每秒处理过的请求一直在提升。

同时也能看到 Web函数随着并发量变大，逐渐和Event函数，拉开差距。

![Req_Sec 平均累加柱状图](https://pic4.zhimg.com/80/v2-bde3c4e886bd6ba03f66152fa86a6a2f.png)
从累加柱状图中,可以明显看出 Web类型的平均QPS 同比 高于Event类型

其中runtime 使用 node12 也比 node10 高一点点，可能高版本的nodejs做了一些优化吧。

### 平均TPS (Avg Bytes/Sec)

![Bytes_Sec 吞吐量(KB)平均折线图](https://pic4.zhimg.com/80/v2-5c22f13e36296f7e56da457db9e0bfbd.png)

从折线图中，我们可以看出，随着并发量的增加, 吞吐量也一直在提升。

同时也能看到 Web函数随着并发量变大，也逐渐和Event函数，拉开差距，不过这个差距相比QPS要小很多。

![Bytes_Sec 吞吐量(KB)平均累加柱状图](https://pic4.zhimg.com/80/v2-8821574d38355029a60b2f4b6219d482.png)

从累加柱状图中,可以明显看出 Web类型的平均TPS 高于Event类型,但差距相对来说不是那么大。

同样node12也比node10高一点点。

### 平均延迟 (Avg Latency) 

![Latency 延迟平均折线图](https://pic4.zhimg.com/80/v2-c1ac018e32ba41d4f566d6188ab3aa9e.png)

图中，我们可以明显看出，随着并发量的增加, 延迟并没有增加，逐渐趋于稳定。

平均延迟都在 `30-50ms` 左右，其中Web类型的平均延迟，也明显要比Event类型要低。

这意味着，函数响应用户请求也更快。

同样node12也比node10稍稍快一点点(可忽略不计)。

## 总结 

### 性能的提升

1. SCF单个函数 承受的并发量 , 和QPS，TPS正比例相关(自动伸缩扩容)

2. Web函数和Event函数相比, 在处理http请求上, 随着并发量的增长，优势越大。

3. Web函数处理 http 请求的延迟比 Event函数 更低

4. nodejs的runtime版本也有影响, nodejs12.16 在各方面数值均优于 node10.15

### 开发者体验的提升

Web函数 也大大提升了，我们开发者在本地的开发和调试体验。

我们原先部署一个 Event函数 来处理http请求 , 往往需要写代码来导出一个某某框架实例(比如`express`,`koa`,`nuxt`,`next` ...) 交给Serverless组件进行部署，然而不同的Web框架，往往部署时需要不同的垫片(事件转化http)，这导致了 Event函数 和 Serverless组件 的高耦合度。

而 Web函数 就不需要和 那些Web框架 做强关联了， 它只需要被告知一个监听的端口号，不在乎我们开发者到底使用什么框架来 Host 我们的 Web服务。我们可以随意在本地安装任何的框架进行部署，而不用再去寻找对应框架的 serverless 组件了。

同时，它对于部分现有系统的迁移非常的友好，甚至可以简单到，只改个监听端口号，就能一键式部署上云，减少了大量花在运维部署上的时间。

这么看来 Web函数 也是一次革命! 它让那些原先基于 event 的 serverless components web [组件们](https://github.com/serverless-components/tencent-framework-components) 变得 `useless` ,是时候抛弃他们，拥抱Web函数了。

一句话概括：

假如我们开发者要 **编写** 或 **迁移** 一个  Web服务 到 serverless ，那么腾讯云SCF `Web函数` 就是你的首选！

## 附言和相关链接

### 附言

>笔者非专业的测试，所有测试结果仅供参考，也欢迎专业人员提供建议和意见。  
>此次也测试了一下 `Web函数 + 自定义镜像` 的方式部署，不过测试结果比较杂乱，没找到规律,后续会针对这个场景进行进一步的测试。  
>新技术是飞速发展的，本文写于 2021.07.08 ，存在一定的历史局限性，如一定时间后，结果有所不同，也难免正常。
### 相关链接

[部署代码和压测代码](https://github.com/sonofmagic/tencent-web-function-benchmark)

[图表地址](https://icebreaker.top/chart/scf-event-vs-web-vs-custom-image)

[基于 event 的serverless components web 框架地址](https://github.com/serverless-components/tencent-framework-components)