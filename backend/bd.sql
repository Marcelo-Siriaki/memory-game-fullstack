create database memory_game_local;

create table players (
    id serial primary key,
    player text not null,
    records integer not null,
    difficult text not null
);