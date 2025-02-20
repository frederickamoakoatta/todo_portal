import './App.css'
import {Route, Routes} from "react-router-dom";
import {AuthProvider} from "react-oidc-context";
import {COGNITO_CLIENT_ID, REDIRECT_URL} from "./util/env-exports.ts";
import Home from "./pages/Home.tsx"
import Credentials from "./pages/Credentials.tsx";
import Database from "./pages/Database.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {useState} from "react";
import DevInfoContext from './context/DevInfoContext.ts';


const cognitoAuthConfig = {
    authority: "https://cognito-idp.us-west-1.amazonaws.com/us-west-1_ZEPalthpD",
    client_id: COGNITO_CLIENT_ID,
    redirect_uri: REDIRECT_URL,
    post_logout_redirect_uri: window.location.origin,
    response_type: "code",
    scope: "phone openid email",
};

const queryClient = new QueryClient();

function App() {
    const [displayDevInfo, setDisplayDevInfo] = useState(true);

    return (
        <>
            <AuthProvider {...cognitoAuthConfig}>
                <QueryClientProvider client={queryClient}>
                    <DevInfoContext.Provider value={{displayValue: displayDevInfo, displayFunction: setDisplayDevInfo}}>
                        <Routes>
                            <Route path="/" element={<Home/>}>
                                <Route index element={<Credentials/>}/>
                                <Route path="credentials" element={<Credentials/>}/>
                                <Route path="database" element={<Database/>}/>
                            </Route>
                        </Routes>
                    </DevInfoContext.Provider>
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </AuthProvider>
        </>
    )
}

export default App
