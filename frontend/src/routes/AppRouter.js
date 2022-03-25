// import { BrowserRouter, Routes, Route, } from "react-router-dom";

// //importamos los componentes creados
// import Home from "../pages/Home/Home"
// import Form from "../components/accountBox"


// export default function AppRouter() {
//     return (
//         <>

//             <div>

//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/IniciaSesion" element={<Form />} />
//                     <Route path="/Registrate" element={<Form initialState="registrarse" />} />

//                 </Routes>

//             </div>

//         </>
//     )
// }


import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Switch } from "react-router";
//importamos los componentes creados
import Home from "../pages/Home/Home"
import LoginForm from "../components/accountBox/LoginForm"
import SignupForm from "../components/accountBox/SignupForm"
import Navbar from "../layouts/navbar/navbar";
import PageForm from "../pages/PageForm"
import { AccountBox } from "../components/accountBox";




export default function AppRouter() {
    return (
        <>



            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/IniciaSesion/Registrate" element={<PageForm />} />
                </Routes>

            </div>






        </>
    )
}
