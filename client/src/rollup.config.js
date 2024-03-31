// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';

export default {
  // Other Rollup configurations...
  plugins: [
    resolve({
      // Specify that Axios should be treated as an external dependency
      preferBuiltins: true,
      modulesOnly: true
    })
  ],
  external: ['axios'] // Specify Axios as an external dependency
};
