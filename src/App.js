import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Component/Header';
import Footer from './Component/footer';
import { Outlet } from 'react-router-dom';
import Mainbody from './Component/Body/Mainbody';
function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
      
    </>
  );
}

export default App;
