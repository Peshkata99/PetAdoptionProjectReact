import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';

import { Header } from './Header/Header'
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import { Catalog } from './Catalog/Catalog';
import { PetDetails } from './PetDetails/PetDetails';
import { CreatePet } from './CreatePet/CreatePet';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/create-pet" element={<CreatePet />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/catalog/details" element={<PetDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
