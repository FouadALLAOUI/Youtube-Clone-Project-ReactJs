import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    //BEM class naming convention
    <div className="App">
          {/*<h1>Hello Let' build youtube</h1>*/}
           
          <Router>
              <Switch>
                <Route path='/'>
                  <h1>Home page</h1>
                </Route>
              </Switch>
          </Router>
           
          
          

          {/* Header <Header/> 
          <Header/> 
          <div className='app_page'>
            <Sidebar />          
            <RecommendedVideos/>
          </div> 
          */}
          

    </div>
  );
}

export default App;
