-- write insert queries to populate the burgers table with at least three entries.

-- Insert a set of records.
INSERT INTO burgers (id, burger_name, devoured, ts) VALUES ('Meat lovers delight', TRUE, CURRENT_TIMESTAMP);
INSERT INTO burgers (id, burger_name, devoured, ts) VALUES ('Veggie Blast', FALSE, CURRENT_TIMESTAMP);
INSERT INTO burgers (id, burger_name, devoured, ts) VALUES ('Shroom it up', TRUE, CURRENT_TIMESTAMP);
INSERT INTO burgers (id, burger_name, devoured, ts) VALUES ('Tofurgy burger', FALSE, CURRENT_TIMESTAMP);