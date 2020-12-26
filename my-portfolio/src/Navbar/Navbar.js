import './Navbar.css'
import React from 'react';


class Navbar extends React.Component {
    render() {
        return (
            <header>
                <div>
                    <ul>
                        <li>
                            <h1 id="header">
                                Junhyung Park
                            </h1>
                        </li>
                        <li><a class="active" href="#projects">Projects</a></li>
                        <li><a href="#bio">Bio</a></li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Navbar;