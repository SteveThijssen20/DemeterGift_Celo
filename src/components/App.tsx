import * as React from 'react'
import { IntlProvider } from 'react-intl'
import {
    Redirect,
    Route,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import Home from '@/pages/Home'
import Welcome from '@/pages/welcome'
import Login from '@/pages/Login/main'
import CreateEvents from '@/pages/CreateEvents'
import Donation from '@/pages/donation'
import Auction from '@/pages/donation/auction'

import './App.scss'
//Toast

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App(): JSX.Element {
    return (
        <IntlProvider
            key="intl"
            locale="en"
            defaultLocale="en"
            
        >
            <Router>
                <div className="wrapper">
                    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false}  pauseOnFocusLoss draggable pauseOnHover/>
                   
                    <main className="main">
                        <Switch>
                         
                            <Route exact path="/">
                                <Welcome />
                            </Route>
                            <Route exact path="/login">
                                <Login />
                            </Route>
                            <Route exact path="/CreateEvents">
                                <CreateEvents />
                            </Route>
                         
                            <Route exact path="/donation">
                                <Donation />
                            </Route>
                            <Route exact path='/donation/auction'>
                                <Auction />
                            </Route> 
                      
                        </Switch>
                    </main>
                  
                </div>
            </Router>
        </IntlProvider>
    )


}
