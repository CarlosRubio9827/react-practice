import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "../containers/Layout";
import Login from "../pages/Login";    
import CreateAccount from "../pages/CreateAccount";    
import SendEmail from "../pages/SendEmail";
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import Example from "../components/Example";
import NewPassword from '../pages/NewPassword';
import useInitialState from '../hooks/useInitialState';
import '../styles/global.scss';
import AppContext from '../context/AppContext';

const App = ()=>{
    const initialState = useInitialState();
    return(
        <AppContext.Provider value={initialState}>

            <BrowserRouter>
                    <Layout>
                        <Routes>
                            <Route exact path="/" element={<Home />}/>
                            <Route exact path="/login" element={<Login />}/>
                            <Route exact path="/example" element={<Example />}/>
                            <Route exact path="/create-account" element={<CreateAccount />}/>
                            <Route exact path="/recovery-password" element={<SendEmail />}/>
                            <Route exact path="/new-password" element={<NewPassword />}/>
                            <Route path="*" element={<NotFound />}/>
                        </Routes>
                    </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}


export default App;