import rtl from 'rtl-css-js';

export default ({ enabled = true } = {}) => ({
  onProcessStyle(style, rule /*,sheet*/) {
    if (rule.type === 'font-face') return style;

    if (!enabled) {
      if (typeof style.flip === 'boolean') delete style.flip;

      return style;
    }

    let flip = true;

    if (typeof style.flip === 'boolean') {
      flip = style.flip;
      delete style.flip;
    }

    if (!flip) return style;

    return rtl(typeof rule.toJSON === 'function' ? rule.toJSON() : style);
  }
});
