import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friends = useLoaderData();
    console.log(friends)
    return (
        <div>
            <h3>Everything about this person is here.</h3>
            <h4>Name:{friends.name}</h4>
            <h3>Email:{friends.email}</h3>
            <h3>Phone:{friends.phone}</h3>
            <h3></h3>
            <h3></h3>


        </div>
    );
};

export default FriendDetail;