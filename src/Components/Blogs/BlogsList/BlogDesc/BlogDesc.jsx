import { useParams } from "react-router-dom";

const BlogDesc = (props) => {
    const params = useParams();
    const blogId = params.id;
    const blog = props.data.find((b) => b.id == blogId);
    if (blog === undefined) {
        return <h2>Блог не найден!</h2>;
    } else {
        return (
            <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="card mb-4">
                    <div className="card-body">
                        <h5 className="card-title">{blog.title}</h5>
                        <p className="card-text">{blog.text}</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default BlogDesc;
