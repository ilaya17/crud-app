import React, { useState } from "react";
import { AddStu } from "./AddStudent";
import BaseApp from "../Core/Base";
import { data } from "../Information/info.js";
import { useHistory } from "react-router-dom";

export default function StudentComponent ({user, setUser}) {

    const history = useHistory();

    //function

    const deleteStudent = (idx) => {
        const modifyList = user.filter((stu, id) => stu.id != idx)
        setUser(modifyList)
    }
    return(
        <BaseApp
        title = "Student Details">
            <div className="stu-content">
                {user.map((student, idx) =>(
                    <div  key = {idx} className="stu-card">
                        <h1>{student.name}</h1>
                        <p>STD :{student.std}</p>
                        <p>GENDER :{student.gender}</p>
                        <p>EMAIL : {student.email}</p>
                        <div className="btn-grp">
                            <button 
                            className="btn edit-btn"
                            onClick={() => history.push(`/edit/${student.id}`)}
                            > Edit </button>

                            <button 
                            className="btn view-btn"
                            onClick={() => history.push(`/user/${idx}`)}
                            > View </button>

                            <button
                            className="btn dlt-btn"
                            onClick={() => deleteStudent(student.id)}
                            > Delete </button>
                        </div>
                    </div>
                ))}
            </div>
        </BaseApp>
    );
}