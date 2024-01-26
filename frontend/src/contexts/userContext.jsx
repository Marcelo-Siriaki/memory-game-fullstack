import PropTypes from "prop-types";
import { createContext } from "react";
import { useUserProvider } from "../hooks/useUserProvider";

const UserContext = createContext({});
export default UserContext;

export function UserProvider(props) {
    const userProvider = useUserProvider();

    return (
        <UserContext.Provider value={userProvider}>
            {props.children}
        </UserContext.Provider>
    );
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};