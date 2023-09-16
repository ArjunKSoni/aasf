import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './screens/home';
export default App;
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}
