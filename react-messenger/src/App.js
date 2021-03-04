import './App.css';
import { Messenger } from './components/Messenger/Messenger';
import LoginPage from './components/LoginPage/LoginPage';
import { Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Route path='/login'>
        <LoginPage/>
      </Route>
      <PrivateRoute path = '/'>
        <Messenger/>
      </PrivateRoute>
    </div>
  );
}

export default App;
