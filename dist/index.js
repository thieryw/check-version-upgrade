"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const input = (0, core_1.getInput)("repo_name");
console.log(input);
