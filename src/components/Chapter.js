import React from 'react';

export default function Chapter(props) {
    return (
        <div className='chapter' onClick={() => props.onClick(props.url)}>
            Chapter {props.chapter}
        </div>
    )
}