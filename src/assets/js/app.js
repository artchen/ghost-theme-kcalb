/*
|   This is the one Javascript file that Kcalb uses.
|   See css/screen.css for theme version info.
|
|   Please:
|   1. Edit your theme settings, which is at the bottom of this file.
|   2. Add your additional JS (if you would like to).
|   3. Leave the "DO NOT EDIT" section unchanged.
|
|   Happy blogging!
|
|   Art Chen @ rakugaki.me
|   March 16, 2014
|   Latest update: Dec 6, 2016
*/

(function($){
  function Kcalb_Settings(options) {
    var k_settings = $.extend({
      "k_author": "John Smith",
      "k_description": {
        "set": true,
        "desc": "<p>Hermit Chen</p><p>Portfolio @ rakugaki.me</p><p>Themeforest ID = otakism</p><p>Thank you for previewing my theme.</p>",
        "textalign": "center"
      },
      "k_social": [
      	{
          "name": "facebook",
          "url": "#"
        },
        {
          "name": "twitter",
          "url": "#"
        },
        {
          "name": "tumblr",
          "url": "#"
        },
        {
          "name": "googleplus",
          "url": "#"
        },
        {
          "name": "pinterest",
          "url": "#"
        },
        {
          "name": "linkedin",
          "url": "#"
        },
        {
          "name": "flickr",
          "url": "#"
        },
        {
          "name": "github",
          "url": "#"
        },
        {
          "name": "dribbble",
          "url": "#"
        },
        {
          "name": "qq",
          "url": "#"
        },
        {
          "name": "instagram",
          "url": "#"
        },
        {
          "name": "sina-weibo",
          "url": "#"
        },
        {
          "name": "renren",
          "url": "#"
        }
      ]
    }, options);

    /* Applying custom settings */

    /* Author name */
    if (k_settings.k_author) {
      $('.site-name').html(k_settings.k_author);
    }

    /* Author Bio (Site description) */
    if (k_settings.k_description.dirty) {
      var author_desc = k_settings.k_description.desc;
      $('.site-description').css("text-align", k_settings.k_description.textalign);
      $('.site-description').html(author_desc);
    }

    /* Social Networks */
    k_settings.k_social.forEach(function(v) {
  	  var item = "<li><a href=\"" + v.url + "\" class=\"social-" + v.name + "\"><span class=\"icon-" + v.name + "\"></span></a></li>";
      $(".snslist").append(item);
    });
  }

  $(".single-content").fitVids();
  var kcalb = new Kcalb_Settings(theme_options);
})(jQuery);
