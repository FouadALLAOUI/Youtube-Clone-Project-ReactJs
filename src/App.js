import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';

function App() {
  return (
    //BEM class naming convention
    <div className="App">
        {/*<h1>Hello Let' build youtube</h1>*/}

        {/* Header <Header/> */}
          <Header/> 
          <div className='app_page'>
            {/* Sidebar <Sidebar/> */}
            <Sidebar/>          
            {/* RecommendedVideos */}
            <RecommendedVideos/>
          </div>      

    </div>
  );
}

export default App;
