import React from "react";

class Price extends React.Component {
    render() {
        return (
            <div id="price">
                What's your price range?
                    <input type="number"/>
            </div>
        );
    }
};

export default Price;