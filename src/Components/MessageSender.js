import React,{ useState } from 'react';
import {Avatar,Input} from '@material-ui/core';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from '../ContextAPI/StateProvider';
import axios from '../axios';
import FormData from 'form-data';
import './MessageSender.css'

const MessageSender=()=>{
    const [input,setInput]=useState('')
    const [image,setImage]=useState(null);

    const [{user},dispatch]=useStateValue();  

    const handleChange=(e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(image){
            const imgForm=new FormData();
            imgForm.append('file',image,image.name);

            axios.post('/upload/image',imgForm,{
                headers:{
                    'accept':'application/json',
                    'Accept-Language':'en-US,en;q=0.8',
                    'Content-Type':`multipart form-data;boundary=${imgForm._boundary}`
                }
            }).then((res)=>{
                console.log(res.data)

                const postData={
                    text:input,
                    imgName:res.data.filename,
                    user:user.displayName,
                    avatar:user.photoURL,
                    timestamp:Date.now()
                }

                console.log(postData)
                savePost(postData)
            })
        }else{ 
            const postData={
                text:input,
                user:user.displayName,
                avatar:user.photoURL,
                timestamp:JSON.stringify(Date.now())
            }

            console.log(postData)
            savePost(postData)
        }

        setImage(null)
        setInput('')
    }

    const savePost=async(postData)=>{
       await axios.post('/upload/post',postData)
        .then((res)=>{
            console.log(res)
        })
    }
    return(
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input type="test" className="messageSender__input"
                    placeholder={`What's on your mind, ${user.displayName} ?`}
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}/>
                   <Input type="file" className="messageSender__fileSelector" onChange={handleChange} />
                    <button type="submit" onClick={handleSubmit}>Hidden Submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                   <VideoCallIcon style={{color:'red'}}/>
                   <h3>Live Video</h3> 
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:'green'}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color:'orange'}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;