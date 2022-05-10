const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserEmail = state => state.auth.user.email;

const getUserName = state => state.auth.user.name;

const getUserToken = state => state.auth.token;

export default {
  getIsLoggedIn,
  getUserEmail,
  getUserName,
  getUserToken,
};
