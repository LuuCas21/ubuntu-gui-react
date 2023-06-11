import './HomeScreen.css';
import wallpaper from '../wallpaper/wallpaper';
//import Images from '../iconApps/image';

const HomeScreen = ({ onEventHandler, screenDefaultImg }) => {
    console.log(screenDefaultImg)
    return (
        <div className='homeScreen'>
            <img onClick={onEventHandler} src={screenDefaultImg} alt='image' /> 
        </div>
    )
};

export default HomeScreen;