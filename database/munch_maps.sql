-- Create the Restaurant table
CREATE TABLE Restaurant (
    RestaurantID INT PRIMARY KEY,
    Name VARCHAR(255),
    Contact_num VARCHAR(15),
    WebLink VARCHAR(255),
    Branch VARCHAR(255),
    CategoryID INT,
    PriceID INT,
    ServiceTypeID INT,
    DistanceID INT,
    Rating_id INT
);

-- Create the Price table
CREATE TABLE Price (
    PriceID INT PRIMARY KEY,
    PriceRange VARCHAR(255)
);

-- Create the Distance table
CREATE TABLE Distance (
   DistanceID INT PRIMARY KEY,
   DistanceRange VARCHAR(255)
);

-- Create the Service table
CREATE TABLE Service (
   ServiceTypeID INT PRIMARY KEY,
   Type VARCHAR(255)
);

-- Create the Rating table
CREATE TABLE Rating (
   Rating_id INT PRIMARY KEY,
   Value DECIMAL(3,2)
);

-- Create the Category table
CREATE TABLE Category (
   CategoryID INT PRIMARY KEY,
   Type VARCHAR(255)
);

INSERT INTO Restaurant (RestaurantID, Name, Contact_num, WebLink, Branch, CategoryID, PriceID, ServiceTypeID, DistanceID, Rating_id)
VALUES
    (1, 'Restaurant A', '123-456-7890', 'www.restaurantA.com', 'Downtown', 1, 2, 1, 1, 4),
    (2, 'Restaurant B', '987-654-3210', 'www.restaurantB.com', 'Suburb', 2, 3, 2, 2, 3);
    -- Add more restaurants here...

-- Insert values into the Price table
INSERT INTO Price (PriceID, PriceRange)
VALUES
    (1, '$'),
    (2, '$$'),
    (3, '$$$');

-- Insert values into the Distance table
INSERT INTO Distance (DistanceID, DistanceRange)
VALUES
    (1, 'Nearby'),
    (2, 'Moderate'),
    (3, 'Far');

-- Insert values into the Service table
INSERT INTO Service (ServiceTypeID, Type)
VALUES
    (1, 'Dine-in'),
    (2, 'Takeout'),
    (3, 'Delivery');

-- Insert values into the Rating table
INSERT INTO Rating (Rating_id, Value)
VALUES
    (1, 4.5),
    (2, 3.8),
    (3, 5.0);

-- Insert values into the Category table
INSERT INTO Category (CategoryID, Type)
VALUES
    (1, 'Italian'),
    (2, 'Chinese'),
    (3, 'Mexican');
