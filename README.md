Wrap words by length jQuery plugin
========================================
A jQuery plugin which wraps words larger than a given limit into a span.

CAUTION: This plugin is in beta and does not work as expected. stay tunend for nex updates.

Online demo
-----------
[Visit codepen](http://codepen.io/joanclaret/pen/QymbeR)

How it works?
-----------

### Javascript initialization

Default:
```javascript
(function($){
    $( '.check-limit' ).wrapWordsByLength();
})(jQuery);
```

With options:
```javascript
(function($){
    $( '.check-limit' ).wrapWordsByLength({
        charLimit: 3,
        wrapClass: "red"
    });
})(jQuery);
```

### Layout

```html
<p class="check-limit"> My life fades. The vision dims. All that remains are memories. I remember a time of chaos... ruined dreams... this wasted land. But most of all, I remember The Road Warrior. The man we called "Max."</p>
```



### Other useful  plugins
* [jcSlider](http://joanclaret.github.io/jcSlider): A responsive slider jQuery plugin with CSS animations 
* [html5 canvas animation](http://joanclaret.github.io/html5-canvas-animation): 3D lines animation with three.js 
* [slide and swipe menu](http://joanclaret.github.io/slide-and-swipe-menu): A sliding swipe menu that works with touchSwipe library. 
* [jquery dynamic max height](http://joanclaret.github.io/jquery-dynamic-max-height) : Dynamic max height plugin for jQuery with CSS animation
* [Maximum Characters limit exceeded warning](https://github.com/JoanClaret/max-char-limit-warning) : Get a warning when the maximum char limit has been exceeded with a simple jQuery plugin

License
-------

    The MIT License (MIT)

    Copyright (c) 2015 Joan Claret

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

