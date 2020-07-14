# Small JavaScript Projects

> Projects done to practice JavaScript.

# 01 - Drum Kit.
Key Event Listener, audio play and toggle class.

![](readme_img/01_00.png)


## Bind an event to our keys when they are pressed.

`window.addEventListener('keydown', playSound)`

- `playSound()` is a listener for `keydown` events registered using `window.addEventListener`.
- `window` is the global object in a browser, or the root object of the DOM. And  `document` stands for DOM.

### `data-key` has its own value on `<div>`s and `<audio>`s in HTML

```
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
```

- `keyCode` property is the *KEY* to connect our buttons(`<div>`s) and sounds(`<audio>`s).
- `keyCode` 's value is same as `ASCII` code (in lowercase letter ), check keycodes [here](http://keycode.info/).
- NOTE: `keyCode` is DEPRECATED. I'll update this in the future.
- `data-key` is set for mapping buttons and audios to get the `keyCode`s via `keydown` event.
- the whole `querySelector` expression has to be in back ticks (```).
- `${}` is syntactic sugar for template literals, read more about `Expression interpolation` [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

### About playing sounds

How do we prevent delay playing sound, if we keep hitting a key?

just add `audio.currentTime = 0;` before `audio.play();`

### Toggling styles

- use `item.classList.add('className')` to add class when key pressed. (same as `element.addClass('className')` in jQuery)

- use `transitionend` event to remove `play` class. since we want to just remove `transform` property, so add a condition to skip others.

```
if(e.propertyName != 'transform') return;
this.classList.remove('playing'); // `event.target.classList.remove('playing');`
```

### forEach and Arrow function

- `items.forEach()` instead of just `forEach`, which means it's a property of an array.

- Arrow functions is ES6 syntax,

```
keys.forEach(key => key.addEventListener());
```

# 02 - Javascript + CSS Clock.
pointers rotate animation, get times, changing pointer positions.

![](readme_img/02_00.png)

### Initialize pointer positions and rotation along the x-axis

`transform-origin: 100%; // transform-origin: right;`

`transition-timing-function: cubic-bezier();`

- `transform-origin` moves the origin of rotation along x-axis. check it [here](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).

- `transition-timing-function` here is for the real clock **tic-tock**-like effect.

### Get time

`setInterval(setDate, 1000);`

- the `setInterval` function runs a function passed to it every interval specified which to implement the second pointer's rotating effect.

- create `Date()` to get `now.getSeconds()`, `now.getMinutes()` and `now.getHours()`.

- culculating angles of pointers

`const secondDegrees = ((seconds / 60) * 360) + 90;`

(the initial state of pointers are 90 degrees)

### Wait...is that a glitch!?

Due to there is a glitch that occurs at every 0th second and our transition is set at 0.05s. When hand transition from final state to initial state, because the number of degrees reduce, the hand makes a (reverse) anti-clockwise motion to reach the 0 degree mark, so we'll see it occurs.

To bypass it, we remove the `transition` property at the specified degrees (where glitch occurs) via JavaScript.

```
if (secondsDegrees === 90) secondHand.style.transition = 'all 0s';
else secondHand.style.transition = 'all 0.05s';

if (minsDegrees === 90) minHand.style.transition = 'all 0s';
else minHand.style.transition = 'all 0.1s';
```

# 03 - CSS Variables and JavaScript.

![](readme_img/03_00.png)

`data-` attribute, `:root`, CSS Variables definition `var(--xxx)`, `filter: blur()`, `change` event and `mousemove` event

- [`dataset`](https://developer.mozilla.org/zh-TW/docs/Web/API/HTMLElement/dataset) property allows to custom data attributes like `data-xxx` on the element, either in HTML or in the DOM. It's a map of **DOMString**, one entry for each custom data attribute.

- `:root` selector matches the document's root element is always the html element and it's also where we declare the variable for the base element in HTML.

- once we declare CSS Variables, then we can add it to our specific elements, like `img` below, check how to declare it [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables).

- CSS Variable declare syntax is `--`, just like `$` in SASS.

```
:root {
  --spacing: 10px;
}

img {
  padding: var(--spacing);
}
```

- CSS `filter` provides such as `blur`, `bightness` and so on, take a look at it [here](https://developer.mozilla.org/en-US/docs/Web/CSS/filter).

- NodeList v.s. Array : NodeList is **NOT** an Array. You can open the `proto` in dev tool and  see its methods, there are `forEach()`, `keys()`..., and Array's prototype has `map()`, `pop()`...etc.

### Handling suffix with dataset

use `dataset` to deal with suffix `px` by adding `data-sizing: px` as an attribute on input element.

```
<input type="range" name="blur" min="0" max="25" value="10" data-sizing="px">
```

and the get the suffix by `dataset.sizing` via JS

```
const suffix = this.dataset.sizing || '';
```

and don't forget a condition with `|| ''` for `<input type=color>` which has no `px`.

### Changing CSS property via JS

`document.documentElement` is the root element in JS, so we can change the global CSS variables by JS is just `setProperty` to `style` like so:

```
document.documentElement.style.setProperty('--base', '#000');
```