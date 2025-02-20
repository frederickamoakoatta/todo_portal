import {Outlet} from "react-router-dom";
import Tabs from "../components/Tabs.tsx";
import {useAuth} from "react-oidc-context";
import Landing from "./Landing.tsx";
import Loading from "./Loading.tsx";
import Header from "../components/Header.tsx";
import ErrorPage from "./Error.tsx";
import WelcomeCard from "../components/Welcome.tsx";
import {useContext} from "react";
import DevInfoContext from "../context/DevInfoContext.ts";


const Home = () => {
    const auth = useAuth();
    const {displayValue} = useContext(DevInfoContext);

    if (!auth.isAuthenticated && !auth.isLoading) {
        return <Landing/>;
    }

    if (auth.isLoading || auth.activeNavigator) {
        return <Loading fullPage/>;
    }

    if (auth.error) {
        return <ErrorPage message={auth.error.message}/>;
    }

    return (
        <>
            { auth.isAuthenticated && <Header/> }
            {
                auth.isAuthenticated &&
                <main className="d-flex flex-column flex-wrap w-full px-20 py-30">
                    { displayValue && <WelcomeCard/> }
                    <Tabs tab1={'Credentials'} tab2={'Database'}/>
                    <br/>
                    <Outlet/>
                </main>
            }
        </>
    );
}

export default Home;
