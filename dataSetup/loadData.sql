use crm;

CREATE TABLE client(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(50),
    firstContact VARCHAR(50),
    emailType VARCHAR(20),
    sold BOOL,
    owner VARCHAR(50),
    country VARCHAR(50)
) 