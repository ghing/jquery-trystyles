/*!
 * jQuery plugin for trying different overridden styles 
 * Author: Geoffrey Hing (geoffhing@gmail.com) for the Floodlight Project (http://floodlightproject.org)
 * Licensed under the MIT license
 */

;(function ( $, window, document, undefined ) {
    // Create the defaults once
    var pluginName = 'tryStyles',
        defaults = {
          styles: {}
        };
       
    function Plugin( element, options ) {
      this.element = element;

      this.options = $.extend( {}, defaults, options) ;
      
      this._defaults = defaults;
      this._name = pluginName;
      
      this.init();
    }

    function _parseQueryString() {
      var params = {};
      $.each( window.location.search.replace(/^\?/, '').split('&'), function( index, value ) {
          var param = value.split('=');
          if ( param.length >= 1 ) {
            if ( param.length == 2 ) {
              params[param[0]] = param[1];
            }
            else {
              params[param[0]] = undefined;
            }
          }
      });
      return params;
    }

    Plugin.prototype.init = function () {
      var plugin = this,
          styles = this.options.styles,
          styleParent = 'head',
          qsParams = _parseQueryString();

      if ('trystyle' in qsParams && qsParams['trystyle']) {
        style = qsParams['trystyle'];
      }
     
      if (style && style in styles) {
        $.each( styles[style], function ( index, stylesheet ) {
          plugin._appendStylesheet(stylesheet); 
        });
      }
    };

    Plugin.prototype._appendStylesheet = function (stylesheet) {
      // TODO: Make the element that the stylesheet is appended to a
      // parameter
      $( 'head' ).append('<link href="' + stylesheet + '" rel="stylesheet" />');
    };

    $.fn[pluginName] = function ( options ) {
      return this.each(function () {
        if (!$.data(this, 'plugin_' + pluginName)) {
          $.data(this, 'plugin_' + pluginName, 
          new Plugin( this, options ));
        }
      });
    }

})( jQuery, window, document );
