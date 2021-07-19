import './App.css';
import './script';
import { BrowserRouter, Route, Link } from 'react-router-dom';
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
import adminPanel from './dashbord/signIn';
import dashbord from './dashbord/overview';
import logo1 from './images/logo1.png';

/*className="fixed flex w-full bg-green-700 border-b items-center justify-between flex-wrap m-auto top-0 animated"*/

function Home() {
  return (
    <div className="bg-green-700 -mt-12 w-full ">
     <nav className="navbar">
       <div className="container mx-auto my-auto md:flex md:justify-between md:items-center">
         <div className=" h-32 w-32">
           <img className="logo" src={logo1} alt="logo"/>
         </div>
         <div className="md:flex items-center">
           <div className="flex flex-col md:flex-row md:mx-6 cursor-pointer menu" >
             <a className="my-1 text-md italic  text-gray-50  font-medium hover:text-indigo-50 md:mx-4 md:my-0" href="/#" style={{fontWeight:'600',fontSize:'20px'}}>Home</a>
             <a className="my-1 text-md italic text-gray-300 font-medium hover:text-indigo-50 md:mx-4 md:my-0" href="/#services" style={{fontWeight:'600',fontSize:'20px'}}>Services</a>
             <a className="my-1 text-md italic text-gray-300 font-medium hover:text-indigo-50 md:mx-4 md:my-0" href="/#project" style={{fontWeight:'600',fontSize:'20px'}}>Projects</a>
             <a className="my-1 text-md italic text-gray-300 font-medium hover:text-indigo-50 md:mx-4 md:my-0" href="/#about" style={{fontWeight:'600',fontSize:'20px'}}>Abouts</a>
             <a className="my-1 text-md italic text-gray-300 font-medium hover:text-indigo-50 md:mx-4 md:my-0" href="/#contact" style={{fontWeight:'600',fontSize:'20px'}}>Contact Us</a>
             <a className="my-1 text-md italic text-gray-300 font-medium hover:text-indigo-50 md:mx-4 md:my-0" href="/#team" style={{fontWeight:'600',fontSize:'20px'}}>Team</a>
           </div>
         </div>
       </div>
     </nav>
    
    <section id="home" className="home ">
     <div className="-my-6   sm:text-left">
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
      <div className="services_1 space-x-4" >
          <div class="services" className="inline-block rounded bg-blue-500 shadow max-w-md mx-auto ml-20 m-14 p-2 w-60 rounded-xl flex-1 sm:ml-2" >
            <img className="w-10 h-10 m-1 mr-3 " alt="feat1" src={fat1}></img>
            <h1 className="text-sm text-white p-4 " style={{fontSize:'35px',fontStyle:'bold',fontFamily:'serif'}}>Easy To use</h1>
            <p className="text-sm p-4 text-white" style={{fontSize:'15px',fontFamily:'sans-serif'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
       </div>
      <div class="services" className="inline-block  rounded bg-green-400  shadow max-w-md mx-auto ml-20  p-2 w-60 m-14 rounded-xl flex-1" >
        <img className="w-10 h-10 m-1 mr-3 " alt="feat1" src={fat2}></img>
        <h1 className="text-sm text-white p-4 " style={{fontSize:'20px',fontStyle:'bold',fontFamily:'serif'}}>BUSINESS TEMPLATE</h1>
        <p className="text-sm p-4 text-white" style={{fontSize:'15px',fontFamily:'sans-serif'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      </div>
      </div>
      <div class="services" className="space-x-4 -mt-8" >
      <div className="inline-block rounded bg-green-400 shadow max-w-md mx-auto ml-20  p-2 w-60 m-14 rounded-xl flex-1" >
        <img className="w-10 h-10 m-1 mr-3 " alt="feat1" src={fat3}></img>
        <h1 className="text-sm text-white p-4 " style={{fontSize:'20px',fontStyle:'bold',fontFamily:'serif'}}>Clean and Easy Code</h1>
        <p className="text-sm p-4 text-white" style={{fontSize:'15px',fontFamily:'sans-serif'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      </div>
      <div class="services" className="inline-block rounded bg-blue-500 shadow max-w-md mx-auto ml-20  p-2 w-60 m-14 rounded-xl flex-1" >
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
      <div className="flex bg-white p-8">
        <div className="flex-1 p-4">
          <div class="line">
            <h1 className="text-3xl p-2 leading-snug font-bold">Our mission</h1>
            <hr className="ml-8 mt-2"></hr>
          </div>
          <p className="text-sm p-2" style={{fontSize:'15px',fontFamily:'sans-serif'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
        </div>
        <div className="flex-1 p-4">
          <div class="line">
            <h1 className="text-3xl p-2 leading-snug font-bold">Our vision</h1>
            <hr className="ml-8 mt-2"></hr>
          </div>
          <p className="text-sm p-2" style={{fontSize:'15px',fontFamily:'sans-serif'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
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
      <div className="flex-1 p-4 grid grid-cols-1">
        <div class="line">
           <h1 style={{fontSize:'15px',fontFamily:'sans-serif'}}>Get in Touch</h1>
           <hr className="ml-8 mt-2"></hr>
        </div>
        <div className="flex p-2">
          <input style={{fontSize:'15px',fontFamily:'sans-serif'}} className="flex-1 rounded-lg bg-gray-100 border-2 border-gray-400 text-center p-2 w-24 "  type="text" placeholder="email"/>
          <input style={{fontSize:'15px',fontFamily:'sans-serif'}} className="flex-1  border-2 border-gray-400  rounded-lg bg-gray-100 text-center ml-8" type="text" placeholder="name"/>
        </div>
        <input style={{fontSize:'15px',fontFamily:'sans-serif'}} className="rounded-lg bg-gray-100 border-2 border-gray-400 text-center p-2" type="text" placeholder="phone"/>
        <textarea style={{fontSize:'15px',fontFamily:'sans-serif'}} className="rounded-lg bg-gray-100  border-2 border-gray-400 text-center mt-4 p-8"  type="text" placeholder="message"></textarea>
        <button className="w-32 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none
       focus:outline-none cursor-pointer text-md  text-gray-300 bg-green-700 px-2 py-4 mt-8 border-lg rounded-xl ring-0 border-solid border-green-700 border-2 hover:bg-white hover:text-green-700">Send</button>
        </div>
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
          <Link to="/adminPanel" className="" href="/#" style={{fontSize:'15px',fontFamily:'sans-serif'}}>Admin portal</Link>
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
      <input style={{fontSize:'15px',fontFamily:'sans-serif'}} type="text" placeholder="Enter your email" className="focus:outline-none text-black rounded-lg border-2 border-gray-800 p-2"></input>
      <button className="rounded-lg bg-black text-white p-2 ml-2 focus:outline-none cursor-pointer
       transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none hover:bg-gray-700">Subscribe</button>
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

const App=(props)=>{
  return (
 <div>
   <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/adminPanel"  component={adminPanel} />
      <Route path="/dashbord" component={dashbord}/>
   </BrowserRouter>
 </div>
  )
};

export default App;
