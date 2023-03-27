import React from 'react'
import { useHistory } from 'react-router-dom'
import BaseApp from '../Core/Base';

const WrongPage = () => {
    const history = useHistory();
    return (
        <div className='noPage'>
            <h1> HEY YOU ENTERED WRONG SITE . . . ! 404 ErroR</h1>
            <button
            className='noPage-btn'
            onClick={() => history.push("/")}
            > Student Dashbord
            </button>
        </div>
    )
}

export default WrongPage