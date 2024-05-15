import BlogCard from "./BlogCard/BlogCard";

const BlogsList = (props) => {
    return (
        <div>
            <div className="row d-flex justify-content-between align-items-center mt-4">
                {
                    props.data.map(work => (
                        <BlogCard title={work.title} text={work.text} type={props.type} id={work.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default BlogsList;