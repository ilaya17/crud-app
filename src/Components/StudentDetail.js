import React from "react";
import { useParams } from "react-router-dom";
import BaseApp from "../Core/Base";


export function StudentDetail({user}) {
    const {id} = useParams();
    const person = user[id];
    return (
        <BaseApp
            title={"Details"}
        >
            <div className="stu-content">
                <div className="stu-card">
                    <h1>{person.name}</h1>
                    <p>STD :{person.std}</p>
                    <p>GENDER :{person.gender}</p>
                    <p>EMAIL : {person.email}</p>
                </div>
            </div>
        </BaseApp>
    );
}