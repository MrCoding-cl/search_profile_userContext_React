//Importacion de estilos
import './App.css';
//Importacion de componentes
import Profile from './components/Profile'
import UserList from './components/UserList'
import 'bootstrap/dist/css/bootstrap.min.css'

//CONTEXT
import UserState from "./context/User/UserState";
function App() {
  return (
    <UserState>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-7">
            <UserList />
          </div>
          <div classNAme="col-md-5">
            <Profile />
          </div>
        </div>
      </div>
    </UserState>
  );
}

export default App;
