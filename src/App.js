// App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { DeletedMoviesProvider } from './DeletedMoviesContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Films from './pages/Films';
import Lists from './pages/Lists';
import Profile from './pages/Profile';
import ListExample from './pages/ListExample';
import NotFound from './pages/NotFound';

function App() {
  return (
    <DeletedMoviesProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/films" element={<Films/>} />
          <Route path="/lists" element={<Lists/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/lists/edit/1/" element={<ListExample/>} />
          <Route element={<NotFound/>} />
        </Routes>
      </Router>
    </DeletedMoviesProvider>
  );
}

export default App;
