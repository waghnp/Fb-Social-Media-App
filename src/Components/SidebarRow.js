import React from 'react';
import './SidebarRow.css';
import {Avatar} from '@material-ui/core';

const sidebarRow=({src,Icon,title})=>{
    return(
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon/> }
            <p>{title}</p>
        </div>
    )
}

export default sidebarRow;