import React, { useEffect, useState } from "react";
import { useGetGroupName, useGetProfile } from "../../Hooks/RegisterHook";
import Navigating from "../../Components/Navbar/Navbar";
import {
  Avatar,
  Button,
  Name,
  ProfileWrapper,
  StreakItem,
  StreakSection,
} from "./styled";
import avatarUrl from "../../assets/profile/hojiakbar.jpg"; // Avatar rasmi uchun
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [ProfileData, setProfileData] = useState(null); // Boshlang'ich qiymat null
  const [loading, setLoading] = useState(true); // Boshlang'ich qiymat true
  const { data: profInfo } = useGetProfile();

  const navigate = useNavigate();

  useEffect(() => {
    if (profInfo) {
      setProfileData(profInfo);
      console.log(profInfo);

      setLoading(false);
    }
  }, [profInfo]);

  return (
    <>
      <div className="pt-[80px]">
        <Navigating dark={1} login="1" />
      </div>
      {loading ? (
        <div className="loaderWindow">
          <div className="loader"></div>
        </div>
      ) : (
        <ProfileWrapper>
          <Avatar src={ProfileData?.image || avatarUrl} alt="Profile Avatar" />
          <Name>
            {ProfileData?.first_name} {ProfileData?.last_name}{" "}
          </Name>

          <Button onClick={() => navigate("/lessons")}>Darslarga o`tish</Button>

          <StreakSection>
            <StreakItem>
              <div className="streak-value">{} days</div>
              <span>Current Streak</span>
            </StreakItem>
            <StreakItem>
              <div className="streak-value">1 day</div>
              <span>Longest Streak</span>
            </StreakItem>
            <StreakItem>
              <div className="streak-value">0/3</div>
              <span>Streak Saver</span>
            </StreakItem>
          </StreakSection>
        </ProfileWrapper>
      )}
    </>
  );
};

export default Profile;

// {/* Profil ma'lumotlari va guruh nomi */}
// <h1>
//   {ProfileData?.first_name} {ProfileData?.last_name}
// </h1>
// <h2>{ProfileData?.course} -kurs</h2>
// <h2>Guruh: {groupName}</h2> {/* Guruh nomi */}
