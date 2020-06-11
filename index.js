#!/usr/bin/env node
// Added above line to allow 'index.js' file to be treated as an executable.

const debounce = require("lodash.debounce");
const chokidar = require("chokidar");
const prog = require("caporal");
const fs = require("fs");

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

    const start = debounce(() => {
      console.log("STARTING USERS PROGRAM");
    }, 200);

    chokidar
      .watch(".")
      .on("add", start)
      .on("change", () => start)
      .on("unlink", () => start);
  });

prog.parse(process.argv);
