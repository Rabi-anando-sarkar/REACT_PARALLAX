import { Parallax } from 'react-parallax';
import ImgThree from '../img/img 1 (3).jpg'

const ImageThree = () => (
    <Parallax className='image' bgImage={ImgThree} strength={600}>
        <div className='content'>
            <span className='img-text'>image Three of parallax</span>
        </div>
    </Parallax>
);

export default ImageThree;