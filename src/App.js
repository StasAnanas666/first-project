import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getBlogsByType } from "./blogService";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Blogs from "./Components/Blogs/Blogs";
import NewsBlogs from "./Components/Blogs/NewsBlogs/NewsBlogs";
import MovieBlogs from "./Components/Blogs/MovieBlogs/MovieBlogs";
import MusicBlogs from "./Components/Blogs/MusicBlogs/MusicBlogs";
import SportBlogs from "./Components/Blogs/SportBlogs/SportBlogs";
import BlogDesc from "./Components/Blogs/BlogsList/BlogDesc/BlogDesc";
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
                        <Route
                            path="news"
                            element={
                                <NewsBlogs data={getBlogsByType("news")} />
                            }
                        >
                            <Route
                                path=":id"
                                element={
                                    <BlogDesc data={getBlogsByType("news")} />
                                }
                            />
                        </Route>
                        <Route
                            path="movies"
                            element={
                                <MovieBlogs data={getBlogsByType("movies")} />
                            }
                        >
                            <Route
                                path=":id"
                                element={
                                    <BlogDesc data={getBlogsByType("movies")} />
                                }
                            />
                        </Route>
                        <Route
                            path="sport"
                            element={
                                <SportBlogs data={getBlogsByType("sport")} />
                            }
                        >
                            <Route
                                path=":id"
                                element={
                                    <BlogDesc data={getBlogsByType("sport")} />
                                }
                            />
                        </Route>
                        <Route
                            path="music"
                            element={
                                <MusicBlogs data={getBlogsByType("music")} />
                            }
                        >
                            <Route
                                path=":id"
                                element={
                                    <BlogDesc data={getBlogsByType("music")} />
                                }
                            />
                        </Route>
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
