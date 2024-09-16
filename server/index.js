const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors())

let products = [
  {
    "id": "1",
    "title": "Spiced Mint",
    "price": 10,
    "sale": 0,
    "image": "/images/products/product-1.png"
  },
  {
    "id": "2",
    "title": "Sweet Straweberry",
    "price": 25,
    "sale": 20,
    "image": "/images/products/product-2.png"
  },
  {
    "id": "3",
    "title": "Cool Blueberries",
    "price": 8,
    "sale": 15,
    "image": "/images/products/product-3.png"
  },
  {
    "id": "4",
    "title": "Juicy Lemon",
    "price": 23,
    "sale": 0,
    "image": "/images/products/product-4.png"
  },
  {
    "id": "5",
    "title": "Product name",
    "price": 40,
    "sale": 0,
    "image": "/images/products/product-5.png"
  },
  {
    "id": "6",
    "title": "Fragrant Cinnamon",
    "price":45,
    "sale": 0,
    "image": "/images/products/product-6.png"
  },
  {
    "id": "7",
    "title": "Summer Cherries",
    "price": 75,
    "sale": 13,
    "image": "/images/products/product-7.png"
  },
  {
    "id": "8",
    "title": "Clean Lavander",
    "price": 5,
    "sale": 0,
    "image": "/images/products/product-8.png"
  },


  {
    "id": "9",
    "title": "Spiced Mint",
    "price": 27,
    "sale": 0,
    "image": "/images/products/product-1.png"
  },
  {
    "id": "10",
    "title": "Sweet Straweberry",
    "price": 38,
    "sale": 20,
    "image": "/images/products/product-2.png"
  },
  {
    "id": "11",
    "title": "Cool Blueberries",
    "price": 65,
    "sale": 15,
    "image": "/images/products/product-3.png"
  },
  {
    "id": "12",
    "title": "Juicy Lemon",
    "price": 89,
    "sale": 0,
    "image": "/images/products/product-4.png"
  },
  {
    "id": "13",
    "title": "Product name",
    "price": 13,
    "sale": 0,
    "image": "/images/products/product-5.png"
  },
  {
    "id": "14",
    "title": "Fragrant Cinnamon",
    "price":93,
    "sale": 0,
    "image": "/images/products/product-6.png"
  },
  {
    "id": "15",
    "title": "Summer Cherries",
    "price": 45,
    "sale": 13,
    "image": "/images/products/product-7.png"
  },
  {
    "id": "16",
    "title": "Clean Lavander",
    "price": 34,
    "sale": 0,
    "image": "/images/products/product-8.png"
  }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products/add', (req, res) => {
  const product = {...req.body, id: uuidv4(), price: Number(req.body.price)}

  products.push(product)

  res.json(product);
});

app.get('/products/:id', (req, res) => {

  const productId = req.params.id;
  console.log(productId)

  const product = products.find(p => p.id === productId);
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

app.delete("/products/remove/:id", (req, res) => {
  const productId = req.params.id;

  const product = products.find(p => p.id === productId);

  if (product) {
    products = products.filter(item => item.id !== productId)

    res.json(productId);
  } else {
    res.status(404).send('Product not found');
  }
})


app.put("/products/edit/:id", (req, res) => {
  const productId = req.params.id;

  if(req.body.id){
    delete req.body.id
  }


  let product = products.find(p => p.id === productId);

  if (product) {
    product = {...product, ...req.body};

    products = products.map(item => {
      if(item.id === productId) {
        item = product;
        item.price = Number(product.price);
        item.sale = Number(product.sale);
      }

      return item
    })

    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
