import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";

export function AddStu({ user, setUser }) {
    const history = useHistory();
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [std, setStd] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");

    const addNewStudent = () => {
        const addStudent = {
            id,
            name,
            std,
            gender,
            email
        }
        setUser([...user, addStudent])
        setId("");
        setName("");
        setStd("");
        setGender("");
        setEmail("");
        history.push("/")
    }
    return (
        <BaseApp
        title = {"ADD A NEW STUDENT"}
        >
            <div>
                <input
                    placeholder="id"
                    value={id}
                    type="text"
                    onChange={(event) => setId(event.target.value)}
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
                    onClick={addNewStudent}
                > Add </button>
            </div>
        </BaseApp>
    );
}