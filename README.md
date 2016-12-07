[![theme-logo](https://s3.amazonaws.com/rakugaki.me/images/theme-logo.png)](https://rakugaki.me)

# Kcalb

**Kcalb** is a [Ghost](http://ghost.org) theme designed and coded by [Art Chen](http://rakugaki.me).

With its minimal style, **Kcalb** is ideal for photographers, illustrators and anyone whose blog contents mainly consists of photos and pictures. You may have noticed that the name is a **Black** with its letters in inverse order. I believe the elegant dark background will make your images look even brighter and prettier.

Some features of this theme:

* 100% Responsive and ready for Retina
* Customizable top menu and site descriptions
* 10+ social network icons
* Google Fonts

## How to Install

For general theme installation, please refer to:

* Official instruction on ghost.org [http://docs.ghost.org/installation/](http://docs.ghost.org/installation/)

For deploying your ghost blog, I personally recommend [pm2](http://pm2.keymetrics.io/).

## Customize

The theme uses [Gulp](http://gulpjs.com/) as build tool, which makes customization very simple and clean.

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

The stylesheets are written in [less](http://lesscss.org/) and will be automatically compiled into CSS with `gulp-less`.

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

* `/assets/fonts` - font icons from [icomoon.io](http://icomoon.io/)
* `/assets/js/jquery.fitvids.js` - [FitVids.js](https://github.com/davatron5000/FitVids.js) by @ChrisCoyier, @davatron5000, @TrentWalton, @raygunray

Thank you for choosing a [Rakugaki](http://rakugaki.me) theme. Enjoy blogging!
