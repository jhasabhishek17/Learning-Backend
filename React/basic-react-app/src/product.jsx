// // Conditionals 

// import "./Product.css";

// function Product({title, price, features}) {
//     let isDiscount = price >10000;
//     let styles ={backgroundColor: isDiscount ? "pink": ""};

//     return (
//         // in below code we add stylinh
//         <div className="Product" style ={styles}>
//             <h3>{title}</h3>
//             <h5>Price: {price}</h5>
//             {/* {isDiscount > 10000?<p>"Discount of 5%"</p> : null} */}
//             {isDiscount > 10000 &&<p>Discount of 5%</p>}
//             {/* above both line are same meaning */}
//         </div>

//     );

// }
// export default Product;


// activty code

import "./Product.css";
import Price from "./Price";


function Product({title,idx}) {
    let oldPrice = ["2322","44543","34765","34545"];
    let newPrice = ["2432","42543","343465","334545"];
    let description = [["vjdjmaiu","u wdad"],["adjnad","dkcaod"],["ackm iu","dcacv"],["dadu","uacac"]]
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );
}

export default Product;