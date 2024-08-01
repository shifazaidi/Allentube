import React, { useEffect, useState } from 'react'
import './Playvideo.css'
import vide01 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import unser_profile from '../../assets/user_profile.jpg'
import moment from 'moment'
import { value_converter } from '../../Data'


const Playvideo = ({videoId}) => {

    const [apiData,setApiData] = useState(null);

    const fetchVideoData = async () =>{
        //fetching video data
        const videoDetails_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}key=${API_KEY}`
        await fetch(videoDetails_url).then(res=>res.json()).then(data => setApiData(data.items[0]));
    }

    useEffect(()=>{
       fetchVideoData();
    },[]) 

  return (
    <div className='play-video'>
        {/* <video src={vide01} controls autoPlay muted></video> */}
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
        <div className="playvideo-info">
            <p>{apiData?value_converter(apiData.statistics.viewcount):"16k"} Views &bull;  {apiData?moment(apiData.snippet.publishedAt).fromNow():"2 days ago"}</p>
            <div>
                <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.linkeCount):"125"}</span>
                <span><img src={dislike} alt="" /></span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>Allentube</p>
                <span>1M Subsribers</span>
            </div>
            <button className='btn'>Subscribe</button>
        </div>
        <div className="vid-discription">
            <p>{apiData?apiData.snippet.discription.slice(0,250):"Discription Here"}</p>
            <hr />
            <h4>130 Comments</h4>
            <div className="comment">
                <img src={unser_profile} alt="" />
                <div>
                <h3>Jack nickolson <span>1 day ago</span> </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, explicabo delectus cumque repudiandae nostrum consequuntur!</p>
                <div className='comment-action'>
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
            </div>
            <div className="comment">
                <img src={unser_profile} alt="" />
                <div>
                <h3>Jack nickolson <span>1 day ago</span> </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, explicabo delectus cumque repudiandae nostrum consequuntur!</p>
                <div className='comment-action'>
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
            </div>
            <div className="comment">
                <img src={unser_profile} alt="" />
                <div>
                <h3>Jack nickolson <span>1 day ago</span> </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, explicabo delectus cumque repudiandae nostrum consequuntur!</p>
                <div className='comment-action'>
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
            </div>
            <div className="comment">
                <img src={unser_profile} alt="" />
                <div>
                <h3>Jack nickolson <span>1 day ago</span> </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, explicabo delectus cumque repudiandae nostrum consequuntur!</p>
                <div className='comment-action'>
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
            </div>
            <div className="comment">
                <img src={unser_profile} alt="" />
                <div>
                <h3>Jack nickolson <span>1 day ago</span> </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, explicabo delectus cumque repudiandae nostrum consequuntur!</p>
                <div className='comment-action'>
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Playvideo