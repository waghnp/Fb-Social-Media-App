import React from 'react';
import Story from './Story';
const StoryReel=()=>{
    return(
        <div className="storyReel">
            <Story image='https://www.google.com/url?sa=i&url=http%3A%2F%2Fclipart-library.com%2Fanimated-images.html&psig=AOvVaw0k4yJvYdaAvuyMarSuSWuS&ust=1604243222988000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODfqZmO3-wCFQAAAAAdAAAAABAD'
                profileSrc='https://upload.wikimedia.org/wikipedia/commons/e/e0/John_Cena_2012.jpg'
                title='John Cena'
            />
            <Story image=''
                profileSrc='https://upload.wikimedia.org/wikipedia/en/d/dc/Kabir_Singh.jpg'
                title='Kabir singh'
            />
            <Story image=''
                profileSrc='https://upload.wikimedia.org/wikipedia/commons/e/e0/John_Cena_2012.jpg'
                title='Preeti Sikka'
            />
        </div>
    )
}

export default StoryReel;