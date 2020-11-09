import React,{useState,useEffect} from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import axios from '../axios';
import Pusher from 'pusher-js';
import './Feed.css'

const pusher = new Pusher('9b63ed72d68f9d380aa5', {
    cluster: 'ap2'
  });
const Feed=()=>{
    const [postsData,setPostsData]=useState([]);

    const syncFeed=()=>{

        axios.get('/retrieve/posts')
        .then((res)=>{
            console.log(res.data)
            setPostsData(res.data)
        })
    }
    useEffect(()=>{
        const channel = pusher.subscribe('posts');
        channel.bind('inserted', function(data) {
            syncFeed()
        });
    },[])
    useEffect(()=>{
        syncFeed()
    },[])

    return(
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            { 
                postsData.map(entry=>(
                    <Post
                     profilePic={entry.avatar}
                     message={entry.text}
                     timestamp={entry.timestamp}
                     imgName={entry.imgName}
                     username={entry.user}/>  
                )) 
            }
                
        </div>
    )
}

export default Feed;