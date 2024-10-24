import React from "react";
import { SettingsContainer, SettingsHeader, SettingsItem } from "./styled";
import { useNavigate } from "react-router-dom";

const ChangeSettings = () => {
  const navigate = useNavigate();

  // Modal orqasidagi fond bosilganda sahifani o'zgartirish funksiyasi
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("topmenu")) {
      navigate("/profile"); // Sahifani yangilamasdan profile ga o'tish
    }
  };
  return (
    <div className="topmenu" onClick={handleBackgroundClick}>
      <SettingsContainer>
        <SettingsHeader>Profile Settings</SettingsHeader>
        <SettingsItem>
          Name: <input type="text" placeholder="Enter your name" />
        </SettingsItem>
        <SettingsItem>
          Email: <input type="email" placeholder="Enter your email" />
        </SettingsItem>
        <SettingsItem>
          Password: <input type="password" placeholder="Enter new password" />
        </SettingsItem>
        <SettingsItem>
          <button>Save Changes</button>
        </SettingsItem>
      </SettingsContainer>
    </div>
  );
};

export default ChangeSettings;
