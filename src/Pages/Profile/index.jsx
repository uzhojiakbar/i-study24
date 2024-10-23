import React, { useEffect, useState } from "react";
import { useGetGroupName, useGetProfile } from "../../Hooks/RegisterHook";
import Navigating from "../../Components/Navbar/Navbar";

const Profile = () => {
  const [ProfileData, setProfileData] = useState(null); // Boshlang'ich qiymat null
  const [loading, setLoading] = useState(true); // Boshlang'ich qiymat true
  const { data: profInfo } = useGetProfile();
  const { groupName } = useGetGroupName(3); // groupName oling

  useEffect(() => {
    if (profInfo) {
      setProfileData(profInfo);
      console.log(profInfo);

      setLoading(false); // Loadingni false qilamiz
    }
  }, [profInfo]);

  return (
    <>
      <div className="pt-[80px]">
        <Navigating login="1" />
      </div>
      {loading ? (
        <div className="loaderWindow">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          {/* Profil ma'lumotlari va guruh nomi */}
          <h1>
            {ProfileData?.first_name} {ProfileData?.last_name}
          </h1>
          <h2>{ProfileData?.course} -kurs</h2>
          <h2>Guruh: {groupName}</h2> {/* Guruh nomi */}
        </div>
      )}
    </>
  );
};

export default Profile;
