import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp({ title, styles, children }) {
    const history = useHistory();
    return (
        <div>
            <div>
                <div className="nav-bar">
                    <span>
                        <button
                            className="nav-button"
                            onClick={() => history.push("/addstudent")}
                        >Add New Student</button>

                        <button
                            className="nav-button"
                            onClick={() => history.push("/")}
                        >Student Dashbord</button>
                    </span>
                </div>
                <div className="title">{title}</div>
            </div>
            <div className="childred">{children}
                <footer>
                    contact us
                    <div> email : xyz@gmail.com </div>
                    <div> phone : 732*****10</div>
                </footer>
            </div>
        </div>
    );
}