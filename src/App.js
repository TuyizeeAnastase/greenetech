import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './dashbord/overview';
import Home from './Home';
import Login from './dashbord/signIn';

/*className="fixed flex w-full bg-green-700 border-b items-center justify-between flex-wrap m-auto top-0 animated"*/


class App extends React.Component{
   render()
   {
      return (
         <div>
           <BrowserRouter>
           <Route path="/" exact component={Home} />
           <Route path="/login"  component={Login} />
           <Route path="/dashbord" component={Dashboard}/>
           </BrowserRouter>
         </div>
          )
   }
};

export default App;
