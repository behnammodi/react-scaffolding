import { create } from 'jss';
import preset from 'jss-preset-default';
import JSSRightToLeft from './rtl';
import theme from './theme';

const presets = preset().plugins;

const jss = create({
  plugins: [...presets, JSSRightToLeft({ enabled: true })]
});

export const styles = styles =>
  jss.createStyleSheet(styles(theme)).attach().classes;
