import React from 'react';
import {Avatar} from '@material-ui/core';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Post.css';

const Post=({profilePic,message,timestamp,imgName,username})=>{
    console.log(timestamp)
    return(
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            {
                imgName?(
                    <div className="post__image">
                            <img src={ `https://its-mine.herokuapp.com/retrieve/images/single?name=${imgName}` }/>
                    </div>
                ):(
                    console.log("DEBUG >>> no image here")
                )
            }
            <div className="post__options">
                    <div className="post__option">
                        <ThumbUpIcon/>
                        <p>Like</p>
                    </div>
                    <div className="post__option">
                        <ChatBubbleOutlineOutlinedIcon/>
                        <p>Comment</p>
                    </div>
                    <div className="post__option">
                        <NearMeIcon/>
                        <p>Share</p>
                    </div>
                    <div className="post__option">
                        <AccountCircleIcon/>
                        <ExpandMoreOutlinedIcon/>
                    </div>
                    
            </div>

        </div>
    );
}

export default Post;