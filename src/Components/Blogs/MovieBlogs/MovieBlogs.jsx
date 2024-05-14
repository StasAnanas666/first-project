import BlogsList from "../BlogsList/BlogsList";

var movies = [
    { id: 1, title: "Avengers", text: "Avengers blog" },
    { id: 2, title: "Hobbit", text: "Hobbit blog" },
    { id: 3, title: "Harry Potter", text: "Harry Potter blog" },
    { id: 4, title: "Game of Thrones", text: "Game of Thrones blog" },
];

const MovieBlogs = () => {
    return (
        <div className="container py-5">
            <h2>News Blogs Page</h2>
            <BlogsList data={movies} />
        </div>
    );
};

export default MovieBlogs;
