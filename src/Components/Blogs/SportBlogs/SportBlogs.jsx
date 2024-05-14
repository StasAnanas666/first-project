import BlogsList from "../BlogsList/BlogsList";

var sport = [
    {id: 1, title: "Football", text: "Football blog"},
    {id: 2, title: "Basketball", text: "Basketball blog"},
    {id: 3, title: "Swimming", text: "Swimming blog"},
    {id: 4, title: "Hockey", text: "Hockey blog"},
    {id: 5, title: "Tennis", text: "Tennis blog"}
]

const SportBlogs = () => {
    return (
        <div className="container py-5">
            <h2>Sport Blogs Page</h2>
            <BlogsList data={sport} />
        </div>
    );
};

export default SportBlogs;
