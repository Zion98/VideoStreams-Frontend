import React, { useEffect } from "react";
import SideBar from "../components/Sidebar";
import SearchBar from "../components/Search";
import List from "../components/List";
import {
  selectAllMoviesSelector,
} from "../redux/movies/movies.selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllMoviesAsync,
  bookmarkMovies,
} from "../redux/movies/movies.actions";
const Dashboard = () => {
  const dispatch = useDispatch();
  const allMovies = useSelector(selectAllMoviesSelector);
  // const authError = useSelector(selectAuthErrors);
  // console.log({ allMovies });

  useEffect(() => {
    dispatch(fetchAllMoviesAsync());
    // eslint-disable-next-line
  }, []);

  const handleBookmarkMovies = (moviesId: string) => {
    const token = JSON.parse(localStorage.getItem("tyUser") || "{}");
    const userID = token.userId.toString();

    const movieObj = {
      moviesid: moviesId.toString(),
      userid: userID,
    };

    dispatch(bookmarkMovies(movieObj));
    dispatch(fetchAllMoviesAsync());
  };

  return (
    <div className="relative h-screen flex gap-x-8 flex-row px-4 py-8">
      <SideBar />

      <div className="relative left-24">
        <SearchBar placeholder={"Search for movies"} />
        <List
          title={"Movies"}
          data={allMovies}
          bookmarkFunc={handleBookmarkMovies}
        />
        <div className="pt-12">
          <List data={allMovies} title={"Bookmarked TV Series"} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
