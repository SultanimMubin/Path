const fs = require('fs')
const path = require('path')

var codes = [
    "qk0-m_LARCY",
    "qk0-m_LARCY",
    "VoZMOmjXENU",
    "VoZMOmjXENU",
    "tk4dIgIG5Qs",
    "tk4dIgIG5Qs",
    "gOp7tYFk-38",
    "gOp7tYFk-38",
    "98QmnyyIXsY",
    "98QmnyyIXsY",
    "bZBmOd83Fds",
    "bZBmOd83Fds",
    "2wRcDM_5rjs",
    "2wRcDM_5rjs",
    "bVMGyXnnoRM",
    "bVMGyXnnoRM",
    "NqDLB3JWfds",
    "NqDLB3JWfds",
    "Uxeqt6dIziQ",
    "Uxeqt6dIziQ",
    "GVNy3x_PwFk",
    "GVNy3x_PwFk",
    "if36bqHypqk",
    "if36bqHypqk",
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