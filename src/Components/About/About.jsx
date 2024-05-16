import { useState } from "react"; 

const About = () => {
    //переменная состояния count с начальным значением 0 изменяется методом setCount
    const [count, setCount] = useState(0);
    

    return (
        <div className="container py-5">
            <h2>About Page</h2>

            <h3 className="mt-5">Счетчик: {count}</h3>
            <button className="btn btn-primary text-light me-3" onClick={() => setCount(count + 1)}>+1</button>
            <button className="btn btn-danger text-light me-3" onClick={() => setCount(count - 1)}>-1</button>
            <button className="btn btn-info text-light me-3" onClick={() => setCount(count + 10)}>+10</button>
            <button className="btn btn-warning text-light me-3" onClick={() => setCount(count - 10)}>-10</button>
        </div>
    );
}

export default About;