const Card = (props) => {
    return (
        <div className="col-sm-12 col-md-4 col-lg-3">
            <div class="card mb-4">
                <img src={props.image} class="card-img-top" alt="" />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">
                        {props.text}
                    </p>
                    <a href="#" class="btn btn-primary">
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    );
};

Card.defaultProps = {
    image: require("../../../../images/gray_square.jpg"),
    title: "Unknown title",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repellendus ipsam aliquam earum."
}

export default Card;
