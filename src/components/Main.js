import React from 'react';

export default function Main(props){
    return (
        <div className='main'>
            <img src={props.imageUrl} alt='a sample page'></img>
        </div>
    );
}