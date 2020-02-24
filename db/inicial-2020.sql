-- UPDATE equipo
-- SET nombre = 'Club Deportivo El Leon (Gral. Madariaga)'
-- WHERE nombre = 'Club Deportivo El Leon';

-- UPDATE equipo
-- SET nombre = 'Club Atletico Jorge Newbery (Maipu)'
-- WHERE nombre = 'Club Atletico Jorge Newbery';

-- UPDATE equipo
-- SET nombre = 'Club Deportivo Juventud Unida (Gral. Madariaga)'
-- WHERE nombre = 'Club Deportivo Juventud Unida' OR id = 42;

-- UPDATE equipo
-- SET nombre = 'Club Estudiantes de La Plata A.F.A.'
-- WHERE nombre = 'Club Estudiantes de La Plata A.F.A';

-- UPDATE equipo
-- SET nombre = 'Club Nacional de Futbol de Uruguay'
-- WHERE nombre = 'Club Nacional de Futbol (Uruguay)';

-- UPDATE equipo
-- SET nombre = 'Club Social y Deportivo El Fortin'
-- WHERE id = 4 OR id = 29;

-- UPDATE equipo
-- SET nombre = 'C.A.F.A. (Moreno)'
-- WHERE nombre =' C.A.F.A. (Moreno)';

-- CREATE TABLE usuario (
--     id INT(2) AUTO_INCREMENT PRIMARY KEY,
--     nombre VARCHAR(50) NOT NULL UNIQUE,
--     contraseña VARCHAR(255) NOT NULL
-- );

-- CREATE TABLE contadorVisitas (
--     anio INT(4) PRIMARY KEY,
--     cont INT(8) DEFAULT '0'
-- );

-- INSERT INTO contadorVisitas(anio) VALUES (2020);

-- DROP TABLE equipoParticipaTorneo;
-- DROP TABLE sessions;
-- DROP TABLE usuarios;
-- DROP TABLE torneo;

-- DROP TABLE contadorVisitas;

-- INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES
-- ('Racing Club de Avellaneda A.F.A.',1,0,2020),
-- ('Club Sarmiento (Ayacucho)',1,0,2020),
-- ('Asociacion Deportiva Atletico Villa Gesell',1,0,2020),
-- ('Club Atletico Quilmes (Mar del Plata)',1,0,2020),
-- ('Club Atletico Banfield A.F.A.',2,0,2020),
-- ('Club Independiente (Tandil)',2,0,2020),
-- ('Club Las Armas',2,0,2020),
-- ('Club Atletico Independiente (Mar del Plata)',2,0,2020),
-- ('Club Nacional de Futbol de Uruguay',3,0,2020),
-- ('Club Atletico Social y Deportivo Rauch',3,0,2020),
-- ('Club Deportivo El Leon (Gral. Madariaga)',3,0,2020),
-- ('Club Atletico Chascomus',3,0,2020),
-- ('Club Atletico River Plate A.F.A.',4,0,2020),
-- ('Andes Talleres Sport Club (Mendoza)',4,0,2020),
-- ('Club Atletico Argentino (Saladillo)',4,0,2020),
-- ('Club Atletico Liniers (Bahia Blanca) B',4,0,2020),
-- ('Club Estudiantes de La Plata A.F.A.',5,0,2020),
-- ('Club Atletico Ayacucho',5,0,2020),
-- ('Club Ferrocarril Roca (Las Flores)',5,0,2020),
-- ('LIFIPA (La Plata)',5,0,2020),
-- ('Club Atlético Talleres (Córdoba) A.F.A.',6,0,2020),
-- ('Club de Gimnasia y Esgrima de Tandil',6,0,2020),
-- ('Racing Futbol Club (Balcarce)',6,0,2020),
-- ('Club Atletico Liniers (Bahia Blanca) A',6,0,2020),
-- ('Club Atletico Velez Sarsfield A.F.A.',7,0,2020),
-- ('Club y Biblioteca Ramon Santamarina (Tandil)',7,0,2020),
-- ('Club Deportivo Juventud Unida (Gral. Madariaga)',7,0,2020),
-- ('Club Atletico San Lorenzo de Almagro A.F.A.',8,0,2020),
-- ('Club Defensores (Ayacucho)',8,0,2020),
-- ('Club Atletico Maipu',8,0,2020),
-- ('Club Atletico Ayacucho',1,1,2020),
-- ('Club de Gimnasia y Esgrima de Tandil',1,1,2020),
-- ('Club Deportivo Juventud Unida (Gral. Madariaga)',1,1,2020),
-- ('Club Atletico Empleados de Comercio (Bolivar)',1,1,2020),
-- ('Club Sarmiento (Ayacucho)',2,1,2020),
-- ('Club Independiente (Tandil)',2,1,2020),
-- ('Club Atletico Liniers (Bahia Blanca) B',2,1,2020),
-- ('Club Atletico Independiente (Mar del Plata)',2,1,2020),
-- ('Club Defensores (Ayacucho)',3,1,2020),
-- ('Club y Biblioteca Ramon Santamarina (Tandil)',3,1,2020),
-- ('Club Deportivo El Leon (Gral. Madariaga)',3,1,2020),
-- ('Racing Futbol Club (Balcarce)',3,1,2020),
-- ('Club Ateneo Estrada (Ayacucho)',4,1,2020),
-- ('Club Atletico Social y Deportivo Rauch',4,1,2020),
-- ('Club Atletico Liniers (Bahia Blanca) A',4,1,2020),
-- ('Club Alumni Azuleño',5,1,2020),
-- ('Club Ferrocarril Roca (Las Flores)',5,1,2020),
-- ('Club Atletico Maipu',5,1,2020);


-- INSERT INTO juega (id_equipoUno, id_equipoDos, id_grupo, anio, torneo, dia) VALUES
-- (91,92,1,2020,0,'2020-02-12 16:20:00'),
-- (93,94,1,2020,0,'2020-02-12 17:30:00'),
-- (91,93,1,2020,0,'2020-02-13 14:00:00'),
-- (92,94,1,2020,0,'2020-02-13 15:10:00'),
-- (91,94,1,2020,0,'2020-02-14 15:10:00'),
-- (92,93,1,2020,0,'2020-02-14 16:20:00'),
-- (95,96,2,2020,0,'2020-02-12 19:50:00'),
-- (96,98,2,2020,0,'2020-02-13 16:20:00'),
-- (95,97,2,2020,0,'2020-02-13 17:30:00'),
-- (97,98,2,2020,0,'2020-02-14 10:00:00'),
-- (96,97,2,2020,0,'2020-02-14 14:00:00'),
-- (95,98,2,2020,0,'2020-02-14 17:30:00'),
-- (99,100,3,2020,0,'2020-02-12 14:00:00'),
-- (101,102,3,2020,0,'2020-02-12 18:40:00'),
-- (100,101,3,2020,0,'2020-02-13 14:00:00'),
-- (99,102,3,2020,0,'2020-02-13 15:10:00'),
-- (100,102,3,2020,0,'2020-02-14 17:30:00'),
-- (99,101,3,2020,0,'2020-02-14 21:00:00'),
-- (104,105,4,2020,0,'2020-02-12 15:10:00'),
-- (103,106,4,2020,0,'2020-02-12 18:40:00'),
-- (105,106,4,2020,0,'2020-02-13 15:10:00'),
-- (103,104,4,2020,0,'2020-02-13 21:15:00'),
-- (103,105,4,2020,0,'2020-02-14 16:20:00'),
-- (104,106,4,2020,0,'2020-02-14 18:40:00'),
-- (108,110,5,2020,0,'2020-02-12 16:20:00'),
-- (107,109,5,2020,0,'2020-02-12 17:30:00'),
-- (108,109,5,2020,0,'2020-02-13 17:30:00'),
-- (107,110,5,2020,0,'2020-02-13 18:40:00'),
-- (109,110,5,2020,0,'2020-02-14 15:10:00'),
-- (107,108,5,2020,0,'2020-02-14 17:30:00'),
-- (112,113,6,2020,0,'2020-02-12 14:00:00'),
-- (111,114,6,2020,0,'2020-02-12 15:10:00'),
-- (112,114,6,2020,0,'2020-02-13 17:30:00'),
-- (111,113,6,2020,0,'2020-02-13 18:40:00'),
-- (113,114,6,2020,0,'2020-02-14 16:20:00'),
-- (111,112,6,2020,0,'2020-02-14 19:50:00'),
-- (116,117,7,2020,0,'2020-02-13 17:30:00'),
-- (115,116,7,2020,0,'2020-02-14 16:20:00'),
-- (115,117,7,2020,0,'2020-02-15 15:10:00'),
-- (119,120,8,2020,0,'2020-02-14 09:00:00'),
-- (118,120,8,2020,0,'2020-02-14 16:20:00'),
-- (118,119,8,2020,0,'2020-02-15 18:40:00');
-- INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo, dia) VALUES
-- (115,118,'iz',2020,0,'2020-02-12 21:00:00'),
-- (119,117,'iz',2020,0,'2020-02-13 14:00:00'),
-- (116,120,'iz',2020,0,'2020-02-14 14:00:00');

-- INSERT INTO juega (id_equipoUno, id_equipoDos, id_grupo, anio, torneo, dia) VALUES
-- (123,124,1,2020,1,'2020-02-12 14:00:00'),
-- (121,122,1,2020,1,'2020-02-12 16:20:00'),
-- (121,124,1,2020,1,'2020-02-13 15:10:00'),
-- (122,123,1,2020,1,'2020-02-13 15:10:00'),
-- (121,123,1,2020,1,'2020-02-14 14:00:00'),
-- (122,124,1,2020,1,'2020-02-14 17:30:00'),
-- (125,126,2,2020,1,'2020-02-12 17:30:00'),
-- (125,127,2,2020,1,'2020-02-13 16:20:00'),
-- (126,128,2,2020,1,'2020-02-13 18:40:00'),
-- (127,128,2,2020,1,'2020-02-14 11:00:00'),
-- (125,128,2,2020,1,'2020-02-14 16:20:00'),
-- (126,127,2,2020,1,'2020-02-14 16:20:00'),
-- (131,132,3,2020,1,'2020-02-12 17:30:00'),
-- (129,130,3,2020,1,'2020-02-13 11:00:00'),
-- (129,132,3,2020,1,'2020-02-13 16:20:00'),
-- (130,131,3,2020,1,'2020-02-13 17:30:00'),
-- (129,131,3,2020,1,'2020-02-14 15:10:00'),
-- (130,132,3,2020,1,'2020-02-14 18:40:00'),
-- (133,134,4,2020,1,'2020-02-12 16:20:00'),
-- (133,135,4,2020,1,'2020-02-13 14:00:00'),
-- (134,135,4,2020,1,'2020-02-14 14:00:00'),
-- (137,138,5,2020,1,'2020-02-13 10:00:00'),
-- (136,137,5,2020,1,'2020-02-13 18:40:00'),
-- (136,138,5,2020,1,'2020-02-14 15:10:00');
-- INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo, dia) VALUES
-- (135,136,'iz',2020,1,'2020-02-12 18:40:00'),
-- (134,138,'iz',2020,1,'2020-02-13 17:30:00'),
-- (133,137,'iz',2020,1,'2020-02-14 17:30:00');
-- UPDATE equipo SET nombre = "Club Atletico y Social San Lorenzo (Rauch)" WHERE id = 130;
UPDATE juega SET dia = '2020-02-12 17:30:00' WHERE id_partido = 244;
UPDATE juega SET dia = '2020-02-13 16:20:00' WHERE id_partido = 245;
UPDATE juega SET dia = '2020-02-14 15:10:00' WHERE id_partido = 246;
-- (116,117,7,2020,0,'2020-02-13 17:30:00'),
-- (115,116,7,2020,0,'2020-02-14 16:20:00'),
-- (115,117,7,2020,0,'2020-02-15 15:10:00'),
update equipo set golesEnContraTotal = 0 where id = 127;
update equipo set golesEnContraTotal = 1 where id = 125;

INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo, dia) VALUES
(91,98,'o',2020,0,'2020-02-15 08:30:00'),
(99,104,'o',2020,0,'2020-02-15 08:30:00'),
(95,93,'o',2020,0,'2020-02-15 10:50:00'),
(103,102,'o',2020,0,'2020-02-15 10:50:00'),
(107,113,'o',2020,0,'2020-02-15 09:40:00'),
(115,120,'o',2020,0,'2020-02-15 09:40:00'),
(111,110,'o',2020,0,'2020-02-15 12:00:00'),
(118,117,'o',2020,0,'2020-02-15 12:00:00');

INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo, dia) VALUES
(131,133,'o',2020,1,'2020-02-15 08:30:00'),
(128,121,'o',2020,1,'2020-02-15 08:30:00'),
(132,134,'o',2020,1,'2020-02-15 09:40:00'),
(122,125,'o',2020,1,'2020-02-15 09:40:00'),
(137,138,'o',2020,1,'2020-02-15 10:50:00'),
(136,124,'o',2020,1,'2020-02-15 10:50:00'),
(135,126,'o',2020,1,'2020-02-15 12:00:00'),
(123,130,'o',2020,1,'2020-02-15 12:00:00');

INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo, dia) VALUES
(114,114,'ccp',2020,0,'2020-02-15 08:30:00'),
(106,108,'ccp',2020,0,'2020-02-15 09:40:00'),
(94,109,'ccp',2020,0,'2020-02-15 10:50:00'),
(119,101,'ccp',2020,0,'2020-02-15 12:00:00');

INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo, dia) VALUES
(131,122,'c',2020,1,'2020-02-15 17:00:00'),
(128,132,'c',2020,1,'2020-02-15 17:00:00');


INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo, dia) VALUES
(91,99,'c',2020,0,'2020-02-15 17:00:00'),
(107,115,'c',2020,0,'2020-02-15 18:10:00');


INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo, dia) VALUES
(137,136,'c',2020,1,'2020-02-15 18:10:00');

INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo, dia) VALUES
(95,103,'c',2020,0,'2020-02-15 19:20:00');

INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo, dia) VALUES
(114,119,'scp',2020,0,'2020-02-15 17:00:00'),
(108,94,'scp',2020,0,'2020-02-15 18:10:00');

INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo, dia) VALUES
(126,123,'c',2020,1,'2020-02-15 18:10:00');

INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo, dia) VALUES
(111,118,'c',2020,0,'2020-02-15 20:30:00');

INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo, dia) VALUES
(91,115,'s',2020,0,'2020-02-16 10:00:00');

INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo, dia) VALUES
(122,123,'s',2020,1,'2020-02-16 10:00:00'),
(132,136,'s',2020,1,'2020-02-16 11:15:00');

INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo, dia) VALUES
(114,94,'fcp',2020,0,'2020-02-15 22:00:00');

INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo, dia) VALUES
(114,119,'scp',2020,0,'2020-02-15 22:00:00');

INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo, dia) VALUES
(103,111,'s',2020,0,'2020-02-16 11:15:00');

INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo, dia) VALUES
(107,118,'7',2020,0,'2020-02-16 14:40:00'),
(99,95,'5',2020,0,'2020-02-16 15:50:00');

INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo, dia) VALUES
(123,132,'t',2020,1,'2020-02-16 16:00:00'),
(122,136,'f',2020,1,'2020-02-16 17:15:00');

INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo, dia) VALUES
(91,103,'t',2020,0,'2020-02-16 17:00:00'),
(115,111,'f',2020,0,'2020-02-16 18:30:00');
