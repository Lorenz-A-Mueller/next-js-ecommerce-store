--  product_id |   product_name   | product_price | product_size |
--         product_desc
-- ------------+------------------+---------------+--------------+
-- -----------------------------
--           1 | Apples           |           199 | kg           |
--  Gala Apples from Austria.
--           2 | Radishes         |           123 | kg           |
--  Radishes from Austria.
--           3 | Bananas          |           224 | kg           |
--  Bananas from South America.
--           4 | Onions           |           111 | kg           |

--           5 | Lettuce          |           101 | piece        |

--           6 | Pineapples       |           251 | piece        |

--           7 | Peanuts          |           259 | bag          |

--           8 | Raspberries      |           299 | package      |

--           9 | Strawberries     |           259 | package      |

--          10 | Blueberries      |           249 | package      |

--          11 | Broccoli         |           189 | piece        |

--          12 | Cabbage          |            99 | piece        |

--          13 | Carrots          |           147 | kg           |

--          14 | Fennel           |           175 | kg           |

--          15 | Butternut Squash |           305 | kg           |

--          16 | Hokkaido Pumpkin |           292 | kg           |

--          17 | Mangos           |           170 | piece        |
--          18 | Mushrooms        |           187 | package      |
--          19 | Papayas          |           204 | piece        |
--          20 | Peaches          |           213 | kg           |
--          21 | Pears            |           159 | kg           |
--          22 | Potatos          |           119 | bag          |
--          23 | Radicchio        |           201 | piece        |
--          24 | Tomatoes         |           197 | kg           |
-- (24 rows)

CREATE TABLE products(
product_id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
product_name varchar NOT NULL,
product_price integer NOT NULL,
product_size varchar NOT NULL,
product_desc varchar(1000) NOT NULL
);

INSERT INTO products
(product_name, product_price, product_size, product_desc)
VALUES

-- (see above)  -> from product_price 4   ' ' as desc
;
-- ******

CREATE TABLE users(
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
user_name varchar(30) NOT NULL,
password varchar(20) NOT NULL,
first_name varchar (20) NOT NULL,
last_name varchar (30) NOT NULL
);

INSERT INTO users
(user_name, password, first_name, last_name)
VALUES
('lorenz.a.mueller@gmail.com', '1234', 'Lorenz', 'Mueller'),
('lorenzarthur91@gmail.com', '4321', 'Lorenz', 'Arthur');

-- ********