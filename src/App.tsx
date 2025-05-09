import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginExt from './extension/LoginExt';
import Login from './desktop/Login';
import Home from './extension/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/ext" element={<LoginExt />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
