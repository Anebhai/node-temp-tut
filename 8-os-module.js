const os = require("os");

const user = os.userInfo();
console.log(user);

console.log(`The system uptime is ${os.uptime()} seconds`);

const osInfo = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(osInfo);
