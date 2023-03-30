import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Auth from './Components/Auth/Auth';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import Dashboard from './Components/DashBoard/Dashboard';

function App() {
  return (
    <>
      {/* <Auth /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Auth />} /> */}
          <Route path='/' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
