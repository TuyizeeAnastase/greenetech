import React from 'react';
import fb from '.././images/facebook.png';
import twitter from '.././images/twitter.png';
import instagram from '.././images/instagram.png';
import { Link } from 'react-router-dom';  

const Login = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
    };
    return ( 
      <div>
        <nav className='bg-green-700'>
       <div className="container mx-auto px-20 py-6 md:flex md:justify-between md:items-center">
         <div className="flex justify-between items-center">
           <div>
             <a className="cursor-pointer  text-gray-300 text-xl font-bold md:text-2xl hover:text-gray-700" href="/#">Logo</a>
           </div>
         </div>
         <div className="md:flex items-center">
           <div className="flex flex-col md:flex-row md:mx-6 cursor-pointer ">
             <a className="my-1 text-md italic  text-gray-50  font-medium hover:text-indigo-50 md:mx-4 md:my-0" href="/#">Home</a>
           </div>
         </div>
       </div>
     </nav>
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                       <Link to="/dashbord">
                       <button
                            className={`bg-green-700 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>
                         
                       </Link>
                    </div>
                </form>
            </div>
        </div>
   <div class="fFine" className="bg-green-700 p-4">
      <hr className="ml-4 mt-2"></hr>
      <div className="flex justify-between">
         <div>
         <p>Copyright &copy; 2020 greentech</p>
         </div>
         <div className="flex justify-between p-2">
          <a href="/#"><img className="w-8 h-8 " src={fb} alt="facebook"></img></a>
          <a href="/#"><img className="w-8 h-8" src={twitter} alt="facebook"></img></a>
          <a href="/#"><img className="w-8 h-8" src={instagram} alt="facebook"></img></a>
         </div>
      </div>
   </div>

        </div>
    );
};

export default Login;