import { useState, useEffect } from "react";
import { useStore } from "../store";
import { useNavigate } from "react-router-dom";
import { gql, useQuery, useMutation } from "@apollo/client";

import ProfileImageUpload from "../componets/ProfileImgUpload";

function Profile() {
  const { user, setState } = useStore();
  const [userId, setUserId] = useState("");
  const [showProfileImageUpload, setShowProfileImageUpload] = useState(false);

  const navigate = useNavigate();

  // PROFILE PICUTRE UPLOAD
  const toggleProfileImageUpload = () => {
    setShowProfileImageUpload(!showProfileImageUpload);
  };

  const handleProfileImageUpload = async (selectedImage) => {
    try {
      await uploadProfilePicture({
        variables: {
          id: user.id,
          profilePicture: selectedImage,
        },
      });

      setShowProfileImageUpload(false);
    } catch (err) {
      console.error("Error uploading profile picture:", err);
    }
  };

  //   NAVIGATE TO LOGIN
  function toLogin() {
    navigate("/login");
  }

  //   PROFILE PAGE
  return (
    <>
      {!user ? (
        toLogin()
      ) : (
        <section className="Profile">
          <div className="mb-3">
            {showProfileImageUpload && (
              <ProfileImageUpload
                onUpload={handleProfileImageUpload}
                toggle={toggleProfileImageUpload}
              />
            )}
          </div>
          <div>
            <h2>Wlecome {user.username}</h2>
          </div>
        </section>
      )}
    </>
  );
}

export default Profile;
