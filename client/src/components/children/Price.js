import React from "react";

class Price extends React.Component {
    render() {
        return (
            <div id="price">
                What's your price range?
                    <form action>
                      <input type="radio"/> $
                      <input type="radio"/> $$
                      <input type="radio"/> $$$. 
                    </form>
            </div>
        );
    }
};

export default Price;