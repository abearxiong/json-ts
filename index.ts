const { json2ts } = require("./src");
const json = `
{
    "name": "Shane",
    "age": 10,
    "children": ['a', 'b', 'c'],
    "body": {"a": "a"}
}
`;
console.log(json2ts(json));
