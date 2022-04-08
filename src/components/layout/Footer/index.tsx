import * as React from 'react'
import { Observer } from 'mobx-react-lite'
import { useIntl } from 'react-intl'
import { Link, NavLink } from 'react-router-dom'

import { Icon } from '@/components/common/Icon'
import { Logo } from '@/components/layout/Logo'

import './index.scss'


export function Footer(): JSX.Element {
    const intl = useIntl()
    const toolbar = (<>
      </>
    )

    return (
        <footer className="footer">
            <div className="container container--large">
                <div className="footer__wrapper">
                    <div className="footer__left">
                        <Link to="/" className="footer-logo">
                            <Logo />
                        </Link>
                        {toolbar}
                    </div>
                    <nav className="footer-nav">
                        <div className="footer-nav__col">
                            <div className="footer-nav__col-title">
                            Product 
                            </div>
                            <ul className="footer-nav__list">
                                <li>
                                    <NavLink to="/donation">
                                        Donation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/CreateEvents">
                                        Create Events
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                    </nav>
                    <div className="footer__right">
                        {toolbar}
                    </div>
                </div>

            </div>
        </footer>
    )
}
