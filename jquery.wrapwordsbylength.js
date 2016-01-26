/**
 * Wrap words by length plugin for jQuery created by Joan Claret
 *
 * @copyright Copyright 2016 Joan Claret
 * @license   MIT
 * @author    Joan Claret
 * @version   1.0
 *
 * Licensed under The MIT License (MIT).
 * Copyright (c) 2016 Joan Claret
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

;(function($, document, window, undefined) {

  'use strict';

  var wrapWordsByLength =

    $.fn.wrapWordsByLength = function( options ) {

      options = options || {};

      // Default options
      var settings = $.extend({
          charLimit: "15",
          wrapClass: "word-break"
      }, options );

      return this.each(function() {
        var el = $(this),
          str = el.text(),
          words = str.split(" ")
        ;

        for(var i=0; i<words.length; i++){
          if(words[i].length > settings.charLimit){
            el.html(el.html().replace(words[i],'<span class="'+settings.wrapClass+'">'+words[i]+'</span>'));
          }
        }
      });
    }
  ;
})(window.jQuery || window.$, document, window);


/**
 * Export as a CommonJS module
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = wrapWordsByLength;
}
