import {Outlet} from "react-router-dom";
import Tabs from "../components/Tabs.tsx";
import {useAuth} from "react-oidc-context";
import Landing from "./Landing.tsx";
import Loading from "./Loading.tsx";
import Header from "../components/Header.tsx";

const Home = () => {
    const auth = useAuth();

    console.log(auth.isLoading, auth.isAuthenticated, auth.activeNavigator);

    if (!auth.isAuthenticated && !auth.isLoading) {
        return <Landing/>;
    }

    if (auth.isLoading || auth.activeNavigator) {
        return <Loading/>;
    }

    if (auth.error) {
        return <div>Encountering error... {auth.error.message}</div>;
    }

    return (
        <>
            { auth.isAuthenticated && <Header/> }
            {
                auth.isAuthenticated &&
                <main className="d-flex flex-column flex-wrap w-full px-20 py-25">
                    <Tabs tab1={'Credentials'} tab2={'Database'}/>
                    <br/>
                    <Outlet/>
                </main>
            }
        </>
    );
}

export default Home;
