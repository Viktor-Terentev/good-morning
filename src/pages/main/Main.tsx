import cl from "./Main.module.css";
import me from "../../assets/me.jpg"
import sun from "../../assets/sun.webp"
import Touch from "./Touch";

const Main = () => {
    return (
        <div className={cl.main_container}>
            <div className={cl.main_img}>
                <img src={me} alt="me" className={cl.me}/>
                <img src={sun} alt="sun" className={cl.sun}/>
            </div>
            <div className={cl.main_text}>
                <h1>Я еще сплю, но желаю тебе доброго утречка</h1>
            </div>
            <Touch/>
        </div>
    );
};

export default Main;