import './AppGallery.css';

const AppGallery = ({ imageSource, appName, heightSpec, onOpenApps, imgsource }) => {
    return ( 
        <div className='app__gallery'>
            <img onClick={onOpenApps} imgsource={imgsource} src={imageSource} alt='image'/>
            <span className='app__name'>{appName}</span>
        </div>
    )
}

export default AppGallery;