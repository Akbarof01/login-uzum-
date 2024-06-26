import {useRef} from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../redux/userSlice';
import Iconuser from './user.svg'
import Iconsms from './sms.svg'
import Iconlock from './lock.svg'
import Google from './googl.svg'
import { useNavigate } from 'react-router-dom';

function Register() {
  const nameRef = useRef(null); 
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const dispatch = useDispatch();
  const navigate =useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    dispatch(register(user))
    nameRef.current.value = null;
    emailRef.current.value = null;
    passwordRef.current.value = null;

    navigate('/login')
  }
  return (
    <div className=' flex justify-center bg-[#FFFF01] max-h-full'>
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="bg-white w-[450px] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className='font-sans font-bold text-[28px] ml-[150px] mt-[30px] '>Let’s go!</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Full Name
            </label>
            <div className='flex border rounded-lg p-1'>
              <img className='grid grid-cols-2' src={Iconuser} alt="" />
            <input ref={nameRef} className="shadow 
            appearance-none 
            border rounded 
            w-full py-2 px-3
             text-gray-700 
             leading-tight 
             border-none
             focus:outline-none 
             focus:shadow-outline"
              id="username"
              type="text"
              placeholder="John Doe" />
              </div>
          </div>


          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Email
            </label>
            <div className='flex border rounded-lg p-1'>
            <img className='grid grid-cols-2' src={Iconsms} alt="" />
            <input ref={emailRef} className="shadow 
            appearance-none border 
            rounded w-full py-2 px-3
             text-gray-700 leading-tight 
             border-none
             focus:outline-none 
             focus:shadow-outline"
              id="username" type="email"
              placeholder="example@site.com" />
              </div>
          </div>


          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Choose Password
            </label>
            <div className='flex border rounded-lg p-1'>
            <img className='grid grid-cols-2' src={Iconlock} alt="" />
            <input ref={passwordRef} className="shadow 
            appearance-none border
             border-none rounded 
             w-full py-2  px-3
              text-gray-700  
              leading-tight focus:outline-none 
              focus:shadow-outline"
              id="password" type="password"
              placeholder="Minimum 8 characters" />
              <h1 className='font-mono text-[16px] pt-1 p-1'>SHOW</h1>
              </div>
          </div>
          <div className=" items-center ">
            <button className="bg-[#6F00FF]
            hover:bg-[#9658D8] w-full
            text-white font-bold 
            py-2 px-4 rounded 
            focus:outline-none 
            focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
          <div className='mt-[35px]'>
          <div className='border w-[385px] p-2 rounded-lg'>
              <a href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dgoogle%2Baccount%26oq%3Dgoogle%2Bac%26gs_lcrp%3DEgZjaHJvbWUqCggAEAAYsQMYgAQyCggAEAAYsQMYgAQyCggBEAAYsQMYgAQyBggCEEUYOTINCAMQABiDARixAxiABDIHCAQQABiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPKgCALACAA%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8&ec=futura_asy_dt_si_72487300_e&hl=ru&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S704832487%3A1713642750061995&theme=mn&ddm=0" className='ml-[60px] w-[202px] h-[30px]'>
            <img className='ml-[60px] w-[202px] h-[30px]  ' src={Google} alt="" />
            </a>
            </div>
            <div className='pl-28 pt-[24px] '>
            <a href="/login">or login with SSO</a>
            </div>
          </div>
          <p className='text-[9.9px] font-normal	w-[411px] h-[15px] text-[#797979] pt-[40px] '>By lobby the button above, you agree to our Terms of Service and Privacy Policy.</p>
        </form>
      </div>
    </div>
  )
}

export default Register