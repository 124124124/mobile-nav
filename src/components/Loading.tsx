import React, { useEffect, useState } from "react";
import classess from "./Loading.module.css";

const Loading: React.FC = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1500);
  }, []);

  return load ? (
    <div className={classess.loadingContainer}>
      <div className={classess.loading}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : (
    <React.Fragment></React.Fragment>
  );
};

export default Loading;
