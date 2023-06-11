import { useState, useEffect } from 'react';
import { MdOutlineNetworkWifi2Bar } from 'react-icons/md';
import { HiVolumeUp } from 'react-icons/hi';
import { RiBattery2Fill } from 'react-icons/ri';
import './MenuBarSide.css';

const MenuBarSide = ({ onMenuOpenHandler }) => {
    const [getFullDate, setFullDate] = useState({
        date_: '',
        month_: '',
        hour_: '', 
        min_: '',
    });

    const displayDate = () => {

        const monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];

        let date = new Date();
        let day = date.getDate();
        let monthName = monthArr[date.getMonth()];

        let hour = date.getHours();
        let min = date.getMinutes();

        if (day < 10) {
            day = '0' + day;
        };

        if (hour < 10) {
            hour = '0' + hour;
        };

        if (min < 10) {
            min = '0' + min;
        };

        //setFullDate(monthName + ' ' + day + ' ' + ' ' + hour + ':' + min);

        setFullDate({
            date_: day,
            month_: monthName,
            hour_: hour,
            min_: min,
        });
    };

    useEffect(() => {
        displayDate();
    }, []);

    return (
        <div className='menu__bar_side'>
            <div className='activities options__menu options__menu_div' style={{ color: 'white', display: 'flex', alignItems: 'center', fontSize: '15px' }}>
                <p className='para__icon' style={{ marginLeft: '5px', padding: '3px 15px', textAlign: 'center', borderRadius: '15px', cursor: 'default', transition: 'all 0.1s ease-in-out'}}>Activities</p>
            </div>
            <div className='date options__menu options__menu_div' style={{ width: '40%', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '15px' }}>
                <p className='para__icon' style={{ padding: '3px 12px', textAlign: 'center', borderRadius: '15px', cursor: 'default', transition: 'all 0.1s ease-in-out'}}>
                    <span className='para__date' style={{ display: 'inline', margin: '0 3px' }}>{`${getFullDate.month_} ${getFullDate.date_}`}</span>
                    <span className='para__time' style={{ display: 'inline', margin: '0 3px' }}>{`${getFullDate.hour_}:${getFullDate.min_}`}</span>
                </p>
            </div>
            <div className='menu options__menu' style={{ color: 'white', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                <div onClick={() => onMenuOpenHandler()} className='options__menu_div para__icon' style={{ width: 'auto', height: 'auto', padding: '3px 13px', transition: 'all 0.1s ease-in-out', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '15px', marginRight: '5px'}}>
                <MdOutlineNetworkWifi2Bar style={{ fontSize: '16px', margin: '0 7px' }}/>
                <HiVolumeUp style={{ fontSize: '16px', margin: '0 7px' }}/>
                <RiBattery2Fill style={{ fontSize: '16px', margin: '0 7px' }}/>
                </div>
            </div>
        </div>
    );
};

export default MenuBarSide;