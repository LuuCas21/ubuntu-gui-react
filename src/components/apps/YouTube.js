import { useState, useRef, useEffect } from 'react';
import { VscChromeMinimize, VscChromeRestore, VscChromeMaximize } from 'react-icons/vsc';
import { RiCloseFill } from 'react-icons/ri';
import YouTubeEmbed from './YouTubeEmbed';
import './YouTube.css';

const YouTube = ({ onMaximizeApp, onMinimizeApp, onCloseYouTubeHandler }) => {
    const [youtubeMinBtn, setYoutubeMinBtn] = useState(true);

    const youtubeEl = useRef(null);
    const youtubeElChild = useRef(null);

    const maximizeYouTubeHandler = () => {
        setYoutubeMinBtn(false);
        youtubeEl.current.style.width = onMaximizeApp.width;
        youtubeEl.current.style.height = onMaximizeApp.height;
        youtubeEl.current.style.right = onMaximizeApp.right;
        youtubeEl.current.style.marginTop = onMaximizeApp.top;
        youtubeEl.current.style.borderTopLeftRadius = onMaximizeApp.roundedBorder;
        youtubeEl.current.style.borderTopRightRadius = onMaximizeApp.roundedBorder;
        youtubeElChild.current.style.borderTopLeftRadius = onMaximizeApp.roundedBorder;
        youtubeElChild.current.style.borderTopRightRadius = onMaximizeApp.roundedBorder;
        youtubeEl.current.style.zIndex = onMaximizeApp.index;
    };

    const minimizeYouTubeHandler = () => {
        setYoutubeMinBtn(true);
        youtubeEl.current.style.width = onMinimizeApp.width;
        youtubeEl.current.style.height = onMinimizeApp.height;
        youtubeEl.current.style.right = onMinimizeApp.right;
        youtubeEl.current.style.marginTop = onMinimizeApp.marginTop;
        youtubeEl.current.style.alignSelf = onMinimizeApp.align;
        youtubeEl.current.style.borderTopLeftRadius = onMinimizeApp.roundedBorder;
        youtubeEl.current.style.borderTopRightRadius = onMinimizeApp.roundedBorder;
        youtubeEl.current.style.zIndex = onMinimizeApp.index;
    };

    useEffect(() => {
        const element9 = youtubeEl.current;
        const element10 = youtubeElChild.current;
    }, []);

    return (
        <div ref={youtubeEl} className='youtube'>
            <div ref={youtubeElChild} className='youtubeBtns'>
                <div style={{ border: 'none', backgroundColor: '#ccc', borderRadius: '50%', padding: '0 5px', marginRight: '10px' }}>
                <VscChromeMinimize onClick={() => onCloseYouTubeHandler()} style={{ fontSize: '10px',}}/>
                </div>
                <div style={{ border: 'none', backgroundColor: '#ccc', borderRadius: '50%', padding: '0 5px', marginRight: '10px' }}>
                {youtubeMinBtn ? <VscChromeMaximize onClick={() => maximizeYouTubeHandler()} style={{ fontSize: '10px',}}/> : <VscChromeRestore style={{ fontSize: '10px',}} onClick={() => minimizeYouTubeHandler()}/>}
                </div>
                <div style={{ border: 'none', backgroundColor: '#ccc', borderRadius: '50%', padding: '0 5px', marginRight: '10px' }}>
                <RiCloseFill onClick={() => onCloseYouTubeHandler()} style={{ fontSize: '10px',}}/>
                </div>
            </div>
            <YouTubeEmbed embedId='mAFMJ1LnQu8'/>
        </div>
    )
}

export default YouTube;