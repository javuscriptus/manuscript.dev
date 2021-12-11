import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

import AddQuestions from './pages/admin/AddQuestions';
import ListQuestions from './pages/admin/ListQuestions'
import Home from './pages/home/Home';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/admin' element={<ListQuestions/>}/>
        <Route path='/admin/add' element={<AddQuestions/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

