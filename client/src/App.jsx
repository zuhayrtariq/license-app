import './App.css';
import Table from './components/Table';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';

import ContractDialog from './components/ContractDialog';
import LoginForm from './components/LoginForm';
import SectionPage from './components/SectionPage';

import LoginAuthRoute from './middleware/LoginAuth';
import CheckLoggedIn from './middleware/checkLoggedIn';
import axios from 'axios';
import { UserProvider } from './context/UserContext';
axios.defaults.baseURL = import.meta.env.VITE_SERVER_BASE_URL;
axios.defaults.withCredentials = true;
function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route
            path='/sections'
            element={
              <LoginAuthRoute>
                <SectionPage />
              </LoginAuthRoute>
            }
          />
          <Route
            element={
              <LoginAuthRoute>
                <Layout />
              </LoginAuthRoute>
            }>
            <Route path='/table' element={<Table />}>
              <Route path=':tableId' element={<Table />} />
            </Route>
            <Route path='/contract' element={<ContractDialog />} />
          </Route>
          <Route
            path='*'
            element={
              <LoginAuthRoute>
                <SectionPage />
              </LoginAuthRoute>
            }
          />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
