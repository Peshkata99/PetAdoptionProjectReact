import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import * as petService from './services/petService'
import * as authService from './services/authService'

import { AuthContext } from './context/AuthContext';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Header } from './components/Header/Header';
import { Catalog } from './components/Catalog/Catalog';
import { PetDetails } from './components/PetDetails/PetDetails';
import { CreatePet } from './components/CreatePet/CreatePet';
import { EditPet } from './components/EditPet/EditPet';

function App() {
  const navigate = useNavigate()
  const [pets, setPets] = useState([]);
  const [auth, setAuth] = useState({});

  useEffect(() => {
    petService.getAll()
      .then(result => {
         setPets(result)
       })
   }, [])


  const onCreatePetSubmit = async (data) => {
    const newPet = await petService.create(data, auth.accessToken);
    console.log(data)
    setPets(state => [...state, newPet]);

    navigate('/catalog')
  }

  const onEditPetSubmit = async (values) => {
    const result = await petService.editPet(values._id, values,auth.accessToken)

    setPets(state => state.map(p => p._id === values._id ? result : p))

    navigate(`/catalog/${values._id}`);
  }
  const onDeletePet = async (petId) => {
    setPets(state => state.filter(p => p._id !== petId))
  }

  const onLoginSubmit = async (data) => {
    const result = await authService.login(data)

    setAuth(result)

    navigate('/catalog')
  }

  const onRegisterSubmit = async (data) => {
    const result = await authService.register(data)

    setAuth(result)

    navigate('/catalog')
  }

  const context = {
    onLoginSubmit,
    onRegisterSubmit,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={context}>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/create-pet" element={<CreatePet onCreatePetSubmit={onCreatePetSubmit} />}></Route>
          <Route path="/catalog" element={<Catalog pets={pets}/>}></Route>
          <Route path="/catalog/:petId" element={<PetDetails onDeletePet={onDeletePet}/>}></Route>
          <Route path="/catalog/:petId/edit" element={<EditPet onEditPetSubmit={onEditPetSubmit}/>}></Route>
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
