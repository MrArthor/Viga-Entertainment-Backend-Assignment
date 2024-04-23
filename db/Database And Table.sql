
CREATE TABLE organizations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE pricing (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER REFERENCES organizations(id),
    item_id INTEGER REFERENCES items(id),
    zone VARCHAR(255) NOT NULL,
    base_distance_in_km INTEGER NOT NULL,
    km_price DECIMAL(5,2) NOT NULL,
    fix_price DECIMAL(5,2) NOT NULL
);
