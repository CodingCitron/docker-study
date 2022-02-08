CREATE DATABASE docker_fullstack_app WITH ENCODING 'utf8';

\c docker_fullstack_app

CREATE TABLE lists (
    id SERIAL PRIMARY KEY,
    content TEXT
);

