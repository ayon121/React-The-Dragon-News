
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import Qzone1 from '../../assets/qZone1.png'
import Qzone2 from '../../assets/qZone2.png'
import Qzone3 from '../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
            {/* loogin */}
            <div>
                <h2 className="text-2xl lg:text-3xl px-3 md:px-2 text-center md:text-start">Login With</h2>
                <div className='px-3 md:px-0'>
                    <button className="btn btn-outline mt-5 w-full space-y-3 text-xs lg:text-sm">
                        <FaGoogle className='text-blue-800'></FaGoogle>
                        Login with Google
                    </button>
                    <button className="btn btn-outline mt-5 w-full text-xs lg:text-sm">
                        <BsGithub ></BsGithub>
                        Login with Github
                    </button>
                </div>
            </div>
            {/* Find Us Section */}
            <div className='border mt-3 px-3 rounded mb-5'>
                <h2 className="text-2xl lg:text-3xl mt-2 mb-3 px-3 md:px-2 text-center md:text-start">Find Us on</h2>
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
                <h1 className="text-2xl lg:text-3xl mt-2 mb-3 px-3 md:px-2 text-center md:text-start">Q-Zone</h1>
                <div>
                    <img className='mb-3 w-full' src={Qzone1} alt="" />
                    <img className='mb-3 w-full' src={Qzone2} alt="" />
                    <img className='mb-3 w-full' src={Qzone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;