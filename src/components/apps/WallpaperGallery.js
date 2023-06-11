import './Settings.css';

const WallpaperGallery = ({ wallpaperSource, onGetAttributeImage, wallpaperAttribute }) => {
    return (
        <div className='wallpaper__gallery'>
            <img src={wallpaperSource} onClick={onGetAttributeImage} imgsource={wallpaperAttribute} alt=''/> 
        </div>
    )
};

export default WallpaperGallery;