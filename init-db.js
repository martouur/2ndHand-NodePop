const readline = require("readline");
const connection = require("./connectMongoose")
const Anuncio = require("../models/Anuncio");


async function main() {
    
    const continuar = await preguntaSiNo("Are you sure you wanna delete this data base? [n]")
    if (!continuar) {
        process.exit();
    }

    await initAnuncio();
    
    
    connection.close();
}

main().catch(err => console.log("An error occurs", err));


async function initAnuncio() {
    
    const result = await Anuncio.deleteMany();
    console.log(`Ad ${result.deletedCount} deleted.`);


    const inserted = await Anuncio.insertMany([
        {nombre: "Bike", venta: true, precio: 230.15, foto: "bici.jpg", tags: ["lifestyle", "motor"]},
        {nombre: "Iphone", venta: false, precio: 50.00, foto: "iphone.jpg", tags: ["lifestyle", "mobile"]}   
    ]);
    console.log(`Ad ${inserted.length} created.`);
  
}


function preguntaSiNo(texto) {

    return new Promise((resolve, reject) => {
        const interface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        interface.question(texto, respuesta => {
            interface.close();
            if (respuesta.toLowerCase() === "yes") {
                resolve(true);
                return;
            }
            resolve(false);
        })
    })
};


