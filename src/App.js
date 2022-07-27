import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Blog from "./Pages/Blog";
import BlogList from "./Pages/Profile/BlogList";
import BlogForm from "./Pages/Profile/BlogForm";
import Header from "./Components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/admin">
          <Route path="blogs" element={<BlogList />} />
          <Route path="blog/add" element={<BlogForm />} />
          <Route path="blog/edit" element={<BlogForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
