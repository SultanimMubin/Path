import { videos as CognitoVideos } from "./cognito";
import Dave, { videos as DaveVideos } from "./dave";
import { videos as CrashVideos } from "./crash";

const Cognito = ({ videoCode, from }) => {

    return <div>
        <a target='_blank' href={`https://youtube.com/watch?v=${videoCode}`}>Random Video ({videoCode})</a>
        <br />
        <div>from {from} videos</div>
    </div>
}

export default Cognito

export async function getServerSideProps({ params, res }) {
    const all = CognitoVideos.concat(DaveVideos).concat(CrashVideos)
    const randomVideo = all[Math.floor(Math.random() * all.length)];
    return {
        props: {
            videoCode: randomVideo,
            from: all.length
        }
    }
}