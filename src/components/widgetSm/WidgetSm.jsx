import "./widgetSm.css";
import UserImg2 from "./img2.jpg";
import UserImg4 from "./img4.jpg";
import UserImg5 from "./img5.jpg";
import UserImg6 from "./img6.jpg";
import UserImg7 from "./img7.jpg";
import UserImg8 from "./img8.jpg";
import {Visibility} from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src={UserImg6} className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">
                        Anna Keller
                    </span>
                    <span className="widgetSmUserTitle">
                        Software Engineer
                    </span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>           
            </li>
            <li className="widgetSmListItem">
                <img src={UserImg2} className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">
                        Anna Keller
                    </span>
                    <span className="widgetSmUserTitle">
                        Web Developer
                    </span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>           
            </li>
            <li className="widgetSmListItem">
                <img src={UserImg8} className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">
                        Rohit Ramanujan
                    </span>
                    <span className="widgetSmUserTitle">
                        Devops Engineer
                    </span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>           
            </li>
            <li className="widgetSmListItem">
                <img src={UserImg4} className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">
                        Ananya Rathore
                    </span>
                    <span className="widgetSmUserTitle">
                        Software Engineer
                    </span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>           
            </li>
            <li className="widgetSmListItem">
                <img src={UserImg5} className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">
                        Kamlesh Pandey
                    </span>
                    <span className="widgetSmUserTitle">
                        UI Designer
                    </span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>           
            </li>
            <li className="widgetSmListItem">
                <img src={UserImg7} className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">
                        Priyank Verma
                    </span>
                    <span className="widgetSmUserTitle">
                        Senior Web Developer
                    </span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>           
            </li>
        </ul>
    </div>
  )
}
