const mysql = require("mysql");
const inquirer = require('inquirer');

const Table = require('cli-table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,


  user: "root",

  password: "banker",
  database: "bamazon_db"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  bamazon();

});
function bamazon() {
  connection.query("SELECT * FROM products", function(err, result) {
    if (err) throw err;
    var table = new Table({
      head: ['ID', 'Product Name', 'Department Name', 'Price']
    });
    for (var i = 0; i < result.length; i++) {
      table.push([result[i].id, result[i].product_name, result[i].department, result[i].price])
    }
    console.log(table.toString());

  });

  customerBuy();
}
function customerBuy() {
  connection.query("SELECT * FROM products", function(err, results) {
    
    inquirer.prompt([{
      name: 'id',
      type: 'input',
      message: 'What is the ID of the product you would like to buy?',
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
    }, {
      name: 'quantity',
      type: 'input',
      message: 'How many do you want order?',
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
     
    }]).then(function(order) {
      var productID = order.id;
      var quantity = order.quantity;
      
      connection.query('SELECT * FROM products WHERE id=' + productID, function(err, res) {
        if (err) throw err;
        if (res[0].stock - quantity >= 0) {
          console.log('Great news! The product is in stock!');
          console.log('Your order for ' + quantity +
            " " + res[0].product_name + ' will be ' + (quantity * res[0].price + ' Thank you for shopping with us!'));
          connection.query('UPDATE products SET stock=? WHERE id=?', [res[0].stock - quantity, productID],
            function(err, bamazon) {
              if (err) throw err;
           
            });


        } else if (res[0].stock_quantity - quantity <= res[0].stock && res[0].stock!== 0) {
          console.log("We can't complete your order because we only have " + res[0].stock + ' in stock, please update your desired amount.');
          bamazon();
        } else {
          console.log("The item is no longer in stock. Check back with us soon!");
          bamazon();
        }
      });

    });
  });
}