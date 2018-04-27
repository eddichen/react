import React from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {

    goToStore = event => {
        event.preventDefault();
        console.log(this.storeInput.value);
        const storeName = this.storeInput.value.value;
        this.props.history.push(`/store/${storeName}`);
    };

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input 
                    type="text" 
                    ref={(input) => {this.storeInput = input}} 
                    required 
                    placeholder="Store Name" 
                    defaultValue={getFunName()} 
                />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;
