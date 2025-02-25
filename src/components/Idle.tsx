import {useIdleTimer} from "react-idle-timer";
import {useAuth} from "react-oidc-context";

const IdleLogout = () => {
    const auth = useAuth();

    const handleIdle = async () => {
        console.log("User is idle, logging out...");
        try {
            await auth.removeUser();
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    useIdleTimer({
        timeout: 60 * 60 * 1000, // 1 hour
        onIdle: handleIdle,
        debounce: 500, // Wait 500ms before confirming idle state
    });

    return null; // No UI needed
};

export default IdleLogout;
