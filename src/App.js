import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { getAll } from "./redux/postReducer";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import SearchScreen from "./screens/SearchScreen/SearchScreen";

function App() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const sortedPosts = useMemo(() => {
    let data = posts[0]?.filter((post) =>
      post.author.toLowerCase().includes(keyword.toLowerCase())
    );
    console.log("dataaa", data);
    return data;
  }, [keyword]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://62f2516c18493ca21f313743.mockapi.io/postapi"
      );

      const data = await response.json();

      dispatch(getAll(data));
    } catch (error) {
      console.log(error);
    }
  };

  console.log("key", keyword, sortedPosts);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <SearchBar setKeyword={setKeyword} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/search" element={<SearchScreen posts={sortedPosts} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
