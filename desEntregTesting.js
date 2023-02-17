class ProductManager{
    #profitProduct;//agregado para practicar

    constructor(){
        this.products=[];
        this.#profitProduct = 0.50;//agregado para practicar 
    
    };

    
    getProducts=()=>{
        console.log(this.products);
        return ;     
    };

    addProduct = (title, description, price, thumbnail, code,stock, date)=>{
        const product ={
            id: this.products.length +1,
            title,
            description,
            price: price + this.#profitProduct,
            thumbnail,
            code,
            stock:stock?? 0,
            date: date ?? this.#formatDate(), //PREGUNTAR PORQUE SALE OTRA FECHA DISTINTA A LA DE HOY ???
            // date:date?? new Date,
            codes:[],   
            
            
        };
        this.products.push(product);

        
        
    };

    addCode =(IdProduct, IdCode)=>{
        const productIndex = this.products.findIndex((product)=>product.id===IdProduct);
        

        if (productIndex===-1){
        console.log ("this product does not exist");
        return;
        };

        const codeExists = 
        this.products[productIndex].codes.includes(IdCode)

        if(codeExists){
        console.log ("ERROR - Code has already exist")
        return;
        }
        this.products[productIndex].codes.push(IdCode);


    };

    getProductById=(IdProduct)=>{
        const product = this.products.find((product)=>product.id===IdProduct);

        if(!product){
            console.log("Product not found");
            return;
        }
    }

    #formatDate =()=> {
        const date = new Date ();

        const day =date.getDay();
        const month= date.getMonth();
        const year= date.getFullYear();

        return  `${day}/${month}/${year}`;
    };
}
const productManager = new ProductManager();

productManager.getProducts();

productManager.addProduct("termo", "termo lumilagro",450,"sin imagen", "abc123", 25,"23/10/23" );
productManager.addProduct("termo","termo bosch",800,"sin imagen", "abc125", 15 );
productManager.getProducts();

productManager.addCode(1,1);
productManager.addCode(1,3);
productManager.getProducts();


productManager.addCode(1,1);
productManager.getProducts();

productManager.getProductById("termo", "termo lumilagro",450,"sin imagen", "abc123", 25,"23/10/23" );
productManager.getProducts();