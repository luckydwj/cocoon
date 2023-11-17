#! /usr/bin/env node
import inquirer from "inquirer";
import path, { dirname } from "path";
import fs from "fs";
import ejs from "ejs";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Your name",
      default: "my-node-cli",
    },
  ])
  .then((answers) => {
    const destUrl = path.join(__dirname, "templates");
    const cwdUrl = process.cwd();
    fs.readdir(destUrl, (err, files) => {
      if (err) throw err;
      files.forEach((file) => {
        ejs.renderFile(path.join(destUrl, file), answers).then((data) => {
          fs.writeFileSync(path.join(cwdUrl, file), data);
        });
      });
    });
  });