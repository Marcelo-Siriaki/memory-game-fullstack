import React from "react";
import "./styles.css";
import Table from "../../components/table";
import Sidebar from "../../components/sidebar";

const Home = () => {

    return (
        <div className="home-container">
            <Sidebar />
            <Table />
        </div>
    )
}

export default Home