
import { FaGoogle , FaFacebook , FaTwitter } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import Qzone1 from '../../assets/qZone1.png'
import Qzone2 from '../../assets/qZone2.png'
import Qzone3 from '../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
            {/* loogin */}
            <div>
                <h2 className="text-3xl ">Login With</h2>
                <button className="btn btn-outline mt-5 w-full space-y-3 p-3">
                    <FaGoogle className='text-blue-800'></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline mt-5 w-full">
                    <BsGithub ></BsGithub>
                    Login with Github
                </button>
            </div>
            {/* Find Us Section */}
            <div className='border mt-3 px-3 rounded mb-5'>
                <h2 className="text-3xl mt-2 mb-3">Find Us on</h2>
                <a className='p-4 flex items-center gap-4 text-lg border px-4 rounded-t-lg' href="">
                    <FaFacebook></FaFacebook>
                    <span>FaceBook</span>
                </a>
                <a className='p-4 flex items-center gap-4 text-lg border px-4 ' href="">
                    <FaTwitter></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='p-4 flex items-center gap-4 text-lg border px-4 rounded-b-lg mb-3' href="">
                    <FaFacebook></FaFacebook>
                    <span>FaceBook</span>
                </a>
            </div>
            {/* Q Zone */}
            <div>
                <h1 className="text-3xl mt-2 mb-3">Q-Zone</h1>
                <div > 
                    <img className='mb-3' src={Qzone1} alt="" />
                    <img className='mb-3' src={Qzone2} alt="" />
                    <img className='mb-3' src={Qzone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;