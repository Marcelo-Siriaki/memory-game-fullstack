import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/userContext.jsx";
import PageNotFound from "./pages/pageNotFound/index.jsx";
import Login from "./pages/login/index.jsx";
import Home from "./pages/home/index.jsx";

function MainRoutes() {
    return (
        <UserProvider>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </UserProvider>
    );
}

export default MainRoutes;