import logo from './logo.svg';
import Head from 'next/head'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Category from './pages/Category';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto px-10 mb-8">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/user/:userslug" element={<PostDetail/>} />
          <Route path="/post/:postId" element={<PostDetail/>} />
          <Route path="/category/:categoryslug" element={<Category/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
