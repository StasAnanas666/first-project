import { useState, useEffect } from "react";

const Contacts = () => {
    const [user, setUser] = useState({name: "", age: "", email: ""});

    //выполняется для фоновых задач
    //первый аргемент - функция, в которой прописаны действия вызова
    //второй - список зависимостей, от изменения которых срабатывает useEffect
    //при пустом списке зависимостей useEffect сработает один раз при первом рендере компонента
    useEffect(() => {
        document.title = `Hello ${user.name}`;
        console.log("useEffect call");
    }, [user.name])

    function handleNameChange(event) {
        setUser({...user, name: event.target.value});
    }

    function handleAgeChange(event) {
        setUser({...user, age: event.target.value});
    }

    function handleEmailChange(event) {
        setUser({...user, email: event.target.value});
    }

    return (
        <div className="container py-5">
            <h2>Contacts Page</h2>

            <div className="form-group my-2">
                <label className="form-label">Имя: </label>
                <input type="text" className="form-control" value={user.name} onChange={handleNameChange} />
            </div>
            <div className="form-group my-2">
                <label className="form-label">Возраст: </label>
                <input type="number" min={0} className="form-control" value={user.age} onChange={handleAgeChange} />
            </div>
            <div className="form-group my-2">
                <label className="form-label">Email: </label>
                <input type="email" className="form-control" value={user.email} onChange={handleEmailChange} />
            </div>

            <div className="mt-5">
                <h4>Данные пользователя: </h4>
                <p><span className="fw-bold">Имя: </span>{user.name}</p>
                <p><span className="fw-bold">Возраст: </span>{user.age}</p>
                <p><span className="fw-bold">Email: </span>{user.email}</p>
            </div>
        </div>
    );
};

export default Contacts;
