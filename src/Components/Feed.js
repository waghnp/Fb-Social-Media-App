import React from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';

const Feed=()=>{
    return(
        <div className="feed">
            <StoryReel/>
            <MessageSender/>            
        </div>
    )
}

export default Feed;