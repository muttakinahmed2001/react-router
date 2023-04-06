import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id,title,body}=post;
    const navigate = useNavigate();

    const buttonHandler = ()=>{
        navigate(-1);
    }

    return (
        <div>
            <h3>Details about your post{id}</h3>
            <h2>{title}</h2>
            <small>{body}</small>
             <button onClick={buttonHandler}>Go back</button>
        </div>
    );
};

export default PostDetails;