
const fs = require('fs');

module.export = class {
    constructor() {
    }
    writeToFile(path,file){
        fs.writeFile(path,file , function(err) {
            if(err) {
                return -1;
            }
        }); 
    }

    readFromFile(path){
        var content = fs.readFileSync(path, 'utf8') 
        return content;
    }
} 
