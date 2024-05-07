import work1 from "../../images/work1.jpg";
import work2 from "../../images/work2.jpg";
import work3 from "../../images/work3.jpg";
import work4 from "../../images/work4.jpg";
import work5 from "../../images/work5.jpg";
import work6 from "../../images/work6.jpg";
import Gallery from "./Gallery/Gallery";

const data = [
        {image: work1, title: "Card #1", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repellendus ipsam aliquam earum."},
        {image: work2, title: "Card #2", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repellendus ipsam aliquam earum."},
        {image: work3, title: "Card #3", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repellendus ipsam aliquam earum."},
        {image: work4, title: "Card #4", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repellendus ipsam aliquam earum."},
        {image: work5, title: "Card #5", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repellendus ipsam aliquam earum."},
        {image: work6, title: "Card #6", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repellendus ipsam aliquam earum."}
    ];

const Main = () => {
    return (
        <div className="container py-5">
            <Gallery data={data}/>
        </div>
    )
}

export default Main;