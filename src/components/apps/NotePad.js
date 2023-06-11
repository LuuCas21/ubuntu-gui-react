import { useState, useRef, useEffect } from 'react';
import { VscChromeMinimize, VscChromeRestore, VscChromeMaximize } from 'react-icons/vsc';
import { RiCloseFill } from 'react-icons/ri';
import './NotePad.css';

const NotePad = ({ onCloseNotePadHandler, onMaximizeApp, onMinimizeApp, storeText, setText, storedText }) => {
    const [showMinBtn, setMinBtn] = useState(true);

    let notepadEl = useRef(null);
    let textAreaEl = useRef(null);
    let notepadElChild = useRef(null);

    const maximizeAppHandler = () => {
        setMinBtn(false);
        notepadEl.current.style.width = onMaximizeApp.width;
        notepadEl.current.style.height = onMaximizeApp.height;
        notepadEl.current.style.right = onMaximizeApp.right;
        notepadEl.current.style.marginTop = onMaximizeApp.top;
        notepadEl.current.style.borderTopLeftRadius = onMaximizeApp.roundedBorder;
        notepadEl.current.style.borderTopRightRadius = onMaximizeApp.roundedBorder;
        notepadElChild.current.style.borderTopLeftRadius = onMaximizeApp.roundedBorder;
        notepadElChild.current.style.borderTopRightRadius = onMaximizeApp.roundedBorder;
        notepadEl.current.style.zIndex = onMaximizeApp.index;
    };

    const minimizeAppHandler = () => { 
        setMinBtn(true);
        notepadEl.current.style.position = onMinimizeApp.position;
        notepadEl.current.style.width = onMinimizeApp.width;
        notepadEl.current.style.height = onMinimizeApp.height;
        notepadEl.current.style.marginTop = onMinimizeApp.marginTop;
        notepadEl.current.style.alignSelf = onMinimizeApp.align;
        notepadEl.current.style.right = onMinimizeApp.right;
        notepadEl.current.style.borderTopLeftRadius = onMinimizeApp.roundedBorder;
        notepadEl.current.style.borderTopRightRadius = onMinimizeApp.roundedBorder;
        notepadElChild.current.style.borderTopLeftRadius = onMinimizeApp.roundedBorder;
        notepadElChild.current.style.borderTopRightRadius = onMinimizeApp.roundedBorder;
        notepadEl.current.style.zIndex = onMinimizeApp.index;
    };

    const getTextVal = (event) => {
        setText(event.target.value);
    };

    const dragStarted = (e, appName) => {
        console.log('Drag has started!');
        //onst notepadID = notepadEl.current.getAttribute('appname');
        e.dataTransfer.setData('appName', appName);
    }

    //console.log(document.querySelector('.active'));

    useEffect(() => {
        // Condition to see if elements exists before being assigned to useRef hook
        const element = notepadEl.current;
        const element2 = textAreaEl.current;
        const element3 = notepadElChild.current;
        element2.focus();

    }, []);
 
    return (
        <div draggable onDragStart={(e) => dragStarted(e, notepadEl.current.getAttribute('appname'))} appname='notepad' ref={notepadEl} className='notepad'>
            <div ref={notepadElChild} className='windowBtns' style={{ width: '100%', height: '50px', backgroundColor: '#E6E4E2', borderBottom: '1px solid #C6C1BB', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}>
                <button type='button' onClick={() => storeText()} className='save__btn'>Save</button>
                <div style={{ border: 'none', backgroundColor: '#ccc', borderRadius: '50%', padding: '0 5px', marginRight: '10px' }}>
                <VscChromeMinimize style={{ fontSize: '10px',}} onClick={() => onCloseNotePadHandler()}/>
                </div>
                <div style={{ border: 'none', backgroundColor: '#ccc', borderRadius: '50%', padding: '0 5px', marginRight: '10px' }}>
                {showMinBtn ? <VscChromeMaximize onClick={maximizeAppHandler} style={{ fontSize: '10px',}}/> : <VscChromeRestore onClick={minimizeAppHandler} style={{ fontSize: '10px',}} />}
                </div>
                <div style={{ border: 'none', backgroundColor: '#ccc', borderRadius: '50%', padding: '0 5px', marginRight: '10px' }}>
                <RiCloseFill onClick={() => onCloseNotePadHandler()} style={{ fontSize: '10px',}}/>
                </div>
            </div>
            <textarea defaultValue={storedText[0]} onChange={getTextVal} ref={textAreaEl} className='input__text'></textarea> 
        </div>
    )
};

export default NotePad;