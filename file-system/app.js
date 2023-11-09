const fs = require('fs')
//leemos el archivo
const data = fs.readFileSync('README.md', 'utf8');

//modificamos contenido
const newData = data.replace(/React/ig, 'Angular');
//creamos un nuevo archivo
fs.writeFileSync('README-Angular.md', newData);
//console.log(data)