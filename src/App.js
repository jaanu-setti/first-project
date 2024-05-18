
import React from "react";
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Professor from './components/Professor'
import Student from "./components/Student";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/student" element={<Student/>}/>
          <Route path="/professor" element={<Professor/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
