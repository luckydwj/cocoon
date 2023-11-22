#! /usr/bin/env node
const Generator = require('yeoman-generator') 

module.exports = class extends Generator { 
    
    method1() { 
        console.log("I am a custom method");
    }
    method2() { 
        console.log("I am a custom method2");
    }
}