import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import('./Post.css')
const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();
    const handlerNavigate = () => {
         navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <p>{id}</p>
            <h3>{title}</h3>
            <Link to={`/post/${id}`}>Show me details</Link>
            <Link to={`/post/${id}`}><button>Show me details</button></Link>
            <button onClick={handlerNavigate}>with even handler</button>

        </div>
    );
};

export default Post;