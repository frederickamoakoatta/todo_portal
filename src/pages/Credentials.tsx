import CodeCard from "../components/CodeCard.tsx";
import {useAuth} from "react-oidc-context";

const Credentials = () => {
    const auth = useAuth();
    return (
        <>
            <CodeCard name={'Access Token'} value={auth.user?.access_token || '***'}/>
            <br/>
            <CodeCard name={'Refresh Token'} value={auth.user?.refresh_token || '***'}/>
        </>
    )
}

export default Credentials;