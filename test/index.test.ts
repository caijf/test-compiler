import { exec } from 'child_process';
import path from 'path';
// @ts-ignore
import { globSync } from 'glob';

const esVersion = [
  'es2016',
  'es2017',
  'es2018',
  'es2019',
  'es2020',
  'es2021',
  'es2022',
  'es2023',
  'es2024'
];

const babelOutput = path.join(__dirname, '..', 'dist/cjs-babel');
const tscOutput = path.join(__dirname, '..', 'dist/cjs-tsc');

const babelFiles: Record<string, any> = {};
const tscFiles: Record<string, any> = {};

esVersion.map((esv) => {
  babelFiles[esv] = globSync(`${babelOutput}/${esv}/**/*.js`);
  tscFiles[esv] = globSync(`${tscOutput}/${esv}/**/*.js`);
});

// console.log(babelFiles);
// console.log(tscFiles);

const compilers: [string, typeof babelFiles][] = [
  ['babel', babelFiles],
  ['tsc', tscFiles]
];
const ignores = ['ErrorCause'];

compilers.forEach((compiler) => {
  const [compilerName, files] = compiler;
  describe(`${compilerName} compile result`, () => {
    esVersion.forEach((esv) => {
      files[esv].forEach((fileItem: any) => {
        const { name } = path.parse(fileItem);
        test(`${esv}-${name}`, (done) => {
          if (ignores.includes(name)) {
            done();
            return;
          }
          exec(`node "${fileItem}"`, (err, stdout, stderr) => {
            if (err) {
              console.log(err);
              return;
            }
            done();
          });
        });
      });
    });
  });
});
