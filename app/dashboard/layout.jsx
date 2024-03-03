import React from "react";
import styles from "@/app/ui/dashboard/dashboard.module.css";
import Navbar from "../ui/dashboard/navbar/navbar";
import SideBar from "../ui/dashboard/sidebar/sidebar";

const Dashboard = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
