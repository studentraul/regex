const codigos = 'A121B12112C12212F12G01';
const exp = /[A-Za-z]\d+/g;
const result = codigos.match(exp);

console.log(result)