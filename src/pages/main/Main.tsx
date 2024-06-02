import cl from "./Main.module.css";
import me from "../../assets/me.jpg"
import sun from "../../assets/sun.webp"
import {useState} from "react";

const Main = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    };
    return (
        <div className={cl.main_container}>
            <div className={cl.main_img}>
                <img src={me} alt="me" className={cl.me}/>
                <img src={sun} alt="sun" className={cl.sun} onClick={handleClick}/>
            </div>
            <div className={cl.main_text}>
                <h1>Я еще сплю, но желаю тебе доброго утречка</h1>
                <h1>И хорошего дня</h1>
                <h1>И приятного массажа</h1>
                <h1>И отличного настроения</h1>
            </div>
            <div className={cl.main_touch}>
                {isClicked ? <h1>Ты самая лучшая, солнце!</h1> : <h1>Нажми на Солнце</h1>}
            </div>
        </div>
    );
};

export default Main;