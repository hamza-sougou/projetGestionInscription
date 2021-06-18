import Homepage from "./component/home"
import Connexion from "./component/connexion"
import Sidebar from "./component/sidebar"
import Inscription from "./component/inscription"
import Faq from "./component/faq"
import Dashboard from "./component/dashboard"
import Dashboardadmin from "./component/dashboardUser"


import './App.css';
import {Route, Switch} from "react-router-dom"
import { useState } from "react"


function App() {
  

  return (
    <div className="App">
        <Sidebar/>
        <Switch>
            <Route exact path = "/" component={Homepage}></Route>
            <Route exact path = "/connexion" component={Connexion}></Route>
            <Route exact path = "/inscription" component={Inscription}></Route>
            <Route exact path = "/faq" component={Faq}></Route>
            <Route exact path = "/dashboard/etudiant" component={Dashboard}></Route>
            <Route exact path = "/dashboard/admin" component={Dashboardadmin}></Route>

       

        </Switch>
    
    </div>
  );
}

export default App;
