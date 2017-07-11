const transform = require('../index.js')

console.log('WGS-84转为GCJ-02')
console.log(transform.wgs2gcj(112,21))

console.log('GCJ-02转为WGS-84')
console.log(transform.gcj2wgs(112,21))

console.log('GCJ-02转为BD-09')
console.log(transform.gcj2bd(112,21))

console.log('BD-09转为GCJ-02')
console.log(transform.bd2gcj(112,21))

console.log('WGS-84转为BD-09')
console.log(transform.wgs2bd(112,21))

console.log('BD-09转为WGS-84')
console.log(transform.bd2wgs(112,21))