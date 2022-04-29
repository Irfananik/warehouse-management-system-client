import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import ItemDetails from './Pages/Home/ItemDetails/ItemDetails';
import Login from './Pages/Register/Login';
import SignUp from './Pages/Register/SignUp';
import Banner from './Pages/Shared/Banner/Banner';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/item/:itemId' element={<ItemDetails/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
