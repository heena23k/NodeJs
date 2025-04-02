const os =  require('os');
const { release } = require('process');
// console.log(os.freemem());
// console.log(os.tmpdir());
// console.log(os.type());
// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.userInfo());

// another approach

const obj = {
    type:os.type(),
    user:os.userInfo(),
    release:os.release()
}
console.log(obj);

