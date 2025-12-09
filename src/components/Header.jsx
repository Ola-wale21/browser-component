import {useState} from "react";
import {motion} from "framer-motion"

function Header (props){

const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme (){
        if(darkTheme){
            document.body.classList.add("light-theme");
            setDarkTheme(false);
        } else {
            document.body.classList.remove("light-theme");
            setDarkTheme(true);
        }
    }



    const [clickedButton, setClickedButton] = useState("All");
    const tabs = ["All", "Active", "Inactive"]

    return <div>
         <header>
        <img src="./assets/images/logo.svg"  alt="logo"/>
        <button  onClick={toggleTheme} className="imageState"><img src={darkTheme ? "./assets/images/icon-sun.svg" : "./assets/images/icon-moon.svg"} alt="state-btn" /></button>

    </header>

     <div className="mainSection">
                <h2>Extensions List</h2>
                <div>
                    {tabs.map((tab, index) => {
                        return (
                            <button 
                            key={index}
                            onClick = {() => {
                                setClickedButton(tab);
                                props.setFilter(tab);
                            }}
                            className={clickedButton === tab? "selected-btn" : ""}
                            >
                                <p>{tab}</p>
                                {clickedButton === tab && (
                                    <motion.div 
                                    layoutId="tab-animation"
                                    className="motion-animation"
                            />)
                                }
                                </button>
                        )
                    })}
                </div>
            </div>
    </div>
}
export default Header;


{/* <button onClick={props.all}>All</button>
                    <button onClick={props.active}>Active</button>
                    <button onClick={props.inactive}>Inactive</button> */}

