"use client";
import React from "react";
import styles from "../sidebar/sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const SideBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  console.log(router, "router");
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={"/next.svg"}
          alt=""
          width="50"
          height="50"
          priority
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Aditya Kumar</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className="styles.list">
        {menuItems.map((e) => (
          <li key={e.title}>
            <span className={styles.cat}>{e.title}</span>
            {e.list.map((sub) => (
              <Link
                key={sub.title}
                href={sub.path}
                className={`${styles.link} ${
                  pathname === sub.path && styles.active
                }
                `}
              >
                {sub.title}
                {sub.icon}
              </Link>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
