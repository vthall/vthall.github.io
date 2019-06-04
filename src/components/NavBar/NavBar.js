import React from 'react'

const NavBar = (props) => {
    return (
        <nav>
            <ul>
                <li
                    className={props.view === 'HOME' ? "active" : null}
                    onClick={() => {props.setView('HOME')}}
                    > Home </li>
                <li
                    className={props.view === 'PROJECTS' ? "active" : null}
                    onClick={() => {props.setView('PROJECTS')}}
                > Projects </li>
                <li className={props.view === '' ? "active" : null}> Leadership </li>
                <li className={props.view === '' ? "active" : null}> Community Service </li>
                <li className={props.view === '' ? "active" : null}> Contact Me </li>


            </ul>

        </nav>
    )
}

export default NavBar