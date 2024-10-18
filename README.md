<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

![image](_repo/vue-wordpress-logo.png)

# WordPress Starter Plugin - Vue.js

<div align="center">
  <p align="center">
This is a forked repo from <a href="https://github.com/EvanAgee/vuejs-wordpress-plugin-starter" target="_blank">EvanAgee/vuejs-wordpress-plugin-starter</a>. Evan hasn't updated this repo in over 4 years, so we decided to fork it and manage our own version. This is still the same product, but we hope we can make it better.

Our goal here is to make plugin development easier with Vue. While we didn't originally start this repo, we have exponentially surpassed it's predecessor.
<br />
<a href="https://github.com/jared-leddy/wordpress-plugin-starter-vue"><strong>Explore the docs »</strong></a>
<br />
<br />
<a href="https://github.com/jared-leddy/wordpress-plugin-starter-vue">View Demo</a>
&middot;
<a href="https://github.com/jared-leddy/wordpress-plugin-starter-vue/issues">Report Bug</a>
&middot;
<a href="https://github.com/jared-leddy/wordpress-plugin-starter-vue/issues">Request Feature</a>

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#setup">Setup</a></li>
        <li><a href="#clean-unused-files">Clean Unused Files</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

WordPress plugin development is a cumbersome endeavor. This is much harder to manage when your background is Node.js and JavaScript, instead of Laravel and PHP. This boilerplate project will rapidly get you up and running with developing a new plugin.

In the spirit of a modern upgrade, we have converted this into a TypeScript Vue plugin template.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm)
- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vue.js](https://vuejs.org/)
- [Vite](https://vite.dev/)
- [SASS/SCSS](https://sass-lang.com/)
- [Gulp.js](https://gulpjs.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

All plugin files live inside of the `/src` folder. These are the instructions on setting up your project locally. To get a local copy up and running follow these simple steps.

### Prerequisites

For all of the awesome people using Node Version Manager (NVM) instead of Node.js, we have an `.nvmrc` file in the repo. For everyone else, please check this file to make sure that your Node.js version matches.

- Switch to correct Node.js Version

```zsh
nvm use
```

### Setup

Before you start working, you will need to rename all of the correct files, functions, assets, etc. **BEFORE** you run `npm install`. This setp is also about naming your plugin with your own namespacing.

1. Search and replace the repo for any occurances of `vwp-plugin`.
2. Search and replace the repo for any occurances of `vwp_plugin`.
3. Search and replace the repo for any occurances of `VwpPlugin`.
4. Manually rename any files that are prefixed with `vwp-plugin`.

### Clean Unused Files

There are a few instances where you may not need the starting files and folder structure. In these instances, it's a good practice to delete them. Please see a few examples below.

1. i18n Languages: `/src/languages`

   - If you have no intentions to add multiple languages, also known as "internationalization" (or i18n for short), then you can delete this folder.

2. Public Front-End: `/src/php/public`

   - If the plugin you are developing doesn't have a need for front-end support, and is only used in the WP Admin area, then you can delete this folder.

3. TypeScript Types: `/src/utils/types`

   - If you don't end up adding or updating this folder, then you can remove it.

4. TypeScript Enumerations: `/src/utils/enums`

   - If you don't end up adding or updating this folder, then you can remove it.

5. TypeScript Interfaces: `/src/utils/interfaces`
   - If you don't end up adding or updating this folder, then you can remove it.

### Installation

1. Clone the repo.
   ```sh
   git clone https://github.com/jared-leddy/wordpress-plugin-starter-vue.git
   ```
2. Install NPM packages.
   ```zsh
   npm install
   ```
3. There is no working `start` or a `build watch` command. We have an open issue for this.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Below, you will find our common commands and notes for general usage.

1. Run `npm run build:dev`.
   - When you build in dev, the plugin folder **IS NOT ZIPPED**. This is for those situations where you're working with local instance of WordPress using XAMP, LAMP, MAMP, etc. or even the LocalWP tool (which we use). Those steps are:
     - Build the new plugin folder.
     - Delete the current folder in your WP website.
     - Copy your new plugin folder into the website's plugins folder.
2. Run `npm run build:prod`.

   - When you build in prod, the plugin folder **IS ZIPPED** and ready for upload to a WP website.

3. The `admin/index.php` is the base PHP template for the plugin settings admin page UI. It has an element `<div id="app"></div>` where the Vue app is getting mounted.

4. The provided Vue template can be found in `src/vue/App.vue`.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

We don't have a dedicated roadmap outside of Github. Simply check the [open issues](https://github.com/jared-leddy/wordpress-plugin-starter-vue/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

[X @jaredleddy](https://x.com/jaredleddy)

[Carbon Digital](https://carbondigital.us)

Project Link: [https://github.com/jared-leddy/wordpress-plugin-starter-vue](https://github.com/jared-leddy/wordpress-plugin-starter-vue)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Without these people and tools, life would be too complicated.

- Good food.
  - Steak 🥩
  - Ramen 🍜
  - Rice 🍚
  - Tacos 🌮
  - Breakfast Burritos 🌯
  - Burgers 🍔
  - Pizza 🍕
  - Coffee ☕
- Good company.
  - Family 👫 👨‍🍼
  - Friends 👨‍🏫 👨‍🚀 🏋️‍♂️ ⛹️‍♂️ 🏄‍♂️ 🏌️‍♂️ 🏂 🤺 🧗‍♂️ 🏃‍♂️ 🎣
- Good tools.
  - [VS Code]()
  - [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm)
  - [Warp Terminal](https://warp.dev)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/jared-leddy/wordpress-plugin-starter-vue.svg?style=for-the-badge
[contributors-url]: https://github.com/jared-leddy/wordpress-plugin-starter-vue/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jared-leddy/wordpress-plugin-starter-vue.svg?style=for-the-badge
[forks-url]: https://github.com/jared-leddy/wordpress-plugin-starter-vue/network/members
[stars-shield]: https://img.shields.io/github/stars/jared-leddy/wordpress-plugin-starter-vue.svg?style=for-the-badge
[stars-url]: https://github.com/jared-leddy/wordpress-plugin-starter-vue/stargazers
[issues-shield]: https://img.shields.io/github/issues/jared-leddy/wordpress-plugin-starter-vue.svg?style=for-the-badge
[issues-url]: https://github.com/jared-leddy/wordpress-plugin-starter-vue/issues
[license-shield]: https://img.shields.io/github/license/jared-leddy/wordpress-plugin-starter-vue.svg?style=for-the-badge
[license-url]: https://github.com/jared-leddy/wordpress-plugin-starter-vue/blob/master/license.md
