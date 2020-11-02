import React from 'react';
import Story from './Story';
import './StoryReel.css';

const StoryReel=()=>{
    return(
        <div className="storyReel">
            <Story image='https://upload.wikimedia.org/wikipedia/en/4/42/SasukeKishimoto.jpg'
                profileSrc='https://upload.wikimedia.org/wikipedia/commons/e/e0/John_Cena_2012.jpg'
                title='John Cena'
            />
            <Story image='https://upload.wikimedia.org/wikipedia/en/0/09/AshXYanime.png'
                profileSrc='https://upload.wikimedia.org/wikipedia/en/d/dc/Kabir_Singh.jpg'
                title='Kabir singh'
            />
            <Story image='https://upload.wikimedia.org/wikipedia/en/9/9a/NarutoUzumaki.png'
                profileSrc='https://upload.wikimedia.org/wikipedia/en/f/fc/Rambo_first_blood_part_ii.jpg'
                title='Rambo'
            />
        </div>
    )
}

export default StoryReel;