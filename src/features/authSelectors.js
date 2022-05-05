const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserEmail = state => state.auth.user.email;

const getUserName = state => state.auth.user.name;

export default { getIsLoggedIn, getUserEmail, getUserName };
