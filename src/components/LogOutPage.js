import { AiOutlinePoweroff } from 'react-icons/ai';
import './LogOutPage.css';

const LogOutPage = ({ closeHandler }) => {

    return (
        <div className='logOutPage'>
            <AiOutlinePoweroff onClick={() => closeHandler()}className='power' style={{ fontSize: '50px', cursor: 'pointer', color: '#ccc' }}/>
        </div>
    )
};

export default LogOutPage;