import React from "react";
// Medium Mode ~ Create Display Component That Handles Display Of The Game
function Display(props) {
    return (
        <div className="Display">
            <div>
                <h1>Category</h1>
                <h2 className="Category">{props.category}</h2>

                <h2 className="Points">${props.points}</h2>
                <h2>{props.question}?</h2>
                <h2>Score:${props.currentScore}</h2>

                <form onSubmit={props.handleSubmit}>
                    <div>
                        <label htmlFor="answer"></label>
                        <input
                            className="Align"
                            type="text"
                            name="answer"
                            placeholder="Who is or What is...?"
                            value={props.answer}
                            onChange={props.handleChange}
                        />
                    </div>
                    <button>Submit Answer</button>
                </form>
            </div>
        </div>
    );
}

export default Display;