CREATE DATABASE webshop;

USE webshop;

CREATE TABLE Products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    imageUrl VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO Products (name, description, price, imageUrl, createdAt, updatedAt) VALUES
('Vandflaske', 'Vandflaske', 9.99, 'https://placehold.co/400x400', NOW(), NOW()),
('Proteinbar', 'Proteinbar', 19.99, 'https://placehold.co/400x400', NOW(), NOW()),
('EcoGlow', 'EcoGlow', 29.99, 'https://placehold.co/400x400', NOW(), NOW()),
('Træningsmåtte', 'Træningsmåtte', 39.99, 'https://placehold.co/400x400', NOW(), NOW()),
('Økologisk Te', 'Økologisk Te', 49.99, 'https://placehold.co/400x400', NOW(), NOW()),
('SmartHome Kontrolcenter', 'SmartHome Kontrolcenter', 59.99, 'https://placehold.co/400x400', NOW(), NOW()),
('VitaFresh Juicer', 'VitaFresh Juicer', 69.99, 'https://placehold.co/400x400', NOW(), NOW()),
('Tæppe', 'Tæppe', 79.99, 'https://placehold.co/400x400', NOW(), NOW()),
('Duftlys', 'Duftlys', 89.99, 'https://placehold.co/400x400', NOW(), NOW()),
('Mobilcover', 'Mobilcover', 99.99, 'https://placehold.co/400x400', NOW(), NOW());