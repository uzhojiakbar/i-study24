import React, { useEffect, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { NavbarUser } from "../../Utils/newNavbar";
import {
  GoToProfileButton,
  Logo,
  NavWrapper,
  NavbarContainer,
  ProfileBar,
  ProfileBarButton,
} from "./styled.js";
import { SiteTexts } from "../../Utils/texts.js";
import { LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useGetProfile, useLogOut } from "../../Hooks/RegisterHook.jsx";
import ChangeSettings from "../../Pages/Profile/changeSettings/changeSettings.jsx";
import { IoHelpOutline } from "react-icons/io5";

const Navigating = ({ login = false, icon = false }) => {
  const [toggle, setToggle] = useState(false);
  const [ProfileData, setProfileData] = useState(null);
  const { data: profInfo } = useGetProfile();
  const logOut = useLogOut();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const changeSettings = searchParams.get("changeSettings") === "true";

  const navigate = useNavigate();

  useEffect(() => {
    if (profInfo) {
      setProfileData(profInfo);
      console.log(profInfo);
    }
  }, [profInfo]);

  const handleSettingsClick = (profile = 0, page) => {
    if (page) {
      navigate(page);
      return;
    }
    if (profile) {
      navigate("/profile");
      return;
    }
    window.location.href = "/profile?changeSettings=true"; // Settings sahifasiga yo'naltirish
  };

  const items = [
    {
      key: "1",
      label: (
        <GoToProfileButton
          onClick={() => handleSettingsClick(1)}
          style={{ cursor: "pointer" }}
        >
          <div className="name">
            {ProfileData?.first_name} {ProfileData?.last_name}
          </div>
          <div className="name-desc">Hisobni ochish</div>
        </GoToProfileButton>
      ),
      disabled: false,
    },
    {
      type: "divider",
    },

    {
      key: "2",
      label: (
        <ProfileBarButton
          onClick={() => handleSettingsClick(0, "/contact")}
          style={{ cursor: "pointer" }}
        >
          <IoHelpOutline />
          <div>Help</div>
        </ProfileBarButton>
      ),
    },
    {
      key: "3",
      label: (
        <ProfileBarButton
          onClick={() => handleSettingsClick(0)}
          style={{ cursor: "pointer" }}
        >
          <SettingOutlined />
          <div>Sozlamalar</div>
        </ProfileBarButton>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "4",
      label: (
        <ProfileBarButton
          logout="true"
          onClick={logOut}
          style={{ cursor: "pointer" }}
        >
          <LogoutOutlined />
          <div>Hisobdan chiqish</div>
        </ProfileBarButton>
      ),
    },
  ];

  if (login == false)
    return (
      <NavWrapper>
        <NavbarContainer>
          <div className="bg-[#0b132b] text-white py-4 p-[10px] w-full">
            <div className="main-container">
              <div className="flex justify-between md:items-center flex-col md:flex-row">
                <div
                  className={`${
                    toggle ? "pb-3" : "pb-0"
                  } flex w-full md:w-auto justify-between transition-all duration-300`}
                >
                  <div className="flex items-center justify-between">
                    <Logo>
                      {/* <img src="/icon.png" alt="logo" className="w-10 h-10" /> */}
                      <Link
                        to="/"
                        className="text-[18px] lg:text-2xl font-semibold"
                      >
                        I-Study24
                      </Link>
                    </Logo>
                  </div>
                  <button onClick={() => setToggle(!toggle)}>
                    <FiMenu
                      className={`w-9 h-9 md:hidden transition-all duration-300 ${
                        toggle ? "rotate-90" : "rotate-0"
                      }`}
                    />
                  </button>
                </div>
                <div
                  className={`${
                    toggle ? "h-[200px]" : "h-0"
                  } flex gap-4 md:items-center flex-col md:flex-row overflow-hidden transition-all duration-300 md:h-auto text-[14px] lg:text-base`}
                >
                  <Link
                    to="/"
                    className="cursor-pointer transition-all duration-300 hover:text-cyan-500"
                  >
                    Subjects
                  </Link>
                  <div className="flex cursor-pointer transition-all duration-300 hover:text-cyan-500 items-center gap-1">
                    <Link to="/">Code Compiler</Link>
                    <IoIosArrowDown />
                  </div>
                  <Link
                    to="/"
                    className="cursor-pointer transition-all duration-300 hover:text-cyan-500"
                  >
                    Discuss
                  </Link>
                  <Link
                    to="/"
                    className="cursor-pointer transition-all duration-300 hover:text-cyan-500"
                  >
                    Teams
                  </Link>
                  <div className="flex gap-3">
                    <Link to="/account/register">
                      <button className="py-[4px] md:py-2 px-5 md:px-6 border-2 border-blue-500 rounded-sm text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white">
                        {SiteTexts.registerText}
                      </button>
                    </Link>
                    <Link to="/account/sign-in">
                      <button className="py-[4px] md:py-2 px-3 md:px-4 border-2 border-blue-500 rounded-sm bg-blue-500 transition-all duration-300 hover:bg-transparent hover:text-blue-500 ">
                        {SiteTexts.signInText}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NavbarContainer>
      </NavWrapper>
    );

  const linkClassName =
    "flex gap-4 md:items-center flex-col md:flex-row overflow-hidden transition-all duration-300 md:h-auto text-[14px] lg:text-base cursor-pointer  hover:text-cyan-500";

  return (
    <NavWrapper>
      <NavbarContainer>
        <div className="bg-white text-slate-900 py-4 px-4 relative">
          <div className="main-container">
            <div className="flex justify-between md:items-center md:flex-row ">
              {/* *Mobile */}
              <div
                className={`${
                  toggle ? "pb-3" : "pb-0"
                } flex w-full md:w-auto items-center transition-all duration-300`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="logo">
                    <Link
                      to="/"
                      className="text-[18px] lg:text-2xl font-semibold"
                    >
                      I-Study24
                    </Link>
                  </div>

                  <div className="flex items-center gap-2">
                    <button onClick={() => setToggle(!toggle)}>
                      <FiMenu className="w-9 h-9 relative left-[50px] md:hidden" />
                    </button>

                    {/* <ProfileBar>
                      {icon ? (
                        <img
                          src={icon}
                          alt=""
                          className="w-10 h-10 rounded-full"
                        />
                      ) : (
                        <b className="fa-regular fa-user"></b>
                      )}
                    </ProfileBar> */}
                  </div>
                </div>
              </div>

              {/* *Mobile Sidebar */}
              {toggle && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                  onClick={() => setToggle(false)}
                ></div>
              )}
              <div
                className={`fixed top-0 right-0 z-50 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out transform ${
                  toggle ? "translate-x-0" : "translate-x-full"
                } md:hidden w-[250px] p-4`}
              >
                <div className="flex flex-col gap-6 h-full justify-between">
                  {/* Yuqori qism */}
                  <div className="flex flex-col gap-2">
                    {/* Profile Icon */}
                    <Space className="flex gap-[20px] pt-2 pb-4">
                      <ProfileBar>
                        {icon ? (
                          <img
                            src={icon}
                            alt=""
                            className="w-10 h-10 rounded-full"
                          />
                        ) : (
                          <b className="fa-regular fa-user"></b>
                        )}
                      </ProfileBar>
                      <div className="capitalize">
                        {ProfileData?.first_name + "   "}{" "}
                        {ProfileData?.last_name}
                      </div>
                    </Space>
                    <hr />
                    {/* Navbar Links */}
                    {NavbarUser.map((v) => {
                      return v.type === "route" ? (
                        <NavLink
                          key={v.id}
                          to={v.path}
                          className="block p-2 text-lg rounded-lg hover:bg-gray-700 transition-all duration-200 hover:pl-6"
                          onClick={() => setToggle(false)}
                        >
                          {v.name}
                        </NavLink>
                      ) : v.type === "parent" ? (
                        <div
                          key={v.id}
                          className="flex justify-between items-center"
                        >
                          <span className="block p-2 text-lg rounded-lg">
                            {v.name}
                          </span>
                          <IoIosArrowDown />
                        </div>
                      ) : (
                        <></>
                      );
                    })}

                    <hr />

                    <div className="">
                      {/* <ProfileBarButton
                        onClick={() => handleSettingsClick(0, "/contact")}
                        style={{ cursor: "pointer" }}
                      >
                        <IoHelpOutline />
                        <div>Help</div>
                      </ProfileBarButton>
                      <ProfileBarButton
                        onClick={() => handleSettingsClick(0)}
                        style={{ cursor: "pointer" }}
                      >
                        <SettingOutlined />
                        <div>Sozlamalar</div>
                      </ProfileBarButton>
                      <ProfileBarButton
                        logout="true"
                        onClick={logOut}
                        style={{ cursor: "pointer" }}
                      >
                        <LogoutOutlined />
                        <div>Hisobdan chiqish</div>
                      </ProfileBarButton> */}
                      <div className="flex gap-2 items-center">
                        <IoHelpOutline />
                        <span className="block p-2 text-lg rounded-lg">
                          Yordam
                        </span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <SettingOutlined />
                        <span className="block p-2 text-lg rounded-lg">
                          Sozlamalar
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Logout Button */}
                  <div>
                    <button
                      className="flex items-center  gap-2 text-lg p-2 rounded-lg  hover:bg-red-700 transition-all duration-200"
                      onClick={logOut}
                    >
                      <FiLogOut /> Log Out
                    </button>
                  </div>
                </div>
              </div>

              {/* *Laptop */}
              <div
                className={` ${
                  toggle ? "h-0 relative z-[1] top-[80px]" : "h-0"
                } flex gap-4 md:items-center flex-col md:flex-row overflow-hidden transition-all duration-300 md:h-auto text-[14px] lg:text-base`}
              >
                {NavbarUser.map((v, i) => {
                  return v.type === "route" ? (
                    <NavLink key={v.id} to={v.path} className={linkClassName}>
                      {v.name}
                    </NavLink>
                  ) : v.type === "parent" ? (
                    <div key={v.id} className={linkClassName}>
                      <div>{v.name}</div>
                      <IoIosArrowDown />
                    </div>
                  ) : (
                    <></>
                  );
                })}
              </div>

              <div className="profile-icon hidden md:block">
                <Dropdown
                  menu={{
                    items,
                  }}
                  trigger={["click"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <ProfileBar>
                        {icon ? (
                          <img
                            src={icon}
                            alt=""
                            className="w-10 h-10 rounded-full"
                          />
                        ) : (
                          <b className="fa-regular fa-user"></b>
                        )}
                      </ProfileBar>
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </NavbarContainer>
      {changeSettings ? <ChangeSettings /> : <></>}
    </NavWrapper>
  );
};

export default Navigating;
