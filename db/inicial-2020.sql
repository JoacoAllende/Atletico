UPDATE equipo
SET nombre = 'Club Deportivo El Leon (Gral. Madariaga)'
WHERE nombre = 'Club Deportivo El Leon';

UPDATE equipo
SET nombre = 'Club Atletico Jorge Newbery (Maipu)'
WHERE nombre = 'Club Atletico Jorge Newbery';

UPDATE equipo
SET nombre = 'Club Deportivo Juventud Unida (Gral. Madariaga)'
WHERE nombre = 'Club Deportivo Juventud Unida' OR id = 42;

UPDATE equipo
SET nombre = 'Club Estudiantes de La Plata A.F.A.'
WHERE nombre = 'Club Estudiantes de La Plata A.F.A';

UPDATE equipo
SET nombre = 'Club Nacional de Futbol de Uruguay'
WHERE nombre = 'Club Nacional de Futbol (Uruguay)';

UPDATE equipo
SET nombre = 'Club Social y Deportivo El Fortin'
WHERE id = 4 OR id = 29;

UPDATE equipo
SET nombre = 'C.A.F.A. (Moreno)'
WHERE nombre =' C.A.F.A. (Moreno)';

CREATE TABLE usuario (
    id INT(2) AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    contraseña VARCHAR(255) NOT NULL
);

CREATE TABLE contadorVisitas (
    anio INT(4) PRIMARY KEY,
    cont INT(8) DEFAULT '0'
);

INSERT INTO contadorVisitas(anio) VALUES (2020);

DROP TABLE equipoParticipaTorneo;
DROP TABLE sessions;
DROP TABLE usuarios;
DROP TABLE torneo;