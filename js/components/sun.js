import React, {Component} from "react";
class Sun extends Component {

    state = {
        isLoggedIn: true,
    };

    render() {

        return (
            <section className="topBar">
                <div className="sunSection"></div>
                <div className="sunName"></div>
                <div className="sunshine"></div>
            </section>
        )
    }
}

export default Sun;
