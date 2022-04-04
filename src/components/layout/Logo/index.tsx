import * as React from 'react'

import './index.scss'

import { NavLink } from 'react-router-dom'

export function Logo(): JSX.Element {
    return (
        <div className="logo">

            <NavLink to="/">
                <div style={{ "display": "flex" }}>
                    <img className="NavImg" src="https://i.postimg.cc/Lsxrbz02/Logo-2.png" />
                </div>
            </NavLink>
        </div>
    )
}
