# nw-dev-keybindings

"Open dev tools" and "refresh page" keybindings for NW.js.

Skips creating bindings if you are not on the SDK version.

Written in glorius ES5 (that means it runs in all version of NW.js, even super old ones).


## Usage

1. `npm install --save nw-dev-keybindings`
1. Add this to your HTML file:

```html
<script>
const nwDevKeyBindings = require('nw-dev-keybindings');
nwDevKeyBindings(window);
</script>
```


Then, if you are in the SDK version of NW.js, you'll be able to run these commands:

Key binding       | Outcome
:--               | :--
`F5`              | Soft refresh
`Shift+F5`        | Refresh ignoring cache
`Command+Shift+R` | Refresh ignoring cache
`Ctrl+F5`         | Hard refresh
`Ctrl+R`          | Hard refresh
`Command+R`       | Hard refresh
`F12`             | Open Dev Tools
`Ctrl+Shift+I`    | Open Dev Tools
`Option+Shift+I`  | Open Dev Tools
