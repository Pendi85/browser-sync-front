import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginExt from './extension/LoginExt';
import Login from './desktop/Login';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginExt />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
