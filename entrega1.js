
class ProductManager{

    constructor(){
        this.products=[];
    }
    
    getProducts=()=>{
        console.log(this.products);
        return;
    };

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            id: this.products.length +1,
            title: "producto prueba",
            description:"Este es un producto prueba",
            price:200,
            thumbnail:"Sin imagen",
            code:"abc123",
            stock:25,
            products:[],
        };
        this.products.push(product);

    };

    // addProduct =(productId)=>{
    //     const productIndex = this.products.findIndex((product)=>product.id===productId);
    //     if(productIndex===-1){
    //         console.log("this product does not exist");
    //         return;
    //     };
    // };

}

const productManager = new ProductManager();

productManager.createProduct("boina", "sombrero de epoca", 450, "sin imagen","xyz345", 30)