CREATE DATABASE loja_doce;
use loja_doce;
drop table categorias;

CREATE TABLE categoriascategorias (
`id_categorias` INT NOT NULL AUTO_INCREMENT,
`nome` VARCHAR(45)  NOT NULL,
PRIMARY KEY (`id_categorias`)
);

CREATE TABLE doce (
`id_doces` INT NULL AUTO_INCREMENT,
`nome` VARCHAR(45) NOT NULL,
`id_categorias` INT NOT NULL,
PRIMARY KEY (`id_doces`, `id_categorias`),
INDEX `id_categorias_idx` (`id_categorias` ASC) ,
CONSTRAINT `id_categorias`
FOREIGN KEY (`id_categorias`)
REFERENCES `categorias` (`id_categorias`)
);

SELECT * FROM categorias;

INSERT INTO categorias VALUES(
NULL,
"bolos"
);

INSERT INTO doce VALUES(
NULL,
"bolo de chocolate", 
1
);