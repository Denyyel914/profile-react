import React from 'react';

const Project = (props) => {
    return <div>
    <a href={props.link}> <img src={props.image} alt="" /></a>
    <p>{props.details}</p>
 </div>
}

export default Project;
