import './App.css';
import Index from './pages/Index';
import {Routes, Route} from 'react-router-dom';
import Form from './pages/Form';

function App() {
  return (
    <>
    <Routes>
      <Route path="*" element={<Index/>}/>
      <Route path="/form" element={<Form/>}/>
    </Routes>
    </>
  );
}

export default App;
