import { Parallax } from 'react-parallax';
import ImgOne from '../img/img 1 (1).jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={ImgOne} strength={600}>
        <div className='content'>
            <span className='img-text'>image one of parallax</span>
        </div>
    </Parallax>
);

export default ImageOne;