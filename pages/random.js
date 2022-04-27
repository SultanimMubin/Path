import { useEffect, useRef } from 'react'
import { videos as CognitoVideos } from "./cognito";
import { videos as DaveVideos } from "./dave";
import { videos as CrashVideos } from "./crash";
import { videos as SistersVideos } from './sisters';
import { videos as ParthVideos } from './parth';
import { videos as DonVideos } from './don';
import { videos as BlueBrown } from './blue';

const Cognito = ({ videoCode, from }) => {

    const link = useRef()

    const reload = (e) => {
        link.current.click()
        setTimeout(() => {
            window.location.reload()
        }, 1000)
        e.stopPropagation()
        e.preventDefault()
    }
    return <div onClick={(e) => reload()} className="flex flex-col cursor-pointer w-screen h-screen items-center justify-center">
        <a ref={link} target='_blank' href={`https://youtube.com/watch?v=${videoCode}`} className='text-5xl'>{videoCode}</a>
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
            .concat(BlueBrown)
    const randomVideo = all[Math.floor(Math.random() * all.length)];
    return {
        props: {
            videoCode: randomVideo,
            from: all.length
        }
    }
}