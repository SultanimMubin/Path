import { videos as CognitoVideos } from "./cognito";
import { videos as DaveVideos } from "./dave";
import { videos as CrashVideos } from "./crash";
import { videos as SistersVideos } from './sisters';
import { videos as ParthVideos } from './parth';
import { videos as DonVideos } from './don';

const Cognito = ({ videoCode, from }) => {

    return <div>
        <a target='_blank' href={`https://youtube.com/watch?v=${videoCode}`}>Random Video ({videoCode})</a>
        <br />
        <div>from {from} videos</div>
    </div>
}

export default Cognito

export async function getServerSideProps({ params, res }) {
    const all = 
    CognitoVideos
    .concat(DaveVideos)
    .concat(CrashVideos)
    .concat(SistersVideos)
    .concat(ParthVideos)
    .concat(DonVideos)
    const randomVideo = all[Math.floor(Math.random() * all.length)];
    return {
        props: {
            videoCode: randomVideo,
            from: all.length
        }
    }
}