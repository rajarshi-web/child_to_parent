import React from "react";

class Child extends React.Component {
    // Function triggered when the form is submitted
    onTrigger = (event) => {
        // Call the parent callback function
        this.props.parentCallback(event.target.myname.value);
        event.preventDefault();
    }
 
    render() {
        return (
            <div>
                <form onSubmit={this.onTrigger}>
                    <input type="text" name="myname" placeholder="Enter Name" />
                    <br></br><br></br>
                    <input type="submit" value="Submit" />
                    <br></br><br></br>
                </form>
            </div>
        )
    }
}
export default Child