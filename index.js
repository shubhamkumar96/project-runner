#!/usr/bin/env node
// Added above line to allow 'index.js' file to be treated as an executable.

const debounce = require("lodash.debounce");
const chokidar = require("chokidar");
const prog = require("caporal");
const fs = require("fs");
const { spawn } = require("child_process");
const chalk = require("chalk");

prog
  .version("0.0.1")
  .argument("[filename]", "Name of a file to execute")
  .action(async (args) => {
    const { filename } = args;
    const name = filename || "index.js";

    try {
      await fs.promises.access(name);
    } catch (err) {
      throw new Error(`Could not find the file ${name}`);
    }

    let proc;
    const start = debounce(() => {
      if (proc) {
        proc.kill();
      }
      console.log(chalk.red(">>>>>>>>>>>>>> Starting Process....."));
      proc = spawn("node", [name], { stdio: "inherit" });
    }, 600);

    chokidar
      .watch(".")
      .on("add", start)
      .on("change", () => start)
      .on("unlink", () => start);
  });

prog.parse(process.argv);
