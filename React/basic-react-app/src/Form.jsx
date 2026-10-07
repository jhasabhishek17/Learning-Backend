// in this below code we add the handle for form event 
function handleFormSubmit (event){
    event.preventDefault(); //// Prevents the default browser action
    console.log("form was submitted ");
}

export default function Form (){

    return (
        <form>
            <input placeholder="write something " />
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    );
}