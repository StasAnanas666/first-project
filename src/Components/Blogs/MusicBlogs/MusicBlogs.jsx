import {Outlet} from "react-router-dom";
import BlogsList from "../BlogsList/BlogsList";

const MusicBlogs = (props) => {
    return (
        <div className="container py-5">
            <h2>Music Blogs Page</h2>
            <BlogsList data={props.data} type="music" />
            <Outlet />
        </div>
    );
};

export default MusicBlogs;
