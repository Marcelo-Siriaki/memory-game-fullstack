import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/userContext.jsx";
import PageNotFound from "./pages/pageNotFound/index.jsx";
import Menu from "./pages/menu/index.jsx";
import Home from "./pages/home/index.jsx";

function MainRoutes() {
    return (
        <UserProvider>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </UserProvider>
    );
}

export default MainRoutes;