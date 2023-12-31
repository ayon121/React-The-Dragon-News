import moment from 'moment'
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <div className='max-w-6xl mx-auto text-center'>
            <div className='mt-6 flex  justify-center px-3 md:px-2'>
                <img  src={logo} alt="" />
            </div>
            <p className='mt-4  px-3 md:px-2'>Journalism Without Fear or Favour</p>
            <p className='mt-4  px-3 md:px-2 text-sm md:text-2xl'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            
        </div>
    );
};

export default Header;