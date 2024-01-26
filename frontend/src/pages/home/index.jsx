import React from "react";
import "./styles.css";
import Table from "../../components/table";
import Sidebar from "../../components/sidebar";
import useUser from "../../hooks/useUser";
import CountdownModal from "../../components/countDownModal";

const Home = () => {
    const { countdownModalOpen } = useUser();

    return (
        <div className="home-container">
            <Sidebar />
            <Table />
            {countdownModalOpen && <CountdownModal />}
        </div>
    )
}

export default Home