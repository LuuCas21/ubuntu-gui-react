import { useState, useRef } from 'react';
import iconImages from '../iconApps/icons';
import AppDiv from './AppDiv';
import { CgMenuGridO } from 'react-icons/cg';
import './AppSide.css';

const AppSide = ({ openMenuHandler, isActive, onSetNoteOpen, onSetBashOpen, onSetSettingsOpen, onSetYouTubeOpen, isBashOpen }) => {
    //const [isNoteOpen, setNoteOpen] = useState(false);
    const [spanStyle, setSpanStyle] = useState({
        opacity: 1,
    });

    let refEl = useRef(null);

    const showSpan = () => {
        refEl.current.style.opacity = spanStyle.opacity;
    };

    const hideSpan = () => {
        refEl.current.style.opacity = '0';
    };

    const openAppHandler = (event) => {
        /*if (event.target.classList.contains('Notepad')) {
           onSetNoteOpen(true);
        };*/

        switch(event.target.getAttribute('class')) {
            case 'Notepad' :
                // Open Notepad app
                onSetNoteOpen(true);

                // Close Menu while opening an application
                if (openMenuHandler) {
                    openMenuHandler(false);
                };

                //Mark button as active
                const parentEl = event.target.parentElement;
                parentEl.classList.add('active');
            break;
            case 'Spotify' :
                console.log('Spotify found');
            break;
            case 'Bash' :

                // Open Bash app
                onSetBashOpen(true);

                // Close Menu while opening an application
                if (openMenuHandler) {
                    openMenuHandler(false);
                };

                //Mark button as active
                const bashParentEl = event.target.parentElement;
                bashParentEl.classList.add('active');

            break;
            case 'Trash' :
                console.log('Trash found');
            break;
            case 'Folders' :
                console.log('Folder found');
            break;
            case 'Settings' :
                // Open Settings app
                onSetSettingsOpen(true);

                // Close Menu while opening an application
                if (openMenuHandler) {
                    openMenuHandler(false);
                };

                //Mark button as active
                const settingsParentEl = event.target.parentElement;
                settingsParentEl.classList.add('active');
            break;
            case 'VsCode' :
                console.log('VsCode found');
            break;
            case 'Youtube' :
                // Open Youtube app
                onSetYouTubeOpen(true);

                // Close Menu while opening an application
                if (openMenuHandler) {
                    openMenuHandler(false);
                };

                // Mark button as active
                const youtubeParentEl = event.target.parentElement;
                youtubeParentEl.classList.add('active');

            default :
                console.log('Not found'); 
        } 
    };

    return ( 
        <div className='app__side'>
            <div className='app__wrapper'>
            {iconImages.map((icons) => <AppDiv appname={icons.name} openAppHandler={openAppHandler} softwareName={icons.name} key={icons.name} marginSpec={icons.name.length > 12 ? '-260px' : '-180px'} widthSpec={icons.name.length > 12 ? '180px' : '100px'} image={icons.image} appName={icons.name}/>)}
            </div>
            <CgMenuGridO onMouseEnter={showSpan} onMouseLeave={hideSpan} onClick={() => openMenuHandler()} className={`menu__btn ${isActive ? 'active' : ''}`} style={{ padding: '20px', fontSize: '70px', color: 'white', borderRadius: '10px', position: 'absolute', marginBottom: '10px', bottom: '0'}}/>
            <span ref={refEl} className='box__name' style={{ width: '120px', textAlign: 'center' ,position: 'absolute', bottom: '30px', marginRight: '-200px', border: '1px solid gray', padding: '5px 20px', alignSelf: 'center', color: 'white', borderRadius: '15px', backgroundColor: 'black', fontSize: '15px', opacity: 0, transition: 'all 0.1s ease-in'}}>Show apps</span>
        </div> 
    )
};

export default AppSide;

/* 
            <AppDiv>
                <img onMouseEnter={showSpan} onMouseLeave={hideSpan} src={iconImages.image5} alt='image' />
                <span ref={spanEl} className='box__name' style={{ position: 'absolute', marginRight: '-160px', border: '1px solid gray', padding: '5px 20px', alignSelf: 'center', color: 'white', borderRadius: '15px', backgroundColor: 'black', fontSize: '15px', opacity: 0, transition: 'all 0.1s ease-in'}}>Files</span>
            </AppDiv>
            <AppDiv>
                <img src={iconImages.image1} alt='image' />
                <span ref={spanEl} className='box__name' style={{ position: 'absolute', marginRight: '-160px', border: '1px solid gray', padding: '5px 20px', alignSelf: 'center', color: 'white', borderRadius: '15px', backgroundColor: 'black', fontSize: '15px', opacity: 0, transition: 'all 0.1s ease-in'}}>Spotify</span>
            </AppDiv>
            <AppDiv>
                <img src={iconImages.image2} alt='image' />
            </AppDiv>
            <AppDiv>
                <img src={iconImages.image4} alt='image' />
            </AppDiv>
            <AppDiv>
                <img src={iconImages.image6} alt='image' />
            </AppDiv>
            <AppDiv>
                <img src={iconImages.image3} alt='image' />
            </AppDiv>
            <AppDiv>
                <img src={iconImages.image8} alt='image' />
            </AppDiv>
*/