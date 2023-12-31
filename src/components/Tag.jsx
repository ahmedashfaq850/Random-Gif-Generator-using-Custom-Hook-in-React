import React from 'react';
import {useState} from 'react';
import useGif from '../useGif';

const Tag = () => {
    const [tag, setTag] = useState('dogs')
    const {gif, fetchGif} = useGif(tag)

    return (
        <div className='container'>
            <h1>Random {tag}</h1>
            <img width="500"
                src={gif}
                alt="random gif"/>
            <input type='text' placeholder='Search Gif'
                value={tag}
                onChange={
                    (e) => setTag(e.target.value)
                }/>
            <button onClick={
                () => fetchGif(tag)
            }>CLICK FOR NEW</button>
        </div>
    )
}

export default Tag
