
DELIMITER $$

CREATE PROCEDURE GetByCategory(IN category_name VARCHAR(255))
BEGIN
    SELECT * FROM product WHERE category = category_name;
END $$

DELIMITER ;

DELIMITER $$


drop FUNCTION IF EXISTS getJson;
CREATE FUNCTION getJson() 
RETURNS JSON
DETERMINISTIC
BEGIN
    DECLARE product_data JSON;
    
    SELECT JSON_ARRAYAGG(
               JSON_OBJECT(
                   'id', id,
                   'name', name,
                   'price', price,
                   'category', category
               )
           ) INTO product_data
    FROM product;
    
    RETURN IFNULL(product_data, JSON_ARRAY());
END $$

DELIMITER ;
