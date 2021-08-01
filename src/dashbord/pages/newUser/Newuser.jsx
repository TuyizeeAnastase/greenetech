import React from 'react';
import './newUser.css'

export default function Newuser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="john" />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="john Smith" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="john@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+2507885584" />
                </div>
                <div className="newUserItem">
                    <label>Serial number</label>
                    <input type="text" placeholder="RAB 867 M" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="Huye" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                  <div className="newUserGender">
                    <input type="radio" id="male" value="male" />
                    <label for="male">Male</label>
                    <input type="radio" id="female" value="female" />
                    <label for="female">Female</label>
                    <input type="radio" id="other" value="other" />
                    <label for="others">Other</label>
                  </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserBtn">Create</button>
            </form>
        </div>
    )
}
