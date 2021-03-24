const franc = require('franc');
const langs = require('langs');

const input = process.argv[2];
const string2 = franc(input); 

if(string2 === 'und')
{
    console.log("Could not find the language, Try with different and more sample tests")
}
else 
{
const Language = langs.where("3" , string2);
console.log(Language.name);
}