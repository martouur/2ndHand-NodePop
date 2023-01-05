# Nodepop - 2ndHand App


Deploy:

```sh
npm install
```
Load initial data to database:
```
npm run init-db
```

Start the application with:

```sh
npm run start
```
## API Documentation


```
List anuncios:

GET/api/get_anuncios
```json
{
    "results": [
        {
            "nombre": "Bicicleta",
            "venta": true,
            "precio": 230.15,
            "foto": "bici.jpg",
            "tags": [
                "lifestyle",
                "motor"
            ],
            
        },
        {
            "nombre": "Iphone 3GS",
            "venta": false,
            "precio": 50,
            "foto": "iphone.png",
            "tags": [
                "lifestyle",
                "mobile"
            ],
            "__v": 0
        }
    ]
}
```

List tags:

GET /api/get_tags
```json

{
    "results": [
        "lifestyle",
        "motor",
        "mobile"
    ]
}
```

