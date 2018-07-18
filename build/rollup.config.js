import vue from 'rollup-plugin-vue';
import svg from 'rollup-plugin-svg';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import css from 'rollup-plugin-css-only';

const toRollupConf = (name) => {
  const outputFile = isSSR ? `dist/${name}.ssr.js` : `dist/${name}.js`;
  return {
    input: `components/${name}.vue`,
    output: {
      format: 'esm',
      file: `dist/${name}.js`,
    },
    plugins: [
      vue({
        css: false,
        style: {
          preprocessOptions: {
            stylus: {},
          },
        },
        template: {
          isProduction: true,
        },
      }),
      css({ output: true }),
      svg(),
      resolve({
        customResolveOptions: {
          moduleDirectory: 'node_modules',
        },
      }),
      commonjs(),
    ],
    external: [ 'vue' ],
  }
};

const componentNames = ['CookiesBanner', 'AppHeader', 'AppFooter', 'HeroBackground', 'AButton', 'AInput'];

export default componentNames.map(name => toRollupConf(name))
