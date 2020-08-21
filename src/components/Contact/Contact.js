import React, { Component } from 'react'

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            submitted: false,
            formData: {
                firstName: "",
                lastName: ""
            }
        }
    }

    handleChange = (event) => {
        const formData = { ...this.state.formData }

        formData[event.target.name] = event.target.value

        this.setState({ formData })
    }

    handleSubmit = (event) => {

        event.preventDefault()

        this.setState({
            submitted: true
        })
    }

    resetForm = (event) => {
        this.setState({
            submitted: false,
            formData: {
                firstName: "",
                lastName: ""
            }
        })
    }


    render() {

        if (this.state.submitted) {
            return (
                <div>
                    Form Submitted.
                    <button onClick = {this.resetForm}>Reset Form</button>
                </div>
            )
        }

        return (
            <div className="Contact" >
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={this.state.formData.firstName}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="lasttName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={this.state.formData.lastName}
                            onChange={this.handleChange}
                        />
                    </div>

                    <button>Submit Form</button>
                    <div>
                        {this.state.formData.firstName}
                        <br />
                        {this.state.formData.lastName}
                    </div>
                </form>
            </div>
        )
    }
}

export default Contact