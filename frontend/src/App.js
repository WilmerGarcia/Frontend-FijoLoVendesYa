import "./App.css";
import styled from "styled-components";
import "./styles/App.css";
import Navbar from "./layouts/navbar/navbar";

import AppRouter from './routes/AppRouter';

function App() {
    return (
        <div className="App">
            <AppRouter />
        </div>
    )
}



export default App;
