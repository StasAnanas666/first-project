import {Outlet} from "react-router-dom";
import BlogsList from "../BlogsList/BlogsList";

const SportBlogs = (props) => {
    return (
        <div className="container py-5">
            <h2>Sport Blogs Page</h2>
            <BlogsList data={props.data} type="sport" />
            <Outlet />
        </div>
    );
};

export default SportBlogs;
