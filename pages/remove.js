const fs = require('fs')
const path = require('path')

var codes = [
    "LEN8FZEKaNU",
    "sNWrOuwzax8",
    "VeTeK9kvxyo",
    "nGlQkaoIfBI",
    "xLKUXI0enbg",
    "P05G89hgrPI",
    "jQpvph777Pg",
    "b3mj4QQH8TM",
    "kX0jHv05FYM",
    "XdvIsJF9d9s",
    "5VI3qcSuUlk",
    "J1IyUPMXwS0",
    "U96m8inKt24",
    "snJpYLV7bYA",
    "FS2ndY5WJXA",
    "9m5I-HO3w8w",
    "ZjAqfh9aY9Y",
    "2_ktCNGYbrU",
    "1xrcHQB5EEU",
    "pDFiY81TLIM",
    "fXRpTLvPdT0",
    "mdvfXzCoqvA",
    "5gxHbYI0uy4",
    "oc3dWwbctw4",
    "5lp-HBv-3bA",
    "yzAdZDK4XKA",
    "DenEXMVt0gU",
    "zMO258I-7uc",
    "wxzz31ww4M4",
    "DA16n8ilUp8",
    "M3K9uKIMob0",
    "KMVnscTctqI",
    "sDIvfEJ59XY",
    "xiiaed3puhY",
    "uMzuxuA1POU",
    "jUM4RkZ1tuI",
    "K3SzObknn8I",
    "Fx0Z6y2HmlM",
    "B99H6Ygnzgw",
    "u_JmkmPYpec",
    "sYJosVHkwgo",
    "fDzVtXbtEow",
    "vGLZDFHnnwk",
    "DK_vZuLYHcw",
    "c7fqMPDcKXM",
    "eJ7w2I83ba4",
    "qgajQD7PJp0",
    "ovSW1G7wrCg",
    "9sSLz5t7a5M",
    "kn-ER4bL7f8",
    "4kxzD4ASioI"
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
        console.log(reg.test(content), pattern)
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