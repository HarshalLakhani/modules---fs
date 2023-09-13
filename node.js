const { isUtf8 } = require('buffer');
const fs = require('fs')

let oprr = process.argv[2]
let filename = process.argv[3]
let data = process.argv[4]

const write = () => {
    fs.writeFile(filename, data, (err) => {
        if (err) throw err;
        console.log(`file created: ${filename} with data: ${data}`);
    });
};
const read = () => {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
};
const unlink = () => {
    fs.unlink(filename , (err) => {
        if (err) throw err;
        console.log("delete");
    });
};
const rename = (currentFilename, newFilename) => {
    fs.rename(currentFilename, newFilename, (err) => {
        if (err) throw err;
        console.log("File renamed successfully!");
    });
};

if (oprr == "write") {
    write()
}

if (oprr == "read") {
    read()
}

if (oprr == "unlink") {
    unlink()
}

if (oprr === "rename") {
    const newFilename = process.argv[4]; // Replace with the desired new filename
    rename(filename, newFilename);
}
