const CreateMessage = () => {


    const [textInput, setTextInput] = useState('');
    const [message, setMessage] = useState([]);

    const userInputHandeler = (e) => {
        setTextInput(e.target.value)
        console.log(e.target.value);
    }

    const submitMessageHandler = (e) => {
        e.preventDefault();
        setMessage([... textInput], message)
    }
    return (
        <form action="">
            <textarea cols="50" rows="5" onChange={userInputHandeler}></textarea>
            <button onClick={submitMessageHandler}>toevoegen</button>

            <h1>{textInput}</h1>
        </form>
    );
}

export default CreateMessage;
