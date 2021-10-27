# vite2-vue3-electron12 开发在线音乐
- NeteaseCloudMusicApi-api接口


## 开发需求:
- 歌单模块
  + 歌单总列表
  + 歌单推荐列表
- 电台模块
  + 推荐电台
  + 热门电台
- 播放器模块
- 登录授权
- 评论模块
- 个人管理


## 调试-部署 
> 下载
```bash
git clone https://github.com/xiaominglin789/vite-vue-electron-main.git
```
> 安装
```bash
cd vite-vue-electron-main
yarn
```

> 本地web调试
```bash
yarn dev
或
yarn test # 服务环境web调试
```

> 打包
```bash
yarn build # 打包:web网页, 可以部署到服务器上
或
yarn app:build # 打包:os平台执行程序
```

## 异常处理
- 关于electron打包因为下载资源失败: Get “https://github.com/electron-userland/electron-builder-binaries/releases/download/appimage-12.0.
```bash
# 解决,设置使用国内仓库资源下载(即,配置环境变量)
> export ELECTRON_BUILDER_BINARIES_MIRROR=https://mirrors.huaweicloud.com/electron-builder-binaries/
```


## 日常开发遇到的问题-flex间隔
- 想实现grip的元素'有行列间隔',却只想使用flex布局
```img
# 横竖代表间隔
[0]|[0]|[0]
-----------
[0]|[0]|[0]
-----------
[0]|[0]|[0]
```
- 方案一: flex+gap(ie11+)
```css
container {
  display: flex;   // flex局部
  flex-wrap: wrap; // 自动换行
  gap: x y;       // 行列间隔,可控制gap大小来铺满每行容量,gap = row-gap + column-gap
}
```
- 方案二: margin(兼容ie11)
```css
.container {
  display: flex;
  flex-wrap: wrap;
  margin: -24px 0px 0px -24px; // 父容器设置负值的上边距、左边距，来抵消边缘子容器的上边距、左边距
}
.box {
  margin: 24px 0px 0px 24px; // 子容器设置上边距、左边距
}
```
