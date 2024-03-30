import { Image } from 'antd';
import Photo1 from '../imges/1.jpeg';
import Photo2 from '../imges/2.jpeg';
import Photo3 from '../imges/3.jpeg';
import Photo4 from '../imges/4.jpeg';
import Photo5 from '../imges/5.jpeg';

export default function GridImg() {
    return (
        <div className="my-grid">
            <Image
                src={Photo1}
                alt="Photo"
                preview={false}
                className='image1'
            />
            <div>
                <Image
                    src={Photo2}
                    alt="Photo"
                    preview={false}
                    className='image2'
                /> <Image
                    src={Photo3}
                    alt="Photo"
                    preview={false}
                    className='image3'
                />
            </div>
            <div>
                <Image
                    src={Photo4}
                    alt="Photo"
                    preview={false}
                    className='image4'
                /> <Image
                    src={Photo5}
                    alt="Photo"
                    preview={false}
                    className='image5'
                />
            </div>


        </div>
    );
};
