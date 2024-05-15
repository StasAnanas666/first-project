import {Outlet} from "react-router-dom";
import BlogsList from "../BlogsList/BlogsList";

const NewsBlogs = (props) => {
    return (
        <div className="container py-5">
            <h2>News Blogs Page</h2>
            <BlogsList data={props.data} type="news" />
            <Outlet />
        </div>
    );
};

export default NewsBlogs;
