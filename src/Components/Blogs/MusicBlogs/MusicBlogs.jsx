import BlogsList from "../BlogsList/BlogsList";

var music = [
    { id: 1, title: "Arctic Monkeys", text: "Arctic Monkeys blog" },
    { id: 2, title: "Batushka", text: "Batushka blog" },
    { id: 3, title: "Clash", text: "Clash blog" },
    { id: 4, title: "Nadezda Kadysheva", text: "Nadezda Kadysheva blog" },
];

const MusicBlogs = () => {
    return (
        <div className="container py-5">
            <h2>Music Blogs Page</h2>
            <BlogsList data={music} />
        </div>
    );
};

export default MusicBlogs;
