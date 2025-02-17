import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "react-oidc-context";
import {COGNITO_CLIENT_ID} from "./util/util.ts";


const cognitoAuthConfig = {
    authority: "https://cognito-idp.us-west-1.amazonaws.com/us-west-1_ZEPalthpD",
    client_id: COGNITO_CLIENT_ID,
    redirect_uri: "http://localhost:5173/",
    response_type: "code",
    scope: "phone openid email",
};

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider {...cognitoAuthConfig}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </AuthProvider>
    </StrictMode>,
)
