import Message from "./Message";
const Messagelist = ({name, message}) => {
    return (
        <>
            <Message name={name} message={message}/>
        </>
    );
}

export default Messagelist;