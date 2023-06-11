import { useState, useRef } from 'react';
import './AppSide.css';

const AppDiv = ({ image, appName, widthSpec, marginSpec, softwareName, openAppHandler, appname }) => {
    const [spanStyle, setSpanStyle] = useState({
        opacity: 1,
    });

    let spanEl = useRef(null);

    const showSpan = () => {
        spanEl.current.style.opacity = spanStyle.opacity;
    };

    const hideSpan = () => {
        spanEl.current.style.opacity = 0;   
    }

    return (
        <div className={`app__div`} appname={appname}>
            <img className={`${softwareName}`} onMouseEnter={showSpan} onMouseLeave={hideSpan} onClick={openAppHandler} src={image} alt='image' />
            <span ref={spanEl} className='box__name' style={{ width: widthSpec, textAlign: 'center' ,position: 'absolute', marginRight: marginSpec, border: '1px solid gray', padding: '5px 20px', alignSelf: 'center', color: 'white', borderRadius: '15px', backgroundColor: 'black', fontSize: '15px', opacity: 0, transition: 'all 0.1s ease-in', zIndex: '25'}}>{appName}</span>
        </div>
    )
};

export default AppDiv;