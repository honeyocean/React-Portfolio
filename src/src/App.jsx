import {Outlet} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavTabs from './components/NavTabs';

export default function App(){
    return(
        <>
        <Header/>
            <NavTabs/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}