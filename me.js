#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "Me, I and Myself:",
        choices: [
            {
                name: `Send me an ${chalk.blueBright.bold("email")}?`,
                value: () => {
                    open("mailto:mrepol742@gmail.com");
                }
            },
            {
                name: `View my ${chalk.blueBright.bold("Portfolio")}?`,
                value: () => {
                    open("https://samiunnafis.github.io");
                }
            },
            {
                name: `View my ${chalk.blueBright.bold("Projects")}?`,
                value: () => {
                    open('https://samiunnafis.github.io#projects');
                }
            },
            {
                name: `What's my ${chalk.blueBright.bold("Skills")}?`,
                value: () => {
                    open('https://samiunnafis.github.io#skills');
                }
            },
            {
                name: `See my ${chalk.blueBright.bold("Friends")}?`,
                value: () => {
                    open('https://samiunnafis.github.io#friends');
                }
            },
            {
                name: "Close.",
                value: () => {
                    console.log("Meowwww..\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.blue("                 Samiun Nafis"),
    handle: chalk.white("@samiunnafis"),
    work: `${chalk.white("Software Engineer at")} ${chalk.hex("#4285f4").bold("Webvium")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("samiunnafis"),
    github: chalk.gray("https://github.com/") + chalk.cyan("samiunnafis"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.cyan("samiunnafis"),
    facebook: chalk.gray("https://facebook/com/") + chalk.cyan("SamiunNafis0"),
    web: chalk.gray("https://") +  chalk.cyan("samiunnafis.github.io"),
    npx: chalk.blue("npx") + " " + chalk.white("samiunnafis"),

    labelWork: "        ",
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelFacebook: chalk.white.bold("   Facebook:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelFacebook}  ${data.facebook}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "                  Kudou-kun!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

console.log(me);
const tip = [
    `Tip: ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} to open links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());