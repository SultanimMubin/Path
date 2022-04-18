import { CognitoVideos } from "./cognito";
import { DaveVideos } from "./dave";
import { CrashVideos } from "./crash";

const Cognito = ({ videoCode }) => {

    return <a target='_blank' href={`https://youtube.com/watch?v=${videoCode}`}>Random Video ({videoCode})</a>
}

export default Cognito

export async function getServerSideProps({ params, res }) {
    const all = CognitoVideos.concat(DaveVideos).concat(CrashVideos)
    const randomVideo = all[Math.floor(Math.random() * all.length)];
    return {
        props: {
            videoCode: randomVideo
        }
    }
}