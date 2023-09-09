

//FIRSY CODE

/*

const amount = 100;

if(amount < 0) {
    console.log("Invalid amount");
}else if(amount >10) {
    console.log('number grater than ten');
}

console.log(`hey there am ${amount}years old`);

*/

//SECOND CODE

/**
 * 
 * // GLOBALS -NO WINDOW!!!

// __dirname -path to current directory
// __filename -file name
// require -function to use modules (CommonJS )
// module - info about current module (file)
// Process - info about env where thr program is been executed


console.log(__dirname)

setInterval(() => {
    console.log("javascript is fun")
}, 500)
 * 
 */




//Third CODE

/**
 * // Modules

const sulaiman = "Sulaiman"
const idris = "idris"

const Greeting = (name) => {
    console.log(`good moring ${name}`)
}

setInterval(() => 
        Greeting('zak')
    ,1000)
 * 
 */


//Fourth CODE(IMPORTING AND EXPORTING MODULES)

/**
 * 
 * 
const sulaiman = "Sulaiman"
const Abdullah =" Abdullah"
const samada = "Samada"

module.exports = { sulaiman, samada, Abdullah}
 * 

const Greeting = (name) => {
    console.log(`good moring ${name}`)
}

module.exports = Greeting
*
//JS, every file is module (by default)
// Modules - Encapsulation code (only share minimum)
const names = require('./var')
const util = require('./util')
const Greeting = require('./util')
const eyan = require('./var2')

console.log(eyan)
// Greeting(eyan.singlePerson.name)


// setInterval(() => 
//         Greeting('zak')
//     ,1000)
 */



//fifth CODE

/**
 * INBUILT MODULES
 * 
 * 
 * const os = require('os');

//info about user
const user = os.userInfo();
console.log(user)

//method to retun system uptime 
console.log(`this system has been on for the past ${os.uptime()} seconds`)

const currentOS = {
    namme: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    somth: os.cpus(),
}

console.log(currentOS)
 */


//Sixth CODE

/**
 * PATH MODULE
 * 
 * const path = require('path');

console.log(path.sep)

const filePath = path.join('/content', 'test.txt');
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content','text')
console.log(absolute)
 */


//eight CODE

/**
 * 
 * const { readFileSync,writeFileSync } = require('fs')

// RAD FILE
const first  = readFileSync('./content/text.txt', 'utf8');
const second = readFileSync('./content/text2.txt', 'utf8');

console.log(first, second);

// CRAETE FILES
writeFileSync('./content/story.txt',
`well let see hoiw thigns go cos node is fun so far`,
{flag: "a"} )
console

 * 
 */

//nineth CODE

/**
 * 
 * const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`
        <center>
        <h1>Welvome to home</h1>
        <p>At home we are pationate about giving you the best possible enjoyment.</p>
        </center>
        `)}

    if (req.url === '/about') {
        res.end(`
        <h1>About US</h1>
        <p>we are aherfe to serev you  better </p>
        `)}

    res.end(`
    <h1>Oops!</h1>
    <p>can't find this page</p>
    <a href="/">home</a>
    `)

    
})

server.listen(5000);
 */

//tent CODE

/**
 * 
 * const _ = require('lodash');

const items = [1,[2,[4,[5]]]] 
const newItem =_.flattenDeep(items)
console.log(newItem);

 * 
 */

//SEve CODE

/**
 * 
 * 
 */


// eight code

/**
 * 
 * 
 */


// eight code

/**
 * 
 * 
 */


// eight code

/**
 * 
 * 
 */


// eight code

/**
 * 
 * 
 */


// eight code

/**
 * 
 * 
 */