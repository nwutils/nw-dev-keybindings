/**
 * Custom keyboard shortcuts. This function is only ran when in dev mode.
 * It gives the developer access to common/expected keyboard shortcuts.
 *
 * @param {object} window  Browser window object
 */
function nwDevKeyBindings (window) {
  if (!window || !window.document) {
    return;
  }

  window.document.onkeydown = function (pressed) {
    var win;
    if (
      window &&
      window.nw &&
      window.nw.Window &&
      window.nw.Window.get &&
      window.process &&
      window.process.versions &&
      window.process.versions['nw-flavor'] &&
      window.process.versions['nw-flavor'] === 'sdk'
    ) {
      win = window.nw.Window.get();
    } else {
      return;
    }

    var CTRL = pressed.ctrlKey;
    var CMD = pressed.metaKey;
    var OPTION = pressed.altKey;
    var SHIFT = pressed.shiftKey;
    var F5 = pressed.keyCode === 116;
    var F12 = pressed.keyCode === 123;
    var I = pressed.keyCode === 73;
    var R = pressed.keyCode === 82;

    // Refresh ignoring cache
    if (SHIFT && F5 || CMD && SHIFT && R) {
      pressed.preventDefault();
      win.reloadIgnoringCache();
      return false;
    // Hard refresh
    } else if (CTRL && F5 || CTRL && R || CMD && R) {
      pressed.preventDefault();
      win.reloadDev();
      return false;
    // Soft refresh
    } else if (F5) {
      pressed.preventDefault();
      win.reload();
      return false;
    // Open Dev Tools
    } else if (F12 || CTRL && SHIFT && I || OPTION && SHIFT && I) {
      pressed.preventDefault();
      win.showDevTools();
      return false;
    }
  };
}

module.exports = nwDevKeyBindings;
