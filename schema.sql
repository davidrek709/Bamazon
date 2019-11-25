
DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  id integer (1) auto_increment not null,
  product_name VARCHAR(45) NOT NULL,
  department VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock DECIMAL(45) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department, price, stock)
VALUES ("Cyber Truck", "Auto-Motive", 39900.99, 3);

INSERT INTO products (product_name, department, price, stock)
VALUES ("Valve Index","Technology", 999.99, 150);

INSERT INTO products (product_name, department, price, stock)
VALUES ("Mac Book Air", "Technology", 679.00, 40);

INSERT INTO products (product_name, department, price, stock)
VALUES ("Fire TV Stick", "Technology", 49.99, 200);

INSERT INTO products (product_name, department, price, stock)
VALUES ("LED Strip", "Technology ", 18.99, 450);

INSERT INTO products (product_name, department, price, stock)
VALUES ("Hydroflask", "Fitness", 39.99, 30);

INSERT INTO products (product_name, department, price, stock)
VALUES ("Baster", "Kitchen", 3.99, 5000);

INSERT INTO products (product_name, department, price, stock)
VALUES ("Lightsaber Chopsticks", "Kitchen", 9.99, 40);

INSERT INTO products (product_name, department, price, stock)
VALUES ("Burrito Trotillas", "Food", 19.99, 1);

INSERT INTO products (product_name, department, price, stock)
VALUES ("Outdoor Tent", "Outdoors", 59.99, 15);
