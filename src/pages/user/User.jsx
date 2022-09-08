import "./user.css"
import userImg2 from "../../components/widgetSm/img2.jpg"
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import { Link } from "react-router-dom"
export default function User() {
  return (
    <div className="user">
      <div className="userTitleContianer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
            <button className="userAddButton">Create</button>     
        </Link> 
      </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src={userImg2} alt="" className="userShowImage" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Evin M Koshi</span>
                        <span className="userShowUserTitle">Civil Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account details</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">Evin77</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">7/7/2000</span>
                    </div>
                    <span className="userShowTitle">Contact details</span>

                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">+1 12345 67890</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">evin@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon"/>
                        <span className="userShowInfoTitle">Indore | India</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder="Evin77" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder="Evin M Koshi" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder="evin@gmail.com" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder="+1 12345 67890" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder="Indore | India" className="userUpdateInput" />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src={userImg2} alt="" className="userUpdateImg"/>
                            <label htmlFor="file"> <Publish className="userUpdateIcon"/> </label>
                            <input type="file" id="file" style={{display:"none"}} />   
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div> 
                </form>
            </div>
        </div>

    </div>
  )
}
