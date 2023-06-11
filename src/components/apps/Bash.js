import { useState, useRef, useEffect } from 'react';
import { VscChromeMinimize, VscChromeRestore, VscChromeMaximize } from 'react-icons/vsc';
import { RiCloseFill } from 'react-icons/ri';
import './Bash.css';

const Bash = ({ onMaximizeApp, onMinimizeApp, onCloseBashHandler }) => {
    const [bashMinBtn, setBashMinBtn] = useState(true);

    const bashEl = useRef(null);
    const bashElChild = useRef(null);
    const bashTextAre = useRef(null);

    const maximizeBashHandler = () => {
        setBashMinBtn(false);
        bashEl.current.style.width = onMaximizeApp.width;
        bashEl.current.style.height = onMaximizeApp.height;
        bashEl.current.style.right = onMaximizeApp.right;
        bashEl.current.style.marginTop = onMaximizeApp.top;
        bashEl.current.style.borderTopLeftRadius = onMaximizeApp.roundedBorder;
        bashEl.current.style.borderTopRightRadius = onMaximizeApp.roundedBorder;
        bashElChild.current.style.borderTopLeftRadius = onMaximizeApp.roundedBorder;
        bashElChild.current.style.borderTopRightRadius = onMaximizeApp.roundedBorder;
        bashEl.current.style.zIndex = onMaximizeApp.index;
    };

    const minimizeBashHandler = () => {
        setBashMinBtn(true);
        bashEl.current.style.width = onMinimizeApp.width;
        bashEl.current.style.height = onMinimizeApp.height;
        bashEl.current.style.right = onMinimizeApp.right;
        bashEl.current.style.marginTop = onMinimizeApp.marginTop;
        bashEl.current.style.alignSelf = onMinimizeApp.align;
        bashEl.current.style.borderTopLeftRadius = onMinimizeApp.roundedBorder;
        bashEl.current.style.borderTopRightRadius = onMinimizeApp.roundedBorder;
        bashElChild.current.style.borderTopLeftRadius = onMinimizeApp.roundedBorder;
        bashElChild.current.style.borderTopRightRadius = onMinimizeApp.roundedBorder;
        bashEl.current.style.zIndex = onMinimizeApp.index;
    };

    useEffect(() => {
        const element4 = bashEl.current;
        const element5 = bashTextAre.current;
        const element6 = bashElChild.current;

        element5.focus();
    }, []);

    return (
        <div ref={bashEl} className='bash'>
            <div ref={bashElChild} className='bashBtns'>
                <div style={{ border: 'none', backgroundColor: ' #333333', borderRadius: '50%', padding: '0 5px', marginRight: '10px' }}>
                <VscChromeMinimize onClick={() => onCloseBashHandler()} style={{ fontSize: '10px', color: '#fff'}}/>
                </div>
                <div style={{ border: 'none', backgroundColor: ' #333333', borderRadius: '50%', padding: '0 5px', marginRight: '10px' }}>
                {bashMinBtn ? <VscChromeMaximize onClick={() => maximizeBashHandler()} style={{ fontSize: '10px', color: '#fff'}}/> : <VscChromeRestore style={{ fontSize: '10px', color: '#fff'}} onClick={() => minimizeBashHandler()}/>}
                </div>
                <div style={{ border: 'none', backgroundColor: ' #333333', borderRadius: '50%', padding: '0 5px', marginRight: '10px' }}>
                <RiCloseFill onClick={() => onCloseBashHandler()} style={{ fontSize: '10px', color: '#fff'}}/>
                </div>
            </div>
            <div className='cont'>
            <textarea ref={bashTextAre} className='bash__text'></textarea> 
            </div>
        </div>
    )
};

export default Bash;