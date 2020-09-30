# Create a RESTful web API using Node, Express and MongoDB

1. ```mkdir backend```

  1.1 ```cd backend```

2. ```npm init```

  2.1 ```entry point: (index.js) server.js```

  2.2 ```touch server.js```

3. ```npm install -g nodemon```

4. ```npm install express --save```

  4.1 ```touch app.js```

5. ```npm install body-parser --save ```

6. ```npm install mongoose --save```

  6.1 ```mkdir models```

  6.2 ```cd models```

  6.3 ```touch mongo.js```

   - Fill this file with your personal database information:
   ```js
   module.exports = function() {
       this.dbName = () => { return 'cluster name'; };
       this.dbUser = () => { return 'username'; };
       this.dbPass = () => { return 'password'; }
   }
   ```

  6.4 ```touch connection.js```

    - Fill this file with the following code:
    ```js
    const mongo = require('./mongo')();
    const mongoose = require('mongoose');

    const connection = mongoose.connect(
      'mongodb+srv://' + dbUser() + ':' + dbPass() + '@' + dbName().toLowerCase() + '.wos9g.mongodb.net/' + dbName() + '?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => {
        console.log('Successfully connected to MongoDB Atlas!');
      })
      .catch(() => {
        console.log('Unable to connect to MongoDB Atlas');
      });

    module.exports = connection;
    ```

  6.5 ```touch Product.js```

   - Fill this file with the following code:
   ```js
   const mongoose = require('mongoose');
   const productSchema = mongoose.Schema({
       name: { type: String, required: true },
       description: { type: String, required: true },
       price: { type: Number, required: true },
       inStock: { type: Boolean, required: true }
   });
   module.exports = mongoose.model('Product', productSchema);
   ```

7. Next steps are up to you:

  - Fix the **CORS** bug

  - Create the routers in order to implement the requested **CRUD**

  - Export the ```app``` module
