import React from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import './Feed.css'

const Feed=()=>{
    return(
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post
            profilePic='https://upload.wikimedia.org/wikipedia/en/4/42/SasukeKishimoto.jpg'
            message='This is my Message'
            timestamp='time'
            imgName='imgName'
            username='Nilesh wagh'/>            
        </div>
    )
}

export default Feed;