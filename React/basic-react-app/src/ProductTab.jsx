import Product from "./product.jsx";

function ProductTab(){
    // let options = ["hi-tech", "durable","fast"];
    let styles= {
        display: "flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
    }


    return (
        // <>
        // <Product title="phone" price={30000} />
        // <Product title="laptop" price={22000} />
        // <Product title="pen" price={30} />
        // </>

         <div style={styles}>
        <Product title="logitech mx master" idx={0}/>
        <Product title="apple pencil (2nd gen)" idx={1} />
        <Product title="zebronics toad 23" idx={2}/>
        <Product title="petronics toad 23" idx={3} />
        </div>
    );
}

export default ProductTab;