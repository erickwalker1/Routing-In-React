import React, { Component } from 'react';
import Display from '../Display/Display'

//import our service
import JeopardyService from "../../JeopardyService";

class Jeopardy extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {},
            score: 0,
            correct: false,
            submit: false,
            dataForm: {
                answer: " ",
            }
        }
    }


    getNewQuestion() {
        return this.client.getQuestion().then((result) => {
            this.setState({
                data: result.data[0],
            });
        });
    }

    //when the component mounts, get a the first question

    componentDidMount() {
        this.getNewQuestion();
    }

    handleChange = (event) => {
        const dataForm = { ...this.state.dataForm };
        dataForm[event.target.name] = event.target.value;
        this.setState({ dataForm });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.checkAnswer();
        this.setState({
            submit: true,
        });
    };
    checkAnswer() {
        if (
            this.state.dataForm.answer.toLowerCase() ===
            this.state.data.answer.toLowerCase()
        ) {
            this.setState((state, props) => ({
                correct: true,
                score: (state.score += this.state.data.value),
            }));
        } else {
            this.setState((state, props) => ({
                correct: false,
                score: (state.score -= this.state.data.value),
            }));
        }
    }
    resetForm = (event) => {
        this.setState({
            submit: false,
            dataForm: {
                answer: "",
            },
        });
        this.getNewQuestion();
    };


    //display the results on the screen
    render() {

        if (this.state.data.category === undefined) {
            return <div>Loading...</div>;
        }

        if (this.state.submit && this.state.correct) {
            return (
                <div>
                    <p>That is correct!</p>
                    <button onClick={this.resetForm}>Next Question</button>
                </div>
            );
        } else if (this.state.submit && this.state.correct === false) {
            return (
                <div>
                    <p>That is incorrect!</p>
                    <button onClick={this.resetForm}>Question</button>
                </div>
            );
        } else {
            console.log(this.state.data);
            console.log(this.state.dataForm.answer);

            const Category = this.state.data.category.title;
            const Value = this.state.data.value;
            const Question = this.state.data.question;

            return (
                <div>
                    <Display
                        category={Category}
                        points={Value}
                        question={Question}
                        currentScore={this.state.score}
                        value={this.state.dataForm.answer}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    />
                </div>
            );
        }
    }
}
// If user input matches or is equal to the data's answer, add point value to state; otherwise subract value from state 
export default Jeopardy;