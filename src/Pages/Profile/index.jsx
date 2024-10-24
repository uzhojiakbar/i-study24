import React, { useEffect, useState } from "react";
import { useGetGroupName, useGetProfile } from "../../Hooks/RegisterHook";
import Navigating from "../../Components/Navbar/Navbar";
import {
  Avatar,
  Button,
  Info,
  Name,
  ProfileWrapper,
  StreakItem,
  StreakSection,
} from "./styled";
import avatarUrl from "../../assets/profile/hojiakbar.jpg"; // Avatar rasmi uchun

const Profile = () => {
  const [ProfileData, setProfileData] = useState(null); // Boshlang'ich qiymat null
  const [loading, setLoading] = useState(true); // Boshlang'ich qiymat true
  const { data: profInfo } = useGetProfile();
  const { data: group } = useGetGroupName(ProfileData?.group_name); // groupName oling
  console.log("GUruh nomi:  ", group);

  useEffect(() => {
    if (profInfo) {
      setProfileData(profInfo);

      setLoading(false); // Loadingni false qilamiz
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
          <Info>
            🇺🇿 <b>Uzbekistan</b> ·{" "}
            {ProfileData?.course ? `${ProfileData?.course}-kurs` : ""}
          </Info>
          <Info>
            <b>Guruh:</b> {group}
          </Info>

          <Button>O'rganishni boshlash.</Button>

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
