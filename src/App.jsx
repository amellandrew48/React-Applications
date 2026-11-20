import './App.css'
import {useState} from "react";

/*function Testing(props) {// a function that takes an input and uses it in it's output
    return ( // necessary for functions
        <h1>The text is: {props.testinfo.words} {props.testinfo.exclamation}</h1>
    )
}

const message = { //allows for storage of multiple variables/functions that can be swapped out easily
    words: "My message?",
    exclamation: "Get the fuck outta here"
}

const anotherMessage = {
    words: "Hey that's not nice",
    exclamation: "!!!!!!!!!!!!!"
}

function Football() {
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        let fillings = '';
        if (inputs.tomato) fillings += 'tomato';
        if (inputs.onion) {
            if (inputs.tomato) fillings += ' and ';
            fillings += 'onion';
        }
        if (fillings == '') fillings = 'no fillings';
        alert(`${inputs.firstname} wants a burger with ${fillings}`);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>My name is:
                <input
                    type="text"
                    name="firstname"
                    value={inputs.firstname}
                    onChange={handleChange}
                />
            </label>

            <p>I want a burger with:</p>
            <label>Tomato:
                <input
                    type="checkbox"
                    name="tomato"
                    checked={inputs.tomato}
                    onChange={handleChange}
                />
            </label>
            <label>Onion:
                <input
                    type="checkbox"
                    name="onion"
                    checked={inputs.onion}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}*/

function FavoriteColor() {
    const [color, setColor] = useState("red");

    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button
                type="button"
                onClick={() => setColor("blue")}
            >Blue</button>
            <button
                type="button"
                onClick={() => setColor("red")}
            >Red</button>
            <button
                type="button"
                onClick={() => setColor("pink")}
            >Pink</button>
            <button
                type="button"
                onClick={() => setColor("green")}
            >Green</button>
        </>
    );
}

function App() {
    //let choice = useState(true);
    return (
        <div className="App">
            <FavoriteColor />
        </div>

    );
}

export default App;// exports the app function to other files
