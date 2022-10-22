import React, { useContext } from 'react';
import AuthContext from "../../auth/auth-context";
import styles from "./AvatarButton.module.css";

const AvatarButton = (props) => {
  const { name } = useContext(AuthContext);
  return (
    <button
      style={{
        backgroundImage: `url(https://robohash.org/${name}.png)`
      }}
      className={styles["avatar-button"]}
      onClick={props.onClick}
    />
  );
};

export default AvatarButton;
