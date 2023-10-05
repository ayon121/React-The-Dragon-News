import moment from 'moment'
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <div className='max-w-6xl mx-auto text-center'>
            <div className='mt-6 flex  justify-center'>
                <img  src={logo} alt="" />
            </div>
            <p className='mt-4'>Journalism Without Fear or Favour</p>
            <p className='mt-4'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            
        </div>
    );
};

export default Header;