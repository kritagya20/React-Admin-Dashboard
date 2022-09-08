import "./newUser.css"

export default function NewUser() {
  return (
    <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder="Evin" />
            </div>
            <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" placeholder="Evin M Koshi" />
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input type="email" placeholder="evin@gmail.com" />
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input type="password" placeholder="password" />
            </div>
            <div className="newUserItem">
                <label>Phone</label>
                <input type="password" placeholder="+1 12345 67989" />
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input type="password" placeholder="password" />
            </div>
            <div className="newUserItem">
                <label>Address</label>
                <input type="password" placeholder="Indore | India" />
            </div>
            <div className="newUserItem">
                <div className="newUserGender">
                    <label>Gender</label>
                    <input type="radio" name="gender" id="male" value="male" />
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female" />
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="other" value="other" />
                    <label for="other">Other</label>
                </div>
            </div>
            <div className="newUserItem">
                <label>Active</label>
                <select name="active" id="active" className="newActiveUser">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="newUserButton">Create</button>
        </form>
    </div>
  )
}
