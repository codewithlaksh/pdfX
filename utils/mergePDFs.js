const PDFMerger = require('pdf-merger-js')
const fs = require('fs')

const merger = new PDFMerger();


const mergePDFs = async (pdf1, pdf2, title) => {
    const filename = Date.now() + '_' + title;
    await merger.add(pdf1);
    await merger.add(pdf2);

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
