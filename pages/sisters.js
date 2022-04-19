export const videos = [
    "DHAK-Idi_OY",
    "t6W3f8DfRqs",
    "3nAETHZTObk",
    "15aWaGYheJs",
    "P30QlwSsUic",
    "MEIXRLcC6RA",
    "tVcEEw6qbBQ",
    "cQPVXrV0GNA",
    "EtWknf1gzKo",
    "3jwAGWky98c",
    "YO244P1e9QM",
    "qgVFkRn8f10",
    "6EDBlowVST0",
    "Pxujitlv8wc",
    "8IlzKri08kk",
    "FGnS-Xk0ZqU",
    "wNe6RuK0FfA",
    "t3g26p9Mh_k",
    "qBCVVszQQNs",
    "jhszFBtBPoI",
    "L-osEc07vMs",
    "Ptmlvtei8hw",
    "7NY6XdPBhxo",
    "-dbRterutHY",
    "23ZzI6WZS28",
    "eJ9Zjc-jdys",
    "YbdkbCU20_M",
    "CMiPYHNNg28",
    "8m6hHRlKwxY",
    "Qqe4thU-os8",
    "ZDZUAleWX78",
    "a5jmdh9AnS4",
    "QVCjdNxJreE",
    "f-ldPgEfAHI",
    "VzDMG7ke69g",
    "gcz1FOWw0Cg",
    "zrKdz93WlVk",
    "mBq1ULWJp_M",
    "pv3Kj0UjiLE",
    "i-0rSv6oxSY",
    "qIGXTJLrLf8",
    "h2xufrHWG3E",
    "9O5JQqlngFY",
    "YJHGfbW55l0",
    "Gd09V2AkZv4",
    "jLmoJPxihjA",
    "JQByjprj_mA",
    "oefAI2x2CQM",
    "LsEYgwuP6ko",
    "hok2hyED9go",
    "h_1QLdtF8d0",
    "MD3Fc0XOjWk",
    "vl6Vlf2thvI",
    "7VM9YxmULuo",
    "W0TM4LQmoZY",
    "udZUaNKXbJA",
    "7S4WMwesMts",
    "DVouQRAKxYo",
    "wpKulkADzBk",
    "fcGDUcGjcyk",
    "ORB866QSGv8",
    "VGcT1-XaWgk",
    "8FqlTslU22s",
    "uVUf_pt7Sh0",
    "zK7Ckmxxqds",
    "DGpPHrLF-5M",
    "HLYPm2idSTE",
    "f8G7IulYxiA",
    "-oVavgmveyY",
    "rNjPI84sApQ",
    "NHqEthRCqQ4",
    "uqEUzgVAF6g",
    "TZk6vcmLcKw",
    "gEUu-A2wfSE",
    "Iz0Q9nTZCw4",
    "fSEFXl2XQpc",
    "_vZ0lefPg_0",
    "1UvuBYUbFk0",
    "v_j-LD2YEqg",
    "7xeFP0SEDdc"
]

const Sisters = ({ videoCode }) => {

    return <a target='_blank' href={`https://youtube.com/watch?v=${videoCode}`}>Random Video ({videoCode})</a>
}

export default Sisters

export async function getServerSideProps({ params, res }) {
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    return {
        props: {
            videoCode: randomVideo
        }
    }
}