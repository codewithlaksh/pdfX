const PDFMerger = require('pdf-merger-js')
const fs = require('fs')

const merger = new PDFMerger();


const mergePDFs = async (files) => {
    const filename = Date.now();
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        await merger.add(file.path)
    }

    if (!fs.existsSync('public\\pdfs')) {
        fs.mkdirSync('public\\pdfs');
        await merger.save(`public\\pdfs\\${filename}.pdf`)

        return `${filename}.pdf`
    } else {
        await merger.save(`public\\pdfs\\${filename}.pdf`)

        return `${filename}.pdf`
    }
}

module.exports = mergePDFs;
