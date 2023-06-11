import { ImBrightnessContrast, ImVolumeMedium } from 'react-icons/im';
import { FiSettings } from 'react-icons/fi';
import { BsLockFill, BsBluetooth } from 'react-icons/bs';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { MdOutlineNetworkWifi2Bar } from 'react-icons/md';
import { RiBattery2Fill } from 'react-icons/ri';
import './MenuOptionsDiv.css';

const MenuOptionsDiv = ({ onGetRangeStateHandler, onReturnVal, openHandler }) => {
    const getRangeInput = (event) => {
        onGetRangeStateHandler(event.target.value);
    };

    return ( 
        <div className='menu__div'>
            <div className='input__field'>
            <ImVolumeMedium style={{ fontSize: '20px' }}/>
            <input className='input__range' min='15' max='150' type='range' />
            </div>
            <div className='input__field'>
            <ImBrightnessContrast style={{ fontSize: '20px' }}/>
            <input className='input__range' onChange={getRangeInput} min='15' max='150' value={onReturnVal} type='range' />
            </div>
            <div style={{ width: '90%', border: '1px solid #ccc', margin: '6px 0' }}></div>
            <div className='setting__options'>
                <MdOutlineNetworkWifi2Bar style={{ fontSize: '20px', marginLeft: '6px' }}/>
                <span style={{ marginLeft: '13px '}}>Network</span>
            </div>
            <div className='setting__options'>
                <BsBluetooth style={{ fontSize: '20px', marginLeft: '6px' }}/>
                <span style={{ marginLeft: '13px '}}>Bluetooth off</span>
            </div>
            <div className='setting__options'>
                <RiBattery2Fill style={{ fontSize: '20px', marginLeft: '6px' }}/>
                <span style={{ marginLeft: '13px '}}>2:07 remaining (70%)</span>
            </div>
            <div style={{ width: '90%', border: '1px solid #ccc', margin: '6px 0' }}></div>
            <div className='setting__options'>
                <FiSettings style={{ fontSize: '20px', marginLeft: '6px' }}/>
                <span style={{ marginLeft: '13px '}}>Settings</span>
            </div>
            <div className='setting__options'>
                <BsLockFill style={{ fontSize: '20px', marginLeft: '6px' }}/>
                <span style={{ marginLeft: '13px '}}>Lock</span>
            </div>
            <div onClick={() => openHandler()} className='setting__options'>
                <AiOutlinePoweroff style={{ fontSize: '20px', marginLeft: '6px' }}/>
                <span style={{ marginLeft: '13px '}}>Turn off / Log Out</span>
            </div>
        </div>
    )
};

export default MenuOptionsDiv;