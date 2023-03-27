import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Core/Base";

export default function EditStudent ({user, setUser}) {
    const history = useHistory();
    const [idx, setIdx] = useState("");
    const [name, setName] = useState("");
    const [std, setStd] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");

    const {id} = useParams();

    const selectedStudent = user.find((stu, index) => stu.id === id)

    useEffect (() => {
        setIdx(selectedStudent.id)
        setName(selectedStudent.name)
        setStd(selectedStudent.std)
        setGender(selectedStudent.gender)
        setEmail(selectedStudent.email)
    }, [])

    const updateStudent = () => {
        const editedIndex = user.findIndex(stu => stu.id === id)
        const editedData = {
            id : idx,
            name,
            std,
            gender,
            email
        }
        user[editedIndex] = editedData;
        setUser([...user]);
        history.push("/");
    }

    return(
        <BaseApp
        title = {"EDIT STUDENT"}
        >
            <div>
                <input
                    placeholder="id"
                    value={idx}
                    type="text"
                    onChange={(event) => setIdx(event.target.value)}
                />

                <input
                    placeholder="name"
                    value={name}
                    type="text"
                    onChange={(event) => setName(event.target.value)}
                />

                <input
                    placeholder="std"
                    value={std}
                    type="text"
                    onChange={(event) => setStd(event.target.value)}
                />

                <input
                    placeholder="gender"
                    value={gender}
                    type="text"
                    onChange={(event) => setGender(event.target.value)}
                />

                <input
                    placeholder="email"
                    value={email}
                    type="text"
                    onChange={(event) => setEmail(event.target.value)}
                />

                <button
                onClick={updateStudent}
                > Edit </button>
            </div>
        </BaseApp>
    );
}