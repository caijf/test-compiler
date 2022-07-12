import { exec } from 'child_process';
import path from 'path';
import glob from 'glob';

const esVersion = [
  "es2016",
  "es2017",
  "es2018",
  "es2019",
  "es2020",
  "es2021",
  "es2022"
];

const babelOutput = path.join(__dirname, "..", "dist/cjs-babel");
const tscOutput = path.join(__dirname, "..", "dist/cjs-tsc");

const babelFiles = {}
const tscFiles = {}

esVersion.map(esv => {
  babelFiles[esv] = glob.sync(`${babelOutput}/${esv}/**/*.js`);
  tscFiles[esv] = glob.sync(`${tscOutput}/${esv}/**/*.js`);
});

// console.log(babelFiles);
// console.log(tscFiles);

describe("babel compile result", () => {
  esVersion.forEach(esv => {
    babelFiles[esv].forEach(fileItem => {
      const { name } = path.parse(fileItem);
      test(`${esv}-${name}`, (done) => {
        exec(`node "${fileItem}"`, (err, stdout, stderr) => {
          if (err) {
            console.log(err);
            return;
          }
          done();
        });
      });
    })
  });
});

describe("tsc compile result", () => {
  esVersion.forEach(esv => {
    tscFiles[esv].forEach(fileItem => {
      const { name } = path.parse(fileItem);
      test(`${esv}-${name}`, (done) => {
        exec(`node "${fileItem}"`, (err, stdout, stderr) => {
          if (err) {
            console.log(err);
            return;
          }
          done();
        });
      });
    })
  });
});






