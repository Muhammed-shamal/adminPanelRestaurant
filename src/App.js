import './App.css';
import Navbar from './components/Navbar/Navbar';
import Slidebar from './components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import AddItems from './pages/AddItems/AddItems';
import ListItems from './pages/ListItems/ListItems';
import Orders from './pages/Orders/Orders';

function App() {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Slidebar />
        <Routes>
          <Route path='/additem' element={<AddItems/>} />
          <Route path='/listitems' element={<ListItems/> } />
          <Route path='/orders' element={<Orders/> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
