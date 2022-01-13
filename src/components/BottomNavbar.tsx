import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import React from "react";
import classess from "./BottomNavbar.module.css";
import {
  MenuAlt1Icon as PostsIcon,
  CogIcon as SettingsIcon,
  HeartIcon as FavoritesIcon,
} from "@heroicons/react/outline";

const BottomNavbar: React.FC = () => {
  const redirect = useNavigate();

  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab")
  );

  const isActive = useCallback(
    (item) => {
      return activeTab === item ||
        item === localStorage.getItem("activeTab")
        ? true
        : false;
    },
    [activeTab]
  );

  useEffect(() => {
    const paths = ["posts", "favorites", "settings"];
    paths.map((item) => {
      if (isActive(item)) {
        redirect(`/${item}`);
        localStorage.setItem("activeTab", item);
      }
      return null;
    });
  }, [redirect, isActive]);

  return (
    <div className={classess.bottomNavbar}>
      <Link
        className={classess.button}
        onClick={() => setActiveTab("posts")}
        to={"/posts"}
      >
        <PostsIcon
          className={
            isActive("posts")
              ? `${classess.buttonIcon} ${classess.activeButton}`
              : classess.buttonIcon
          }
        />
      </Link>

      <Link
        className={classess.button}
        onClick={() => setActiveTab("favorites")}
        to={"/favorites"}
      >
        <FavoritesIcon
          className={
            isActive("favorites")
              ? `${classess.buttonIcon} ${classess.activeButton}`
              : classess.buttonIcon
          }
        />
      </Link>

      <Link
        className={classess.button}
        onClick={() => setActiveTab("settings")}
        to={"/settings"}
      >
        <SettingsIcon
          className={
            isActive("settings")
              ? `${classess.buttonIcon} ${classess.activeButton}`
              : classess.buttonIcon
          }
        />
      </Link>
    </div>
  );
};

export default BottomNavbar;
