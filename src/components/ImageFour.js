import { Parallax } from 'react-parallax';
import ImgFour from '../img/img 1 (4).jpg'

const ImageFour = () => (
    <Parallax className='image' bgImage={ImgFour} strength={600}>
        <div className='content'>
            <span className='img-text'>image Four of parallax</span>
        </div>
    </Parallax>
);

export default ImageFour;