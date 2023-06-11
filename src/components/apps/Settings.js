import { useState, useRef, useEffect } from 'react';
import { VscChromeMinimize, VscChromeRestore, VscChromeMaximize } from 'react-icons/vsc';
import { RiCloseFill } from 'react-icons/ri';
import './Settings.css';
import wallpaper from '../../wallpaper/wallpaper';
import WallpaperGallery from './WallpaperGallery';

const Settings = ({ onMaximizeApp, onMinimizeApp, onCloseSettingsHandler, onImgSrc, defaultImg }) => {
    const [settingsMinBtn, setSettingsMinBtn] = useState(true);

    const settingsEl = useRef(null);
    const settingsElChild = useRef(null);

    const maximizeSettingsHandler = () => {
        setSettingsMinBtn(false);
        settingsEl.current.style.width = onMaximizeApp.width;
        settingsEl.current.style.height = onMaximizeApp.height;
        settingsEl.current.style.right = onMaximizeApp.right;
        settingsEl.current.style.marginTop = onMaximizeApp.top;
        settingsEl.current.style.borderTopLeftRadius = onMaximizeApp.roundedBorder;
        settingsEl.current.style.borderTopRightRadius = onMaximizeApp.roundedBorder;
        settingsElChild.current.style.borderTopLeftRadius = onMaximizeApp.roundedBorder;
        settingsElChild.current.style.borderTopRightRadius = onMaximizeApp.roundedBorder;
        settingsEl.current.style.zIndex = onMaximizeApp.index;
    };

    const minimizeSettingsHandler = () => {
        setSettingsMinBtn(true);
        settingsEl.current.style.width = onMinimizeApp.width;
        settingsEl.current.style.height = onMinimizeApp.settingsHeight;
        settingsEl.current.style.right = onMinimizeApp.right;
        settingsEl.current.style.marginTop = onMinimizeApp.settingsTop;
        settingsEl.current.style.alignSelf = onMinimizeApp.align;
        settingsEl.current.style.borderTopLeftRadius = onMinimizeApp.roundedBorder;
        settingsEl.current.style.borderTopRightRadius = onMinimizeApp.roundedBorder;
        settingsEl.current.style.zIndex = onMinimizeApp.index;
    };

    const getAttributeImage = (event) => {
        // In order to manually add an attribute in React we should use lowercase letters
        const el = event.target;
        onImgSrc(el.getAttribute('imgsource'));
        console.log(el.getAttribute('imgsource'));
    };

    useEffect(() => {
        const element7 = settingsEl.current;
        const element8 = settingsElChild.current;
    }, []); 

    return (
        <div ref={settingsEl} className='settings'>
            <div ref={settingsElChild} className='settingsBtns'>
                <div style={{ border: 'none', backgroundColor: '#ccc', borderRadius: '50%', padding: '0 5px', marginRight: '10px' }}>
                <VscChromeMinimize onClick={() => onCloseSettingsHandler()} style={{ fontSize: '10px',}}/>
                </div>
                <div style={{ border: 'none', backgroundColor: '#ccc', borderRadius: '50%', padding: '0 5px', marginRight: '10px' }}>
                {settingsMinBtn ? <VscChromeMaximize onClick={() => maximizeSettingsHandler()} style={{ fontSize: '10px',}}/> : <VscChromeRestore style={{ fontSize: '10px',}} onClick={() => minimizeSettingsHandler()}/>}
                </div>
                <div style={{ border: 'none', backgroundColor: '#ccc', borderRadius: '50%', padding: '0 5px', marginRight: '10px' }}>
                <RiCloseFill onClick={() => onCloseSettingsHandler()} style={{ fontSize: '10px',}}/>
                </div>
            </div>
            <div style={{ width: '100%', height: '100%', overflow: 'scroll'}}>
            <div className='wallpaper__screen'>
                <div style={{ width: '280px', height: '160px'}}>
                  <img src={defaultImg} alt='image'/>
                </div>
            </div>
            <div className='wallpaper__choose'>
                {wallpaper.map((source, index) => <WallpaperGallery key={index} wallpaperSource={source.image} onGetAttributeImage={getAttributeImage} wallpaperAttribute={source.image}/>)}
            </div>
            </div>
        </div>
    )
};

export default Settings;

/*<div className='wallpaper__gallery'>
                  <img src={wallpaper.image1} onClick={getAttributeImage} imgsource={wallpaper.image1} alt='image'/> 
                </div>
                <div className='wallpaper__gallery'>
                  <img src={wallpaper.image2} onClick={getAttributeImage} imgsource={wallpaper.image2} alt='image'/> 
                </div>
                <div className='wallpaper__gallery'>
                  <img src={wallpaper.image3} onClick={getAttributeImage} imgsource={wallpaper.image3} alt='image'/> 
                </div>
                <div className='wallpaper__gallery'>
                  <img src={wallpaper.image4} onClick={getAttributeImage} imgsource={wallpaper.image4} alt='image'/> 
                </div>
                <div className='wallpaper__gallery'>
                  <img src={wallpaper.image5} onClick={getAttributeImage} imgsource={wallpaper.image5} alt='image'/> 
                </div>
                <div className='wallpaper__gallery'>
                  <img src={wallpaper.image6} onClick={getAttributeImage} imgsource={wallpaper.image6} alt='image'/> 
                </div>
                <div className='wallpaper__gallery'>
                  <img src={wallpaper.image7} onClick={getAttributeImage} imgsource={wallpaper.image7} alt='image'/> 
                </div>
                <div className='wallpaper__gallery'>
                  <img src={wallpaper.image8} onClick={getAttributeImage} imgsource={wallpaper.image8} alt='image'/> 
                </div>
                <div className='wallpaper__gallery'>
                  <img src={wallpaper.image9} onClick={getAttributeImage} imgsource={wallpaper.image9} alt='image'/> 
                </div>
                <div className='wallpaper__gallery'>
                  <img src={wallpaper.image10} onClick={getAttributeImage} imgsource={wallpaper.image10} alt='image'/> 
                </div>*/