import { useState, useRef, useEffect } from 'react';
import './DesktopSide.css';
import MenuBarSide from './MenuBarSide';
import AppSide from './AppSide';
import MenuBoard from './MenuBoard';
import MenuOptionsDiv from './MenuOptionsDiv';
import wallpaper from '../wallpaper/wallpaper';
import LogOutPage from './LogOutPage';

// Apps
import NotePad from './apps/NotePad';
import Bash from './apps/Bash';
import Settings from './apps/Settings';
import YouTube from './apps/YouTube';

const DesktopSide = ({ onGetRangeVal }) => {
    //const [getDrop, setDrop] = useState([]);
    const [show, setShow] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false); // Open/Close menu settings on bar upwards
    const [isLogout, setLogout] = useState(false);

    // Apps useState
    const [isNoteOpen, setNoteOpen] = useState(false); // Open/Close Notepad app
    const [isBashOpen, setBashOpen] = useState(false); // Open/Close Bash app
    const [isSettingsOpen, setSettingsOpen] = useState(false); // Open/Close Settings app
    const [isYouTubeOpen, setYouTubeOpen] = useState(false); // Open/Close Youtube app

    // Get Current Range Value
    const [currentVal, setCurrentVal] = useState('100'); // Initial value of brightness is 100

    // Maximize App window
    const [maximizeApp, setMaximizeApp] = useState({
        width: '100%',
        height: '95.5%',
        top: '30px',
        right: '0px',
        roundedBorder: '0px',
        index: '30',
    }); 

    // Minimize App window
    const [minimizeApp, setMinimizeApp] = useState({
        width: '750px',
        height: '550px',
        marginTop: '70px',
        align: 'center',
        position: 'absolute',
        right: '',
        roundedBorder: '10px',
        index: '15',
        settingsTop: '70px',
        settingsHeight: '550px'
    });  

    // Save Image Source
    const [getLocalSource, setLocalSource] = useState([]);
    const [imgSrc , setImgSrc] = useState(wallpaper[8].image); 

    // Save Local Text from Notepad app
    const [getLocalText, setLocalText] = useState([]);
    const [getText, setText] = useState('');

    const storeText = () => {
        if (getText === null) {
            alert('Please write a note');
        } else {
            setLocalText([getText]);
        }
    }

    const saveText = () => {
        localStorage.setItem('text', JSON.stringify(getLocalText));
    };

    const saveLocalText = () => {
        if (localStorage.getItem('text') === null) {
            localStorage.setItem('text', JSON.stringify([]))
        } else {
            const text = JSON.parse(localStorage.getItem('text'));
            setLocalText(text);
        }
    }

    const storeSource = () => {
        if (imgSrc === null) {
            console.log('Default paper undefined')
        } else {
            setLocalSource([imgSrc])
        }
    }

    const saveSource = () => {
       localStorage.setItem('imageSource', JSON.stringify(getLocalSource));
    }

    const saveLocalSource = () => {
        if (localStorage.getItem('imageSource') === null) {
            localStorage.setItem('imageSource', JSON.stringify([]))
        } else {
            const source = JSON.parse(localStorage.getItem('imageSource'))
            setLocalSource(source);
        }
    }

    // Open menu apps through button click
    const openMenuHandler = () => {
        setShow(!show);
        setIsActive(!isActive);
        console.log('Executed');
    };

    // Close menu apps/menu settings through Esc button press
    const closeMenuOnKey = (event) => {
        console.log(event.key);
        if (event.key === 'Escape') {
            setShow(false);
            setIsActive(false);
            setMenuOpen(false);
        };
    };

    // Close Notepad app 
    const closeNotePadHandler = () => {
        setNoteOpen(false);

        // Remove active class from button
        const el = document.querySelector('.active');
        el.classList.remove('active');
    };

    // Close Bash app
    const closeBashHandler = () => {
        setBashOpen(false);

        const el = document.querySelector('.active');
        el.classList.remove('active');
    };

    // Close Settings app
    const closeSettingsHandler = () => {
        setSettingsOpen(false);

        const el = document.querySelector('.active');
        el.classList.remove('active');
    };

    // Close Youtube app
    const closeYouTubeHandler = () => {
        setYouTubeOpen(false);

        const el = document.querySelector('.active');
        el.classList.remove('active');
    };

    // Open/Close Menu on bar upwards

    const openMenuBarUp = () => {
        setMenuOpen(!isMenuOpen);
    };

    // Get Brightness range input value
    const getRangeState = (val) => {
        onGetRangeVal(val);
        setCurrentVal(val);
    };

    // Open Logout Page
    const openLogOutPage = () => {
        setLogout(true);
    };

    // Close Logout Page
    const closeLogOutPage = () => {
        setLogout(false);
    };

    const draggingOver = (e) => {
        e.preventDefault();
        console.log('dragging over now');
    }

    const dragDropped = (e) => {
        console.log('Dropped');
        let transferedApp = e.dataTransfer.getData('appName');
    }

    // Store notepad information


    let el = useRef(null);

    useEffect(() => {
        storeSource();
    }, [imgSrc])

    useEffect(() => {
        saveLocalSource();
    }, [])

    useEffect(() => {
        saveSource();
    }, [getLocalSource])

    useEffect(() => {
      el.current.focus();
    }, []);

    useEffect(() => {
        el.current.style.backgroundImage = `url(${getLocalSource})`; // Change wallpaper dynamically
    }, [getLocalSource])

    useEffect(() => {
        saveLocalText();
    }, [])

    useEffect(() => {
        saveText(); 
    }, [getLocalText]);  

    return (
        <div droppable='true' onDragOver={(e) => draggingOver(e)} onDrop={(e) => dragDropped(e)} ref={el} tabIndex={0} className='desktop__side' onKeyDown={closeMenuOnKey}>
            {isLogout ? <LogOutPage closeHandler={closeLogOutPage}/> : null}
            <MenuBarSide onMenuOpenHandler={openMenuBarUp}></MenuBarSide>
            {isMenuOpen && <MenuOptionsDiv openHandler={openLogOutPage} onGetRangeStateHandler={getRangeState} onReturnVal={currentVal}/>}
            {show ? <MenuBoard menuIsShow={setShow} menuIsActive={setIsActive} onSetYouTubeOpen={setYouTubeOpen} onSetSettingsOpen={setSettingsOpen} onSetBashOpenMenu={setBashOpen} onSetNoteOpenMenu={setNoteOpen} defaultImg={getLocalSource} openMenuHandler={openMenuHandler}/> : null}
            {isNoteOpen ? <NotePad storedText={getLocalText} setText={setText} storeText={storeText} onMaximizeApp={maximizeApp} onMinimizeApp={minimizeApp} onCloseNotePadHandler={closeNotePadHandler}/> : null}
            {isBashOpen ? <Bash onMaximizeApp={maximizeApp} onMinimizeApp={minimizeApp} onCloseBashHandler={closeBashHandler}/> : null}
            {isSettingsOpen ? <Settings defaultImg={getLocalSource} onImgSrc={setImgSrc} onMaximizeApp={maximizeApp} onMinimizeApp={minimizeApp} onCloseSettingsHandler={closeSettingsHandler}/> : null}
            {isYouTubeOpen ? <YouTube onMaximizeApp={maximizeApp} onMinimizeApp={minimizeApp} onCloseYouTubeHandler={closeYouTubeHandler}/> : null}
            <AppSide onSetYouTubeOpen={setYouTubeOpen} onSetSettingsOpen={setSettingsOpen} onSetBashOpen={setBashOpen} onSetNoteOpen={setNoteOpen} openMenuHandler={openMenuHandler} isActive={isActive}/>
        </div>
    )
};

export default DesktopSide;