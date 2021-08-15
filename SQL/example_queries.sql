-- Добавяне на запис в таблица
INSERT INTO notes (note) VALUES ("HELLO");

--Взимане на всички резултати от дадена таблица
SELECT * FROM notes;

--Взимане на конкретен резултат от дадена таблица 
SELECT * FROM notes  WHERE id = 2;

--Изтриване на определен запис от таблица
DELETE FROM notes WHERE id = 2;

--Променяне на стойноста на определена колона за даден запис
UPDATE notes SET note = "НОВА БЕЛЕЖКА" WHERE id = 3;