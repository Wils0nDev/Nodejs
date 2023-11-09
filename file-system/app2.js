const fs = require('fs')
const content = fs.readFileSync('README.md', 'utf8');

const wordCount = content.split(' ').length
const words = content.split(' ')


// const reactWordCount = words.filter((word)=> word.toLowerCase() === 'react').length

//usanso expresion regular, (/react/gi) -> busca toda las palabras react sea minusculas o mayusculas
const reactWordCount = content.match(/react/gi ?? []).length
console.log('Palabras:', wordCount);
console.log('Palabras React:', reactWordCount);