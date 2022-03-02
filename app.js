/* const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method return the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)
 */

/* const path = require("path");

console.log(path.sep);

const filePath = path.join("/content/", "sub", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "sub", "test.txt");
console.log(absolute); */

/* const { readFileSync, writeFileSync } = require("fs");
console.log('start')
const first = readFileSync("./content/first.txt", "UTF8");
const second = readFileSync("./content/second.txt", "UTF8");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log('done with this task')
console.log('starting the next one') */

/* const { readFile, writeFile } = require("fs");
console.log('start')

readFile("./content/first.txt", "UTF8", (err, result) => {
  if (err) {
    cosole.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      cosole.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      }
    );
  });
});

console.log('starting next task') */

/* const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
      res.end("Welcome to our home page")
  }
  if(req.url === '/about') {
      res.end("Here is our short history")
  }
  res.end(`
  <h1> Oops! </h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>
  `)
});

server.listen(5000); */
/* 
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('Hello world') */

const { readFile, writeFile } = require("fs").promises;
/* const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile); */

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME: ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start();

/* const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}; */
/* 
getText("./content/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err)); */
