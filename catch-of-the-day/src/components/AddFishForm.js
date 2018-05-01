import React from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {
    static propTypes = {
        addFish: PropTypes.func
    }

    createFish = (event) => {
        event.preventDefault();
        const fish = {
            name: this.nameRef.value,
            price: parseFloat(this.priceRef.value),
            status: this.statusRef.value,
            desc: this.descRef.value,
            image: this.imageRef.value
        }
        this.props.addFish(fish);
        //refresh the form
        event.currentTarget.reset();
    };
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={(nameRef) => {this.nameRef = nameRef}} type="text" placeholder="name" />
                <input name="price" ref={(priceRef) => {this.priceRef = priceRef}} type="text" placeholder="price" />
                <select name="status" ref={(statusRef) => {this.statusRef = statusRef}}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={(descRef) => {this.descRef = descRef}} placeholder="desc"></textarea>
                <input name="image" ref={(imageRef) => {this.imageRef = imageRef}} type="text" placeholder="image" />
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;
