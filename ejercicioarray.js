let objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
];

let arrayProductos =[];

objetos.forEach((objeto)=>{
    let keys = Object.keys(objeto);
    console.log(keys);

    keys.forEach((key)=>{
        if(!arrayProductos.includes(key))arrayProductos.push(key);

    });
});

// let alimentos = Object.keys(objetos);
// console.log (alimentos)

// let cantidad = Object.values(objetos);
// console.log(cantidad)