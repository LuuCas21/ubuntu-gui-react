import { useState } from 'react'; 
import './MenuBoard.css';
import iconImages2 from '../iconApps/icons2';
import AppGallery from './AppGallery';
import HomeScreen from './HomeScreen';

const MenuBoard = ({ openMenuHandler, defaultImg, menuIsShow, menuIsActive, onSetBashOpenMenu, onSetNoteOpenMenu, onSetSettingsOpen, onSetYouTubeOpen }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const getSearchInput = (event) => {
        setSearchTerm(event.target.value); 
    }

    const openApps = (event) => {
        const getAttr = event.target.getAttribute('imgsource');
        switch(getAttr) {
            case 'Bash' :
                // Open bash app
                onSetBashOpenMenu(true);

                //Mark button as active
                const bashEl = document.querySelectorAll('.app__div');
                
                bashEl.forEach(els => {
                    if (els.getAttribute('appname') === 'Bash') {
                        els.classList.add('active');
                    }
                })

                menuIsShow(false);
                menuIsActive(false);

                break;
            case 'Notepad' :
                // Open bash app
                onSetNoteOpenMenu(true);

                //Mark button as active
                const noteEl = document.querySelectorAll('.app__div');
                noteEl.forEach(els => {
                    if (els.getAttribute('appname') === 'Notepad') {
                        els.classList.add('active');
                    }
                })

                menuIsShow(false);
                menuIsActive(false);

                break;
            case 'Settings' :
                // Open settings app
                onSetSettingsOpen(true);

                //Mark button as active
                const settingsEl = document.querySelectorAll('.app__div');
                settingsEl.forEach(els => {
                    if (els.getAttribute('appname') === 'Settings') {
                        els.classList.add('active');
                    }
                })

                menuIsShow(false);
                menuIsActive(false);
                break;
            case 'Youtube' :
                // Open Youtube app
                onSetYouTubeOpen(true);

                // Mark button as active
                const youtubeEl = document.querySelectorAll('.app__div');
                youtubeEl.forEach(els => {
                    if (els.getAttribute('appname') === 'Youtube') {
                        els.classList.add('active');
                    }
                })

                menuIsShow(false);
                menuIsActive(false);
                break;
            default :
            console.log('App undefined');
        }
    };

    return (
        <div className='menu__board'> 
            <div className='search__input div'>
                <input onChange={getSearchInput} className='inputSearch' type='search' placeholder='Type to search'/>
            </div>
            <div className='returnHome'>
               <HomeScreen screenDefaultImg={defaultImg} onEventHandler={openMenuHandler}/>
            </div>
            <div className='apps div'>
                {/*iconImages2.map(icons => <AppGallery onOpenApps={openApps} imgsource={icons.name} imageSource={icons.image} appName={icons.name} key={icons.name} heightSpec={icons.heightSize}/>)*/}
                {iconImages2.filter(vals => {
                    if (searchTerm === '') {
                        return vals;
                    } else if (vals.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return vals;
                    }
                }).map(icons => <AppGallery onOpenApps={openApps} imgsource={icons.name} imageSource={icons.image} appName={icons.name} key={icons.name}/>)}
            </div> 
        </div>
    );
};

export default MenuBoard;