import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    // console.log(friends)
    return (
        <div>
            <h3>These are my friends: {
friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)}</h3>
        </div>
    );
};

export default Friends;