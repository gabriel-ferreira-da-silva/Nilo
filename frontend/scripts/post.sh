 curl -H 'Content-Type: application/json' \
        -d '{ 
                "title": "test product",
                "price": "13.5",
                "description": "lorem ipsum set",
                "image": "https://i.pravatar.cc",
                "category": "electronic"
            }' \
      -X POST \
      https://fakestoreapi.com/products