import { Link } from "react-router-dom";

const BlogCard = (props) => {
    return (
        <div className="col-sm-12 col-md-4 col-lg-3">
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.text}</p>
                    <Link to="#" class="btn btn-primary">
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    );
};

BlogCard.defaultProps = {
    title: "Unknown title",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repellendus ipsam aliquam earum.",
};

export default BlogCard;
