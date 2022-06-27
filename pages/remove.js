const fs = require('fs')
const path = require('path')

var codes = [
    "E7CwqNHn_Ns",
    "WAIUkjsZ5xQ",
    "SZbdK9e9bxs",
    "0AKAuRby7n8",
    "L_2JaFnkZ4o",
    "x2y_SLOvOvw",
    "mLhwdITTrfE",
    "t-9cqaRJMP4",
    "KlgR1q3UQZE",
    "SQONLdb1gow",
]

const Remove = ({ content }) => {
    return <div dangerouslySetInnerHTML={{ __html: content }}>
    </div>
}

export default Remove

export async function getServerSideProps({ params, res }) {
    var targetFile = path.join.apply(null, [process.cwd(), "pages", "crash.js"])
    if (!fs.existsSync(targetFile)) {
        console.log(`File not found: ${targetFile}`)
    }
    var content = fs.readFileSync(targetFile, 'utf8')
    codes.forEach(code => {
        var pattern = `\\s*"${code}".*`
        var reg = new RegExp(pattern, 'i')
        content = content.replace(reg, '')
    })
    try {
        fs.writeFileSync(targetFile, content);
    } catch (err) {
        console.error(err);
    }
    return {
        props: {
            content
        }
    }
}