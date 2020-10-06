USE ulq8yzu6ip3533a6;

CREATE TABLE burgers(
    id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
