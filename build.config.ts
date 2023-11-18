import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig([
  {
    entries: [
      'src/main/index',
    ],
    outDir: 'dist-electron',
    declaration: true,
    rollup: {
      emitCJS: true,
    },
    externals: ['electron'],
  },
]);
