import Card from "./Card/Card";

const Gallery = (props) => {
    return (
        <div className="container">
            <h2 className="text-center mb-4">Gallery</h2>
            <div className="row d-flex justify-content-between align-items-center">
                {
                    props.data.map(work => (
                        <Card image={work.image} title={work.title} text={work.text}/>
                    ))
                }
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Gallery;