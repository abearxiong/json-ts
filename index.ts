const { json2ts } = require('./src');
const json = `
{
    "name": "Shane"
}
`;
console.log(json2ts(json))