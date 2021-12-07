import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Search from './pages/Search'
import Login from './pages/Login'
import More from './pages/More'
import Signup from './pages/Signup'
import Saved from './pages/Saved'
import Delete from './pages/Delete'
import Welcome from './pages/Welcome'
import AddressInfo from './AddressInfo/index'

export default function Container() {

    return (

        <>
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Search}/>
                    <Route exact path="/more" component={More}/>
                    <Route exact path="/search" component={Search}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/saved" component={Saved}/>
                    <Route exact path='/saved/:addressId' component={AddressInfo}/>
                    <Route exact path='/delete' component={Delete}/>
                    <Route exact path="/welcome" component={Welcome}/>
                    <Route exact path="/ndc" component={() => {
                        window.location.href = "https://www.nbnco.com.au/develop-or-plan-with-the-nbn/new-developments/government-policy-for-new-developments";
                        return null;
                    }}/>
                    <Route exact path="/fttc" component={() => {
                        window.location.href = "https://www.nbnco.com.au/learn/network-technology/fibre-to-the-curb-explained-fttc";
                        return null;
                    }}/>
                    <Route exact path="/gen-tech" component={() => {
                        window.location.href = "https://www.nbnco.com.au/learn/network-technology";
                        return null;
                    }}/>
                    <Route exact path="/hfc" component={() => {
                        window.location.href = "https://www.nbnco.com.au/learn/network-technology/hybrid-fibre-coaxial-explained-hfc-3";
                        return null;
                    }}/>
                    <Route exact path="/fttp" component={() => {
                        window.location.href = "https://www.nbnco.com.au/learn/network-technology/fibre-to-the-premises-explained-fttp";
                        return null;
                    }}/>
                    <Route exact path="/fttp" component={() => {
                        window.location.href = "https://www.nbnco.com.au/learn/network-technology/fixed-wireless-explained";
                        return null;
                    }}/>
                    <Route exact path="/fw" component={() => {
                        window.location.href = "https://www.nbnco.com.au/learn/network-technology/fixed-wireless-explained";
                        return null;
                    }}/>
                    <Route exact path="/satellite" component={() => {
                        window.location.href = "https://www.nbnco.com.au/learn/network-technology/sky-muster-explained";
                        return null;
                    }}/>
                    <Route exact path="/github" component={() => {
                        window.location.href = "https://github.com/Dinimar-Fishboi/FI_N";
                        return null;
                    }}/>
                </Switch>
                <Footer/>
            </Suspense>
        </Router>
        </>
    );
  }