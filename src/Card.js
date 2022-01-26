import React from 'react';
import './App.css'

export default function Card({id, name, username,email,address}) {
    
    return (
        // <div className='tc bg-light-green dib br3 pa3 ma2 grow bw3 shadow-5' >
        <div className='card-background'>
            <img src={`https://robohash.org/${id}`} alt="profile_img_roboproject"/>
            <div className='belowimage'>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{id}</p>
                {/* <p>{username}</p>
                <p>{address}</p> */}


            </div>
        </div>
    )
}