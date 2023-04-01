import React, { useState, useEffect, createContext } from "react";
// import api from "@services/api";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [auth, setAuth] = useState(() => {
    const localData =
      typeof localStorage !== "undefined" && localStorage.getItem("auth");

    // On test si local est un objet JSON (ancienne verison c'etait un string)
    let localDataIsJsonString = true;
    try {
      JSON.parse(localData);
    } catch (e) {
      localDataIsJsonString = false;
    }

    if (localData && localDataIsJsonString && JSON.parse(localData) !== null) {
      return JSON.parse(localData);
    } else {
      return {
        user: null,
        accessToken: null,
      };
    }
  });

  //   useEffect(() => {
  //     const getUser = async () => {
  //       const res = await api
  //         .get("/api/User", {
  //           headers: {
  //             Authorization: "Bearer " + auth.accessToken,
  //             Accept: "application/json",
  //           },
  //         })
  //         .catch((error) => {
  //           setAuthNull();
  //         });
  //       if (res) {
  //         setAuth({
  //           user: res.data,
  //           accessToken: auth.accessToken,
  //           isSubscribed: res.data.isSubscribed,
  //         });
  //       }
  //     };
  //     if (auth.accessToken != null && auth.accessToken != "null") {
  //       getUser();
  //     } else {
  //       setAuthNull();
  //     }
  //   }, []);

  const setAuthNull = () => {
    setAuth({
      user: null,
      accessToken: null,
    });
  };

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  const logout = () => {
    setAuth({ user: null, accessToken: null });
  };
  const login = (user, accessToken) => {
    setAuth({ user, accessToken });
  };

  const isConnected = (authValue) => {
    if (
      typeof authValue !== "undefined" &&
      authValue !== null &&
      typeof authValue.user !== "undefined" &&
      authValue.user !== null &&
      typeof authValue.accessToken !== "undefined" &&
      authValue.accessToken !== null
    ) {
      return true;
    } else {
      return false;
    }
  };

  const [authMethods] = useState({
    logout: logout,
    login: login,
    isConnected: isConnected,
  });

  return (
    <AuthContext.Provider value={{ auth, authMethods }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
