import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';
import Header from './Components/Header/Header'
import Footer from  './Components/Footer/Footer'
import AboutMe from './Components/AboutMe/AboutMe';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/project/:id' element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path='/aboutMe' element={<AboutMe></AboutMe>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
