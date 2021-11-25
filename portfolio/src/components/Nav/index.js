import React from "react";

function Nav() {
    return (
        <header>
            <h1>
                <a href="/">William Mackie</a>
            </h1>
            <nav>
                <ul>
                    <li>
                        <a href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;