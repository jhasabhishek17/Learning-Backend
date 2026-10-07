// Handling click events

function printHello(event){
    console.log("hello");
    console.log(event); // this event help us to get the object
}

function printBye() {
    console.log("bye");
}
export default function Button () {
    return (
        <div>
            <button onClick={printHello}>Click me</button>
            <p onClick={printBye}>This para is for event demo</p>
            {/* Below code is the example of the handling non click events */}
            <p onMouseOver={printBye}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempore quas porro! Quo odit maiores rem cumque nisi laudantium, ullam iusto in accusamus, excepturi eos, facilis itaque? Hic, quo illo?</p>
        </div>
    );
}
