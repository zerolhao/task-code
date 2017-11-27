#!/usr/bin/env node

var fs = require('fs')
var dirName = process.argv[2]
if (fs.existsSync(dirName)) {
  console.log('error: dir exists')
  process.exit(1)
} 
else {


fs.mkdirSync("./" + dirName)
process.chdir("./" + dirName)

fs.mkdirSync("css")
fs.mkdirSync("js")

fs.writeFileSync("./index.html","<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>")
fs.writeFileSync("css/style.css", "h1{color: red;}")
fs.writeFileSync("./js/main.js", "var string = 'Hello World!'\nalert(string)")

process.exit(0)
}