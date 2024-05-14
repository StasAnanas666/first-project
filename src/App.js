import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Blogs from "./Components/Blogs/Blogs";
import NewsBlogs from "./Components/Blogs/NewsBlogs/NewsBlogs";
import MovieBlogs from "./Components/Blogs/MovieBlogs/MovieBlogs";
import MusicBlogs from "./Components/Blogs/MusicBlogs/MusicBlogs";
import SportBlogs from "./Components/Blogs/SportBlogs/SportBlogs";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import NotFound from "./Components/NotFound/NotFound";

function App() {
    return (
        <div className="container-fluid-">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/blogs" element={<Blogs />}>
                        <Route index element={<NewsBlogs />} />
                        <Route path="movie-blogs" element={<MovieBlogs />} />
                        <Route path="sport-blogs" element={<SportBlogs />} />
                        <Route path="music-blogs" element={<MusicBlogs />} />
                    </Route>
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
