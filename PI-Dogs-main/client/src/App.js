
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home';
import DogDetail from './components/DogDetail/DogDetail';
import DogCreate from './components/DogCreate/DogCreate';
function App() {
  
  return (
    <BrowserRouter>
      <div className="App"  >
        <Route exact path='/' component={LandingPage} />
        <Route path="/home" component={Home} />  
        <Route path="/dogs/:id" component={DogDetail} />
        <Route path="/create" component={DogCreate} />
      </div>
    </BrowserRouter>
  );
}
export default App;
