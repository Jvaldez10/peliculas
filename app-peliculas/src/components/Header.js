import React from "react";
const Header = (props) => {
    return (
        <header className="app-header">
            <h2 {props.tex}></h2>
        </header>
    );
};
export default Header;