import { Parallax } from 'react-parallax';
import ImgTwo from '../img/img 1 (2).jpg'

const ImageTwo = () => (
    <Parallax className='image' bgImage={ImgTwo} strength={600}>
        <div className='content'>
            <span className='img-text'>image Two of parallax</span>
        </div>
    </Parallax>
);

export default ImageTwo;