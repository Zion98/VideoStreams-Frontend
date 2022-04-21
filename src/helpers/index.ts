export const isLogin = () => {
  const getToken = JSON.parse(localStorage.getItem("tyUser") || "{}");
  //   const token = getToken;
  if (getToken && getToken.token) {
    return true;
  }

  return false;
};
