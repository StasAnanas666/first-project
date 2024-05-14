import BlogCard from "./BlogCard/BlogCard";

const BlogsList = (props) => {
    return (
        <div>
            <div className="row d-flex justify-content-between align-items-center mt-4">
                {
                    props.data.map(work => (
                        <BlogCard title={work.title} text={work.text}/>
                    ))
                }
            </div>
        </div>
    )
}

export default BlogsList;