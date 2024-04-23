-- Insert organizations
INSERT INTO organizations (name) VALUES ('Organization 1'), ('Organization 2');

-- Insert items
INSERT INTO items (type, description) VALUES ('perishable', 'Fresh Fruits'), ('non-perishable', 'Bread');

-- Insert pricing
INSERT INTO pricing (organization_id, item_id, zone, base_distance_in_km, km_price, fix_price) VALUES
(1, 1, 'central', 5, 1.5, 10),
(1, 2, 'central', 5, 1, 10),
(2, 1, 'central', 5, 1.5, 10),
(2, 2, 'central', 5, 1, 10);
