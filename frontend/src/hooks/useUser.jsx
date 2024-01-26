import { useContext } from "react";
import UserContext from "../contexts/userContext";

function useUser() {
    return useContext(UserContext);
}

export default useUser;