
const { REACT_APP_BACKEND_URL } = process.env;

const requests = {
	SIGNUP_URL: `${REACT_APP_BACKEND_URL}/users`,
	LOGIN_URL: `${REACT_APP_BACKEND_URL}/users/login`,
	FETCH_ALL_MOVIES:`${REACT_APP_BACKEND_URL}/movies/allmovies`,
	// FETCH_SERIES:`${REACT_APP_BACKEND_URL}/`,
	// FETCH_BOOKMARKED_MOVIES:`${REACT_APP_BACKEND_URL}/api/movies/login`,
	// FETCH_BOOKMARKED_SERIES:`${REACT_APP_BACKEND_URL}/api/movies/login`,
	BOOKMARK_MOVIES:`${REACT_APP_BACKEND_URL}/movies/bookmarkedmovies`
  };

export default requests;
