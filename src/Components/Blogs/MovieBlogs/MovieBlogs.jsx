import {Outlet} from "react-router-dom";
import BlogsList from "../BlogsList/BlogsList";

const MovieBlogs = (props) => {
    return (
        <div className="container py-5">
            <h2>News Blogs Page</h2>
            <BlogsList data={props.data} type="movies" />
            <Outlet />
        </div>
    );
};

export default MovieBlogs;
