import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1020/1000/600/',
        thumbnail: 'https://picsum.photos/id/1020/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1022/1000/600/',
        thumbnail: 'https://picsum.photos/id/1022/250/150/',
    }
];

const AdSlider = () => {
    return (
        <ImageGallery showPlayButton={false} showNav={false} lazyLoad={true} items={images}/>
    )
}

export default AdSlider;