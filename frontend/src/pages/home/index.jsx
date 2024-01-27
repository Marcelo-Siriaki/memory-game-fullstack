import React from "react";
import "./styles.css";
import Table from "../../components/table";
import Sidebar from "../../components/sidebar";
import useUser from "../../hooks/useUser";
import CountdownModal from "../../components/countDownModal";
import NewRecordRegisterModal from "../../components/newRecordRegisterModal";

const Home = () => {
    const { countdownModalOpen, isNewRecord } = useUser();

    return (
        <div className="home-container">
            <Sidebar />
            <Table />
            {countdownModalOpen && <CountdownModal />}
            {isNewRecord && <NewRecordRegisterModal />}
        </div>
    )
}

export default Home