import { NavLink, Outlet } from "react-router-dom";

const BlogsMenu = () => {
    return (
        <ul class="nav">
            <li class="nav-item">
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "nav-link text-dark fw-bold"
                            : "nav-link text-dark"
                    }
                    aria-current="page"
                    to="/blogs"
                >
                    News Blogs
                </NavLink>
            </li>
            <li class="nav-item">
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "nav-link text-dark fw-bold"
                            : "nav-link text-dark"
                    }
                    aria-current="page"
                    to="/blogs/movie-blogs"
                >
                    Movie Blogs
                </NavLink>
            </li>
            <li class="nav-item">
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "nav-link text-dark fw-bold"
                            : "nav-link text-dark"
                    }
                    aria-current="page"
                    to="/blogs/music-blogs"
                >
                    Music Blogs
                </NavLink>
            </li>
            <li class="nav-item">
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "nav-link text-dark fw-bold"
                            : "nav-link text-dark"
                    }
                    to="/blogs/sport-blogs"
                >
                    Sport Blogs
                </NavLink>
            </li>
        </ul>
    );
};

const Blogs = () => {
    return (
        <div className="container py-5">
            <h2>Blogs Page</h2>

            <BlogsMenu />

            <Outlet />
        </div>
    );
};

export default Blogs;
