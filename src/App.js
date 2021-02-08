//Importacion de estilos
import './App.css';
//Importacion de componentes
import Profile from './components/Profile'
import UserList from './components/UserList'


//CONTEXT
import UserState from "./context/User/UserState";
function App() {
  return (
    <UserState>
      <Profile/>
      <UserList/>
    </UserState>
  );
}

export default App;
