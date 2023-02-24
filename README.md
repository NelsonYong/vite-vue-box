# vite-vue-box

Out of the box, you can quickly generate the vue3 business framework.

[Preview](https://vite-vue-box.vercel.app)

<p align='left'>
<b>English</b> | <a href="https://github.com/NelsonYong/vite-vue-box/blob/master/README.zh-CN.md">简体中文</a>
</p>

## 🌟 Feature

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness
- 📦 [Components auto importing](./src/components)
- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)
- 🎨 [TailwindCSS](https://tailwindcss.com/) - rapidly build modern websites without ever leaving your HTML
- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)
- 🚀 [Vue-hooks-plus](https://github.com//InhiblabCore/vue-hooks-plus) - the vue-hooks-plus can satisfy most of your business
- 💫 <u>Axios</u> - package the complete business request process with the vue-hooks-plus/useRequest
- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly
- 🦾 <u>TypeScript</u>, necessary
- ☁️ <u>Eslint 、Stylelint 、Commitlint、Husky</u>，normative constraints

## Try it now

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/NelsonYong/vite-vue-box/generate).

### Clone to local

```bash
npx degit NelsonYong/vite-vue-box vite-vue-box-template
cd  vite-vue-box-template
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
# If you have a repo on Github
pnpm huskyInstall
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `App.vue`
- [ ] Change the hostname in `vite.config.ts` and `config`
- [ ] Change the favicon in `public`
- [ ] Remove the `.github` folder which contains the funding info
- [ ] Clean up the READMEs and remove routes
