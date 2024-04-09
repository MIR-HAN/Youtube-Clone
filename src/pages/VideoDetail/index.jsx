import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import api from '../../utils/Api';
import ReactPlayer from 'react-player'
import VideoInfo from './VideoInfo';
import ChanelInfo from './ChanelInfo';
import VideoCard from '../../components/VideoCard';
import Comments from './Comments';



const VideoDetails = () => {

    const [video, setVideo] = useState(null);
    const [comments, setComments] = useState(null);

    // get id (v=)from url 
    const [searchParams] = useSearchParams();
    const id = searchParams.get('v');

    useEffect(() => {

        api.get(`/video/info?id=${id}&extend=1`)
            .then((res) => setVideo(res.data));

        api.get(`/comments?id=${id}`)
            .then((res) => setComments(res.data))
          

    }, [id]);


    return (
        <div className='detail-page h-screen overflow-auto p-5 lg:px-20'>

            <div>
                <div className='h-[50vh] lg:h-[70vh] rounded-md overflow-hidden'>
                    <ReactPlayer
                        controls
                        light
                        width={'100% '}
                        height={'100%'}
                        url={`https://www.youtube.com/watch?v=${id}`} />
                </div>

                {!video && <p>Loading</p>}

                {video && (
                    <>
                        {/* Title*/}
                        <h1 className='my-3 text-xl font-bold'>{video.title}</h1>
                        {/* Left side*/}

                        <ChanelInfo video={video} />
                        {/* Video Informations*/}
                        <VideoInfo video={video} />

                        {/* Comments*/}
                        <Comments data={comments}/>

                    </>
                )}
            </div>

            <div className=' flex flex-col gap-5 p-1 ' >
                {video?.relatedVideos.data.map(
                    (item) =>
                        item.type === 'video' && (
                            <VideoCard key={item.videoId} video={item} isRow={true} />)
                )}
            </div>
        </div>
    )
}

export default VideoDetails;