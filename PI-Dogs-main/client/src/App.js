
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home';
import DogDetail from './components/DogDetail/DogDetail';
import DogCreate from './components/DogCreate/DogCreate';
import NotFound from './components/404/404.jsx';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App"  >
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path="/home" component={Home} />  
          <Route path="/dogs/:id" component={DogDetail} />
          <Route path="/create" component={DogCreate} />
          <Route component={NotFound} />
        </Switch>
      </div>
      
    </BrowserRouter>
  );
}
export default App;
