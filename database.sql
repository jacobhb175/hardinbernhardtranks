CREATE TABLE teams (id INTEGER PRIMARY KEY, name TEXT, letter TEXT, division TEXT, state TEXT, rank INTEGER);
INSERT INTO teams VALUES (1, "Hunter", "A", "JV", "New York", 1200);
SELECT * FROM teams;

CREATE TABLE divisions (id INTEGER PRIMARY KEY, division text);
INSERT INTO divisions VALUES (1, "Varsity");
INSERT INTO divisions VALUES (2, "JV");
INSERT INTO divisions VALUES (3, "MS")
SELECT * FROM divisions;

CREATE TABLE team_divisions (user_id INTEGER PRIMARY KEY, division_id INTEGER PRIMARY KEY);
INSERT INTO team_divisions VALUES (1,2);
SELECT * FROM team_divisions;

CREATE TABLE games (id INTEGER PRIMARY KEY, score1 INTEGER, score2 INTEGER, tournament TEXT)