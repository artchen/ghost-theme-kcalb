# Kcalb

**This theme is no longer maintained.**

**Kcalb** is a [Ghost](https://ghost.org) theme I made in college.

Some features of this theme:

* 100% Responsive and ready for Retina
* Customizable top menu and site descriptions
* 10+ social network icons
* Google Fonts

## How to Install

For general theme installation, please refer to:

* Official instruction on ghost.org [Installation](https://docs.ghost.org/installation/)

For deploying your ghost blog, I personally recommend [pm2](https://pm2.keymetrics.io/).

## Customize

The theme uses [Gulp](https://gulpjs.com/) as build tool, which makes customization very simple and clean.

The first time your get the theme package, install dependencies:

```bash
npm install
```

Before making any changes, run the following command to ensure all changes is monitored and compiled:

```bash
gulp watch
```

Then you can make changes in `src` folder, which contains all uncompressed source files. Gulp will automatically compile, compress and update changed files.

## CSS

The stylesheets are written in [less](https://lesscss.org/) and will be automatically compiled into CSS with `gulp-less`.

## Javascript

Javascript files used in this theme:

* `jQuery`
* `jquery.fitvids.js`
* `app.js`

`jQuery` and `jquery.fitvids.js` are dependencies that will be compiled into `assets/js/vendor.js`.

`app.js` is the custom logics that will be compiled into `assets/js/app.js`.

## Theme Settings

Modify `src/js/options.json` to change theme options.

Here are the options:

* `k_author` author's name
* `k_description`
	* `set` set to `true` if you want to customize the style of your site description.
	* `desc`: Please be sure to write every line of your description inside `<p>` tag
* `k_social`: Add social network icons displayed in the bottom of page

## Sources and Credits

* `/assets/fonts` - font icons from [icomoon.io](https://icomoon.io/)
* `/assets/js/jquery.fitvids.js` - [FitVids.js](https://github.com/davatron5000/FitVids.js) by @ChrisCoyier, @davatron5000, @TrentWalton, @raygunray
