const fs = require('fs');
const isProduction = process.env.NODE_ENV === 'production'


function DeleteFiles(options) {
}

const deleteFile = (filename, compiler) => {
    fs.unlink(`${compiler.options.output.path}/${filename}`, (err) => {
        compiler.plugin('done', function() {
            if (err) console.log(err)
            console.log(`${filename}. was deleted`)
        });
    });
}

DeleteFiles.prototype.apply = function(compiler){
    const files = [
        'client.js',
        'client.js.map',
        'server.js'
    ]
    if(isProduction) files.map(file => deleteFile(file, compiler))
    else console.log('nothing to do here')

};

module.exports = DeleteFiles;