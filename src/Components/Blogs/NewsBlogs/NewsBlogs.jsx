import BlogsList from "../BlogsList/BlogsList";

var news = [
    { id: 1, title: "World", text: "World news blog" },
    { id: 2, title: "Politic", text: "Politic blog" },
    { id: 3, title: "Weather", text: "Weather news blog" },
    { id: 4, title: "Hobby", text: "Hobby blog" },
];

const NewsBlogs = () => {
    return (
        <div className="container py-5">
            <h2>News Blogs Page</h2>
            <BlogsList data={news} />
        </div>
    );
};

export default NewsBlogs;
