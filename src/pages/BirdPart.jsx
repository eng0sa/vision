import React, { useState } from 'react';
import birdphoto from '../imges/bird.png';
import { Button, Image } from 'antd';

const AppBird = () => {
    const [content, setContent] = useState('');

    const handleClick = (text) => {
        setContent(text);
    };

    return (
        <div className='bird-container'>
            <div className="bird-photo">
                <Image
                    src={birdphoto}
                    alt="Photo"
                    preview={false}
                    className='bird-image'
                />
                <div className="button-container">
                    <Button onClick={() => handleClick('Ease')} className="button-bird">Ease</Button>
                    <Button onClick={() => handleClick('Flexibility')} className="button-bird">Flexibility</Button>
                    <Button onClick={() => handleClick('Modernism')} className="button-bird">Modernism</Button>
                </div>
            </div>
            <div className="content-container">
                <div className="content">{content}</div>
            </div>
        </div>
    );
};

export default AppBird;
