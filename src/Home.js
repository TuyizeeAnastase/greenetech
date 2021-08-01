import React from 'react';
import bodyI from './images/bodyG.png';
import fat1 from './images/feat1.png';
import fat2 from './images/feat2.png';
import fat3 from './images/feat3.png';
import fat4 from './images/feat4.png';
import services from './images/service.jpg';
import location from './images/location.png';
import phone from './images/phone.png';
import email from './images/email.png';
import fb from './images/facebook.png';
import twitter from './images/twitter.png';
import instagram from './images/instagram.png';
import profile from './images/profile.jpg';
import logo1 from './images/logo1.png';
import emailjs, { sendForm } from 'emailjs-com';
import {  Link } from 'react-router-dom';
import './App.css';
import './script';


function Home (){
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_4p9a7ts', 'template_dbdzxwq', e.target, 'user_S7KSqjkfaAoXCmCLJDblg')
          .then((result) => {
              alert('Message Sent')
          }, (error) => {
              alert('Message not Sent')
          });
          e.target.reset();
      }
    
      function sendSub(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_4p9a7ts', 'template_5hzv9as', e.target, 'user_S7KSqjkfaAoXCmCLJDblg')
          .then((result) => {
              alert('Thank for your subscrptions.')
          }, (error) => {
              alert('Subscription Fail')
          });
          e.target.reset();
      }
    
        
      return (
          <div className="bg-green-700 ">
        
         {/* Navbar */}
         <nav class="bg-green-700 shadow-2xl -mt-10 navbar">
           <div class="max-w-6xl  mx-auto px-4">
             <div class="flex -mb-16  justify-between ">
               <div class="flex  space-x-96">
                 <div>
                 {/* Website logo */}
                 <a href="/#" class="flex items-center py-8 px-4">
                      <img src={logo1} alt="Logo" class="h-32 w-32 mr-2"/>
                </a>
                </div>
                <div class="hidden  md:flex items-center space-x-3">
                 <a href="/#" class="py-4 px-2 text-white font-semibold ">Home</a>
                 <a href="/#services" class="py-4 px-2 text-white  font-semibold ">Services</a>
                 <a href="/#project" class="py-4 px-2 text-white  font-semibold ">Project</a>
                 <a href="/#about" class="py-4 px-2 text-white  font-semibold ">About</a>
                 <a href="/#contact" class="py-4 px-2 text-white  font-semibold ">Contact Us</a>
                 <a href="/#team" class="py-4 px-2 text-white  font-semibold ">Team</a>
               </div>
               </div>
               {/* Mobile menu button  */}
                <div class="md:hidden flex items-center">
                  <button class="outline-none mobile-menu-button">
                  <svg class=" w-12 h-12 mr-4 text-white hover:text-blue-400 "
                    x-show="!showMenu"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
                </div>
             </div>
           </div>
           {/* mobile-menu */}
           <div class="hidden bg-black mobile-menu">
              <ul class="">
                <li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white  font-semibold hover:bg-green-500 transition duration-300">Home</a></li>
                <li ><a href="/#project" class="block text-sm text-white  px-2 py-4 text-white 00 font-semibold hover:bg-green-500 transition duration-300">Services</a></li>
                <li><a href="/#services" class="block text-sm text-white  px-2 py-4 font-semibold hover:bg-green-500 transition duration-300">Projects</a></li>
                <li><a href="/#about" class="block text-sm text-white  px-2 py-4 font-semibold hover:bg-green-500 transition duration-300">About</a></li>
                <li><a href="/#contact" class="block text-sm text-white font-semibold px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
                <li><a href="/#team" class="block text-sm text-white px-2 py-4 text-white  font-semibold hover:bg-green-500 transition duration-300">Team</a></li>
              </ul>
            </div>
      </nav>
          <section id="home" className="home">
           <div className="-my-6 home  sm:text-left">
           <div className="bg-green-700 mx-auto text-left  py-36 px-20 space-y-4 ">
           <h1 class="p-4 text-3xl tracking-tight font-extrabold font-mono text-white sm:text-xl md:p-8 md:text-6xl">
                  <h1 style={{fontWeight:'700',letterSpacing:'5px'}}>Start Your New </h1>
                  <h1 style={{fontWeight:'700',marginTop:'10px',letterSpacing:'5px'}}> Work With US</h1>
            </h1>
             <p style={{fontStyle:'italic',fontWeight:'600'}} className="mt-20 text-base p-8 text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
             <button style={{fontSize:'15px'}} className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none
             p-4 ml-8 focus:outline-none cursor-pointer text-md  text-green-700 bg-white px-10 py-2 mt-24 border-2 rounded-xl ring-0 border-solid  hover:bg-green-700 hover:text-white hover:border-white-500 "> About US</button>
             <div className="lg:absolute lg:inset-y-6 lg:right-4 lg:w-1/2 mt-24">
                 <img className="ml-2 h-52 w-52 object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"  alt="body" src={bodyI}></img>
             </div>
             </div>
           </div>
           </section>
      
           <section id="services" className="services">
           <div className="services flex bg-white p-4">
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
              <div class="services" className="inline-block rounded bg-blue-500 shadow max-w-md mx-auto ml-2  p-2 w-60  rounded-xl flex-1">
                  <img className="w-10 h-10 m-1 mr-3 " alt="feat1" src={fat1}></img>
                  <h1 className="text-sm text-white p-4 " style={{fontSize:'35px',fontStyle:'bold',fontFamily:'serif'}}>Easy To use</h1>
                  <p className="text-sm p-4 text-white" style={{fontSize:'15px',fontFamily:'sans-serif'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
               </div>
               <div class="services" className="inline-block rounded bg-green-400 shadow max-w-md mx-auto ml-2  p-2 w-60  rounded-xl flex-1">
              <img className="w-10 h-10 m-1 mr-3 " alt="feat1" src={fat2}></img>
              <h1 className="text-sm text-white p-4 " style={{fontSize:'20px',fontStyle:'bold',fontFamily:'serif'}}>BUSINESS TEMPLATE</h1>
              <p className="text-sm p-4 text-white" style={{fontSize:'15px',fontFamily:'sans-serif'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
            <div className="inline-block rounded bg-green-400 shadow max-w-md mx-auto ml-2  p-2 w-60 rounded-xl flex-1" >
              <img className="w-10 h-10 m-1 mr-3 " alt="feat1" src={fat3}></img>
              <h1 className="text-sm text-white p-4 " style={{fontSize:'20px',fontStyle:'bold',fontFamily:'serif'}}>Clean and Easy Code</h1>
              <p className="text-sm p-4 text-white" style={{fontSize:'15px',fontFamily:'sans-serif'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
            <div class="services" className="inline-block rounded bg-blue-500 shadow max-w-md mx-auto ml-2  p-2 w-60  rounded-xl flex-1" >
              <img className="w-10 h-10 m-1 mr-3 " alt="feat1" src={fat4}></img>
              <h1 className="text-sm text-white p-4 " style={{fontSize:'20px',fontStyle:'bold',fontFamily:'serif'}}>BUSINESS TEMPLATE</h1>
              <p className="text-sm p-4 text-white" style={{fontSize:'15px',fontFamily:'sans-serif'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
              </div>
          </div>
           
           <div className="flex-1 mt-24 leading-relaxed">
             <div class="line">
             <h3 className="text-sm font-light italic p-3">Are you ready ?</h3>
             <h1 className="text-4xl p-3" style={{fontSize:'35px',fontStyle:'bold',fontFamily:'serif'}}>Start your bussiness Now</h1>
             <hr className="ml-3"></hr>
             </div>
             <p className="p-3 text-lg" style={{fontSize:'15px',fontFamily:'sans-serif'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
             <button className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none
             p-4 ml-8 focus:outline-none cursor-pointer text-md  text-white bg-green-700 px-10 py-2 mt-24 border-2 rounded-xl ring-0 border-solid  hover:bg-white hover:text-green-700 hover:border-white-500 ">About Us</button>
           </div>
           </div>
           </section>
      
          <section id="project" className="project">
           <div style={{backgroundColor:'#5F6FE9'}} className="text-center p-8 text-white">
              <h1 className="text-xl font-bold tracking-widest">
                Projects
              </h1>
              <a className="text-base tracking-normal font-medium p-4" style={{fontSize:'15px',fontFamily:'sans-serif'}} href="/#">Home</a> | <a className="text-base tracking-normal font-medium p-4" style={{fontSize:'15px',fontFamily:'sans-serif'}} href="/#">projects</a>
            </div>
           <div className="flex justify-around p-8 bg-white project-s">
             <a href="/#" className="p-4 shadow-2xl rounded-lg  mx-8 bg-white  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
             <div className="pr_card ">
              <img className="w-6/12 h-6/12" alt="project1" src={services}></img>
              <h1 className="p-2 font-sans text-2xl md:text-lg italic font-bold tracking-widest">project 1</h1>
              <p className="p-2 text-left text-black text-opacity-50 leading-normal text-base " style={{fontSize:'15px',fontFamily:'sans-serif'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
             </div>
             </a>
             <a href="/#" className=" pr_card p-4 shadow-2xl rounded-lg  bg-white transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
             <div className="pr_card ">
              <img className="w-6/12 h-6/12" alt="project1" src={services}></img>
              <h1 className="p-2 font-sans text-2xl md:text-lg italic font-bold tracking-widest">project 2</h1>
              <p className="p-2 text-left text-black text-opacity-50 leading-normal text-base " style={{fontSize:'15px',fontFamily:'sans-serif'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
             </div>
             </a>
           </div>
           </section>
      
           <section id="about" className="home">
          <div>
            <div style={{backgroundColor:'#5F6FE9'}} className="text-center p-8 text-white">
              <h1 className="text-xl font-bold tracking-widest">
                About Us
              </h1>
              <a className="text-base tracking-normal font-medium p-4" style={{fontSize:'15px',fontFamily:'sans-serif'}} href="/#">Home</a> | <a className="text-base tracking-normal font-medium p-4" style={{fontSize:'15px',fontFamily:'sans-serif'}} href="/#">About us</a>
            </div>
            <div className="about flex p-8 bg-white md:space-x-4">
              <div className="flex-1 md:inline-block">
               <img className="rounded-full h-96 w-96 ml-8" alt="car" src={services}></img>
              </div>
              <div className="flex-1 p-20 d:inline-block" >
                <h3 className="text-xs leading-tight italic p-2">Are you Ready ?</h3>
                <div class="line2 ">
                     <h1 className="text-3xl p-2 leading-snug font-bold">Welcome to our company</h1>
                      <hr className="ml-8 mt-2"></hr>
                </div>
                <p className="text-sm p-2" style={{fontSize:'18px',fontFamily:'sans-serif'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
              </div>
            </div>
            <div className="flex justify-around   text-white  p-2 bg-blue-700">
              <div className="">
                <h3 style={{fontSize:'15px',fontFamily:'sans-serif'}}>45</h3>
                <h2 style={{fontSize:'15px',fontFamily:'sans-serif'}}>Happy Clients</h2>
              </div>
              <div className="">
                <h3 style={{fontSize:'15px',fontFamily:'sans-serif'}}>40</h3>
                <h2 style={{fontSize:'15px',fontFamily:'sans-serif'}}>Projects</h2>
              </div>
              <div className="">
                <h3 style={{fontSize:'15px',fontFamily:'sans-serif'}}>40</h3>
                <h2 style={{fontSize:'15px',fontFamily:'sans-serif'}}>Awards</h2>
              </div>
            </div>
            <div className="flex bg-white p-8 target">
              <div className="flex-1 p-4">
                <div class="line">
                  <h1 className="text-3xl p-2 leading-snug font-bold">Our mission</h1>
                  <hr className="ml-8 mt-2"></hr>
                </div>
                <p className="text-sm p-2 about_content" style={{fontSize:'15px',fontFamily:'sans-serif'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
              </div>
              <div className="flex-1 p-4">
                <div class="line">
                  <h1 className="text-3xl p-2 leading-snug font-bold">Our vision</h1>
                  <hr className="ml-8 mt-2"></hr>
                </div>
                <p className="text-sm p-2 about_content" style={{fontSize:'15px',fontFamily:'sans-serif'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
              </div>
            </div>
          </div>
          </section>
         
          <section id="team" className="team">
         <div className="bg-gray-100 shadow-2xl text-center">
          <div  class='lineT' className="flex-1 text-center">
            <h1  className="text-xl p-4 font-bold ">Meet our Team</h1>
            <p className="text-base p-2  font-lg tracking-wide" style={{fontSize:'15px',fontFamily:'sans-serif'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>
          <div className="flex justify-between p-8">
             <div className="bg-blue-500 text-center shadow-2xl rounded-lg  mx-8 bg-white  transition transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:transform-none">
               <img alt="profile-1" className="w-52 h-52" src={profile}></img>
               <h1 className="text-2xl font-bold tracking-widest text-white">CEO</h1>
               <h3 className="font-serif text-lg">John Cliff</h3>
             </div>
             <div className="bg-blue-500 text-center shadow-2xl rounded-lg  mx-8 bg-white  transition transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:transform-none">
               <img alt="profile-1" className="w-52 h-52" src={profile}></img>
               <h1 className="text-2xl font-bold tracking-widest text-white">CEO</h1>
               <h3 className="font-serif text-lg">John Cliff</h3>
             </div>
             <div className="bg-blue-500 text-center shadow-2xl rounded-lg  mx-8 bg-white  transition transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:transform-none">
               <img alt="profile-1" className="w-52 h-52" src={profile}></img>
               <h1 className="text-2xl font-bold tracking-widest text-white">CEO</h1>
               <h3 className="font-serif text-lg">John Cliff</h3>
             </div>
             <div className="bg-blue-500 text-center shadow-2xl rounded-lg  mx-8 bg-white  transition transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:transform-none">
               <img alt="profile-1" className="w-52 h-52" src={profile}></img>
               <h1 className="text-2xl font-bold tracking-widest text-white">CEO</h1>
               <h3 className="font-serif text-lg">John Cliff</h3>
             </div>
          </div>
        </div>
      </section>
      
      <section id="contact" className="contact">
             <div  className="text-center p-8 h-32 text-white bg-blue-700">
              <h1 className="text-xl font-bold tracking-widest" style={{fontSize:'15px',fontFamily:'sans-serif'}}>
                Contact Us
              </h1>
              <a className="text-base tracking-normal font-medium p-4" href="/#" style={{fontSize:'15px',fontFamily:'sans-serif'}}>Contact us</a> | <a style={{fontSize:'15px',fontFamily:'sans-serif'}} className="text-base tracking-normal font-medium p-4" href="/#">About us</a>
            </div>
            <div className="contact flex  bg-white p-8">
            <form className="flex-1 p-4 grid grid-cols-1" onSubmit={sendEmail} >
              <div class="line">
                 <h1 style={{fontSize:'15px',fontFamily:'sans-serif'}}>Get in Touch</h1>
                 <hr className="ml-8 mt-2"></hr>
              </div>
              <input style={{fontSize:'15px',fontFamily:'sans-serif'}} className="rounded-lg bg-gray-100 border-2 border-gray-400 text-center p-2 mb-2 mt-4" type="text" placeholder="email" 
              name="email" />
              <input 
              style={{fontSize:'15px',fontFamily:'sans-serif'}} className="rounded-lg bg-gray-100 border-2 border-gray-400 text-center p-2 mb-2" type="text" placeholder="name"
              name="name" />
              <input 
              style={{fontSize:'15px',fontFamily:'sans-serif'}} className="rounded-lg bg-gray-100 border-2 border-gray-400 text-center p-2" type="text" placeholder="Subject"
              name="subject" />
              <textarea 
              style={{fontSize:'15px',fontFamily:'sans-serif'}} className="rounded-lg bg-gray-100  border-2 border-gray-400 text-center mt-4 p-8"  type="text" placeholder="message"
              name="message" ></textarea>
              <button type="submit"   className="w-32 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none
             focus:outline-none cursor-pointer text-md  text-gray-300 bg-green-700 px-2 py-4 mt-8 border-lg rounded-xl ring-0 border-solid border-green-700 border-2 hover:bg-white hover:text-green-700">Send</button>
              </form>
            <div className="flex-1 p-7">
              <div className="" class="line">
                 <h1 style={{fontSize:'15px',fontFamily:'sans-serif'}}>Contact Info</h1>
                 <hr className="ml-8 mt-2"></hr>
              </div>
              <div className="flex justify-left p-4">
                <img className="w-8 h-8 mr-4" alt="location" src={location}></img>
                <h3 style={{fontSize:'15px',fontFamily:'sans-serif'}}>ST 234 KN</h3>
              </div>
              <div className="flex justify-left p-4">
                <img className="w-8 h-8 mr-4 " alt="location" src={phone}></img>
                <h3 style={{fontSize:'15px',fontFamily:'sans-serif'}}>+25078755665</h3>
              </div>
              <div className="flex justify-left p-4">
                <img className="w-8 h-8 mr-4 " alt="location" src={email}></img>
                <h3 style={{fontSize:'15px',fontFamily:'sans-serif'}}>greentech@gmail.com</h3>
              </div>
            </div>
            </div>
      </section>
         
         <footer className="footer flex justify-around px-2 mb-8 text-white">
           <div className="">
            <div class="line3">
              <h1 style={{fontSize:'18px',fontFamily:'sans-serif'}} className="uppercase py-2 text-xl">
                Multilink
                <hr className="ml-1 mt-2"></hr>
              </h1>
            </div>
            <p className="w-52 text-sm leading-6 tracking-wider " style={{fontSize:'18px',fontFamily:'sans-serif'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
           </div>
           <div className="">
             <div className="flex flex-col p-2" >
                <a className="" href="/#" style={{fontSize:'15px',fontFamily:'sans-serif'}}>Home</a>
                <a className="" href="/#" style={{fontSize:'15px',fontFamily:'sans-serif'}}>Abouts</a>
                <a className="" href="/#" style={{fontSize:'15px',fontFamily:'sans-serif'}}>Services</a>
                <a className="" href="/#" style={{fontSize:'15px',fontFamily:'sans-serif'}}>Contacts</a>
                <Link to="/login" className="" href="/#" style={{fontSize:'15px',fontFamily:'sans-serif'}}>Admin portal</Link>
             </div>
           </div>
           <div>
           <div className="line3">
              <h1 className="uppercase py-2 text-xl" style={{fontSize:'18px',fontFamily:'sans-serif'}}>
                Subscribe now
                <hr className="ml-1 mt-2"></hr>
              </h1>
            </div>
            <p className="w-52 text-sm leading-6 tracking-wider p-2" style={{fontSize:'15px',fontFamily:'sans-serif'}}>Lorem Ipsum is simply dummy text of the printing</p>
            <form className="contact-form" onSubmit={sendSub}>
                <input type="email" name="email" 
                style={{fontSize:'15px',fontFamily:'sans-serif'}} type="text" placeholder="Enter your email" className="focus:outline-none text-black rounded-lg border-2 border-gray-800 p-2"></input>
                <button type="submit" className="rounded-lg bg-black text-white p-2 ml-2 focus:outline-none cursor-pointer
                   transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none hover:bg-gray-700">Subscribe</button>
             </form>
           </div>
         </footer>
         <div class="fFine" className="p-4">
            <hr className="ml-4 mt-2"></hr>
            <div className="flex justify-between">
               <div>
               <p style={{fontSize:'18px',fontFamily:'sans-serif'}}>Copyright &copy; 2020 greentech</p>
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
}

export default Home;
