import React from 'react';
import Chapter from './Chapter'

export default function Sidebar(props){
    return (
        <div className='side'>
            <Chapter chapter='1' />
            <Chapter chapter='2' />
        </div>
    );
}