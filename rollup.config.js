import tsPlugin from 'rollup-plugin-typescript2';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  external: ['tailwindcss'],
  plugins: [
    nodeResolve({
      preferBuiltins: true,
    }),
    tsPlugin(),
    commonjs(),
  ],
};
