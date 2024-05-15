const allBlogs = {
    sport: [
        { id: 1, title: "Football", text: "Football blog" },
        { id: 2, title: "Basketball", text: "Basketball blog" },
        { id: 3, title: "Swimming", text: "Swimming blog" },
        { id: 4, title: "Hockey", text: "Hockey blog" },
        { id: 5, title: "Tennis", text: "Tennis blog" },
    ],
    music: [
        { id: 1, title: "Arctic Monkeys", text: "Arctic Monkeys blog" },
        { id: 2, title: "Batushka", text: "Batushka blog" },
        { id: 3, title: "Clash", text: "Clash blog" },
        { id: 4, title: "Nadezda Kadysheva", text: "Nadezda Kadysheva blog" },
    ],
    movies: [
        { id: 1, title: "Avengers", text: "Avengers blog" },
        { id: 2, title: "Hobbit", text: "Hobbit blog" },
        { id: 3, title: "Harry Potter", text: "Harry Potter blog" },
        { id: 4, title: "Game of Thrones", text: "Game of Thrones blog" },
    ],
    news: [
        { id: 1, title: "World", text: "World news blog" },
        { id: 2, title: "Politic", text: "Politic blog" },
        { id: 3, title: "Weather", text: "Weather news blog" },
        { id: 4, title: "Hobby", text: "Hobby blog" },
    ],
};

export function getBlogsByType(type) {
    return allBlogs[type];
}
