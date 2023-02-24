# vite-vue-box

开箱即用，你可以快速构建出 Vue3 的业务框架。

[预览地址](https://vite-vue-box.vercel.app)

<p align='left'>
<a href="https://github.com/NelsonYong/vite-vue-box/blob/master/README.md">English</a> | <b>简体中文</b>
</p>

## 🌟 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - 就是快！
- 📦 [组件自动化加载](./src/components)
- 🍍 [使用 Pinia 的状态管理](https://pinia.vuejs.org)
- 🎨 [TailwindCSS](https://tailwindcss.com/) - 无需离开 HTML 即可快速构建现代网站
- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)
- 🚀 [Vue-hooks-plus](https://github.com//InhiblabCore/vue-hooks-plus) - vue-hooks-plus 能满足你大部分业务
- 💫 <u>Axios</u> - 封装了完整的网络请求 搭配 vue-hooks-plus/useRequest，香的~
- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 无需引入
- 🦾 <u>TypeScript</u>, 必须的
- ☁️ <u>Eslint 、Stylelint 、Commitlint、Husky</u>，规范化开发约束

## 现在搞起

### GitHub 模版

[使用这个模板创建仓库(<https://github.com/NelsonYong/vite-vue-box/generate>).

### 克隆到本地

```bash
npx degit NelsonYong/vite-vue-box vite-vue-box-template
cd  vite-vue-box-template
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
# If you have a repo on Github
pnpm huskyInstall
```

## 清单

当你使用此模版的时候，请按照清单正确更新您自己的信息

- [ ] 在 `LICENSE` 中改变作者名
- [ ] 在 `App.vue` 中改变标题
- [ ] 在 `vite.config.ts` 更改主机名,和适当修改
- [ ] 在 `public` 目录下改变 favicon
- [ ] 移除 `.github` 文件夹中包含资助的信息
- [ ] 整理 README 并删除路由
