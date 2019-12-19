import React, {Component} from "react";

class EmptyMenu extends Component {
    render() {

        return (
            <section className="menuWave">
                <div className="menu">
                    <p className="firstText">Your Travel</p>
                    <p className="secondText">Destination</p>
                </div>
                <div className="wave wave1"/>
                <div className="wave wave2"/>
                <div className="wave wave3"/>
                <div className="wave wave4"/>
            </section>
        )
    }
}

export default EmptyMenu;