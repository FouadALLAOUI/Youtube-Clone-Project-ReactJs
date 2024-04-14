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
        {/* Header <Header/> */}
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <h1>Search page </h1>


          </Route>
          <Route path='/'>
            <div className='app_page'>
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
