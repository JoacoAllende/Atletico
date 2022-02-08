INSERT INTO equipo 
(nombre,grupo,anio,torneo)
VALUES 
('Club y Biblioteca Ramon Santamarina (Tandil)',1,2021,0),
('Club de Gimnasia y Esgrima de Tandil',1,2021,0),
('Club Ferrocarril Roca (Las Flores)',1,2021,0),
('Racing Futbol Club (Balcarce)',1,2021,0),
('Club Atletico Talleres (Cordoba) A.F.A.',2,2021,0),
('Club Atletico Social y Deportivo Rauch',2,2021,0),
('Cosme (Gral. Madariaga)',2,2021,0),
('Club Atletico Liniers (Bahia Blanca)',2,2021,0),
('Asociacion Atletica Argentinos Juniors A.F.A.',3,2021,0),
('Club Atletico Ayacucho',3,2021,0),
('Club Deportivo Juventud Unida (Gral. Madariaga)',3,2021,0),
('Club Atletico Chascomus',3,2021,0),
('Club Atletico Independiente (Mar del Plata)',4,2021,0),
('Club Sarmiento (Ayacucho)',4,2021,0),
('Club Atletico General Urquiza (Mar del Plata)',4,2021,0),
('Club Independiente (Tandil)',4,2021,0),
('Club Atletico Banfield A.F.A.',5,2021,0),
('Plaza La Tosquera (Azul)',5,2021,0),
('Club Atletico Maipu',5,2021,0),
('Club Defensores (Ayacucho)',5,2021,0),
('Club Atletico Velez Sarsfield A.F.A.',1,2022,0),
('Club Sarmiento (Ayacucho)',1,2022,0),
('Asociacion Deportiva Atletico Villa Gesell',1,2022,0),
('Club Atletico y Social San Lorenzo (Rauch)',1,2022,0),
('Club Atletico Boca Juniors A.F.A.',2,2022,0),
('Club y Biblioteca Ramon Santamarina (Tandil)',2,2022,0),
('Club Deportivo El Leon (Gral. Madariaga)',2,2022,0),
('Club Atletico Empleados de Comercio (Bolivar)',2,2022,0),
('Club Atletico Independiente (Mar del Plata)',3,2022,0),
('Club Defensores (Ayacucho)',3,2022,0),
('Club Deportivo Juventud Unida (Gral. Madariaga)',3,2022,0),
('Club Atletico Las Flores',3,2022,0),
('Club Estudiantes de La Plata A.F.A.',4,2022,0),
('Club Independiente (Tandil)',4,2022,0),
('Cosme (Gral. Madariaga)',4,2022,0),
('Club Atletico Argentino (Saladillo)',4,2022,0),
('Club Atletico Banfield A.F.A.',5,2022,0),
('Club Atletico Ayacucho',5,2022,0),
('Racing Futbol Club (Balcarce)',5,2022,0),
('Club Atletico Chascomus',5,2022,0),
('Club Atletico Talleres (Cordoba) A.F.A.',6,2022,0),
('Club de Gimnasia y Esgrima de Tandil',6,2022,0),
('Club Atletico General Urquiza (Mar del Plata)',6,2022,0),
('Club Atletico Liniers (Bahia Blanca)',6,2022,0),
('Deportivo Villa Gesell Golf Club',1,2021,1),
('Club Ateneo Estrada (Ayacucho)',1,2021,1),
('Club Deportivo El Leon (Gral. Madariaga)',1,2021,1),
('Club Atletico General Urquiza (Mar del Plata)',1,2021,1),
('Club de Gimnasia y Esgrima de Tandil',2,2021,1),
('Club Sarmiento (Ayacucho)',2,2021,1),
('Club Deportivo Juventud Unida (Gral. Madariaga)',2,2021,1),
('Club Atletico Social y Deportivo Rauch',2,2021,1),
('Club Atletico Ayacucho',3,2021,1),
('Club Defensores (Ayacucho)',3,2021,1),
('Club Deportivo Los del Clan (Gral. Madariaga)',3,2021,1),
('Club Atletico y Social San Lorenzo (Rauch)',3,2021,1),
('Club de Gimnasia y Esgrima de Tandil',1,2022,1),
('Club Atletico Ayacucho',1,2022,1),
('Club Deportivo Juventud Unida (Gral. Madariaga)',1,2022,1),
('Club Atletico Liniers (Bahia Blanca)',1,2022,1),
('Club Alumni Azuleño',2,2022,1),
('Club Ateneo Estrada (Ayacucho)',2,2022,1),
('Club Ferrocarril Roca (Las Flores)',2,2022,1),
('Club Atletico Ferroviarios (Balcarce)',2,2022,1),
('Club Atletico Independiente (Mar del Plata)',3,2022,1),
('Club Defensores (Ayacucho)',3,2022,1),
('Deportivo Villa Gesell Golf Club',3,2022,1),
('Club Independiente (Tandil)',4,2022,1),
('Club Sarmiento (Ayacucho)',4,2022,1),
('Club Deportivo El Leon (Gral. Madariaga)',4,2022,1),
('Escuela Municipal de Ayacucho',1,2022,2),
('Deportivo San Jose (Tandil)',1,2022,2),
('Club Deportivo El Leon (Gral. Madariaga)',1,2022,2),
('Juventud Unida Negro',2,2022,2),
('Juventud Unida Blanco',2,2022,2),
('Club El Potrero (Tandil)',2,2022,2);

INSERT INTO goleadores (nombre, apellido, numero, goles, id_equipo) VALUES ('',(SELECT nombre FROM equipo WHERE id = 136),2,2,2);
UPDATE equipo SET nombre = (SELECT apellido FROM goleadores WHERE id = 560) WHERE id = 199;
DELETE FROM equipo WHERE id = 560;

ALTER TABLE juega ADD cancha VARCHAR(4) DEFAULT NULL;

INSERT INTO juega 
(id_equipoUno,id_equipoDos,id_grupo,anio,torneo,dia,cancha)
VALUES
(139,142,1,2021,0,'2022-02-09 12:30:00','CI-1'),
(140,141,1,2021,0,'2022-02-09 12:30:00','CI-2'),
(141,142,1,2021,0,'2022-02-10 13:40:00','CI-2'),
(139,140,1,2021,0,'2022-02-10 18:20:00','CI-2'),
(139,141,1,2021,0,'2022-02-11 13:40:00','CI-1'),
(140,142,1,2021,0,'2022-02-11 13:40:00','CI-2'),
(143,146,2,2021,0,'2022-02-09 17:10:00','CA'),
(144,145,2,2021,0,'2022-02-09 17:10:00','CI-2'),
(145,146,2,2021,0,'2022-02-10 10:40:00','CI-2'),
(143,144,2,2021,0,'2022-02-10 18:20:00','EM'),
(144,146,2,2021,0,'2022-02-11 11:50:00','CI-2'),
(143,145,2,2021,0,'2022-02-11 18:20:00','EM'),
(148,150,3,2021,0,'2022-02-09 16:00:00','CA'),
(147,149,3,2021,0,'2022-02-09 18:20:00','CI-1'),
(149,150,3,2021,0,'2022-02-10 13:40:00','CA'),
(147,148,3,2021,0,'2022-02-10 14:50:00','CA'),
(148,149,3,2021,0,'2022-02-11 19:30:00','EM'),
(147,150,3,2021,0,'2022-02-11 20:40:00','EM'),
(151,152,4,2021,0,'2022-02-09 13:40:00','EM'),
(153,154,4,2021,0,'2022-02-09 17:10:00','CI-1'),
(152,154,4,2021,0,'2022-02-10 17:10:00','EM'),
(151,153,4,2021,0,'2022-02-10 18:20:00','CI-1'),
(152,153,4,2021,0,'2022-02-11 17:10:00','CI-1'),
(151,154,4,2021,0,'2022-02-11 17:10:00','CI-2'),
(155,158,5,2021,0,'2022-02-09 14:50:00','CA'),
(157,158,5,2021,0,'2022-02-10 13:40:00','CI-1'),
(155,156,5,2021,0,'2022-02-10 14:50:00','EM'),
(156,157,5,2021,0,'2022-02-11 10:40:00','CI-2'),
(156,158,5,2021,0,'2022-02-11 16:00:00','CA'),
(155,157,5,2021,0,'2022-02-11 18:20:00','CI-1'),
(161,162,1,2022,0,'2022-02-09 14:50:00','CI-1'),
(159,160,1,2022,0,'2022-02-09 21:10:00','EM'),
(160,162,1,2022,0,'2022-02-10 17:10:00','CI-2'),
(159,161,1,2022,0,'2022-02-10 21:10:00','EM'),
(160,161,1,2022,0,'2022-02-11 13:40:00','EM'),
(159,162,1,2022,0,'2022-02-11 14:50:00','CI-2'),
(164,166,2,2022,0,'2022-02-09 13:40:00','CI-2'),
(163,165,2,2022,0,'2022-02-09 20:00:00','EM'),
(165,166,2,2022,0,'2022-02-10 16:00:00','CI-1'),
(163,164,2,2022,0,'2022-02-10 22:20:00','EM'),
(164,165,2,2022,0,'2022-02-11 16:00:00','CI-1'),
(163,166,2,2022,0,'2022-02-11 18:20:00','CA'),
(168,169,3,2022,0,'2022-02-09 13:40:00','CA'),
(167,170,3,2022,0,'2022-02-09 14:50:00','CI-2'),
(169,170,3,2022,0,'2022-02-10 09:30:00','CI-2'),
(167,168,3,2022,0,'2022-02-10 16:00:00','CI-2'),
(167,169,3,2022,0,'2022-02-11 09:30:00','CI-2'),
(168,170,3,2022,0,'2022-02-11 14:50:00','EM'),
(172,173,4,2022,0,'2022-02-09 16:00:00','CI-1'),
(171,174,4,2022,0,'2022-02-09 17:10:00','EM'),
(173,174,4,2022,0,'2022-02-10 14:50:00','CI-1'),
(171,172,4,2022,0,'2022-02-10 18:20:00','CA'),
(172,174,4,2022,0,'2022-02-11 16:00:00','CI-1'),
(171,173,4,2022,0,'2022-02-11 17:10:00','CA'),
(176,178,5,2022,0,'2022-02-09 14:50:00','EM'),
(175,177,5,2022,0,'2022-02-09 16:00:00','EM'),
(177,178,5,2022,0,'2022-02-10 16:00:00','CA'),
(175,176,5,2022,0,'2022-02-10 17:10:00','CA'),
(175,178,5,2022,0,'2022-02-11 16:00:00','EM'),
(176,177,5,2022,0,'2022-02-11 17:10:00','EM'),
(180,181,6,2022,0,'2022-02-09 13:40:00','CI-1'),
(179,182,6,2022,0,'2022-02-09 18:20:00','CA'),
(179,180,6,2022,0,'2022-02-10 16:00:00','EM'),
(181,182,6,2022,0,'2022-02-10 17:10:00','CI-1'),
(179,181,6,2022,0,'2022-02-11 14:50:00','CI-1'),
(180,182,6,2022,0,'2022-02-11 14:50:00','CI-2'),
(183,184,1,2021,1,'2022-02-09 14:50:00','CI'),
(185,186,1,2021,1,'2022-02-09 18:20:00','CA'),
(183,185,1,2021,1,'2022-02-10 13:40:00','EM'),
(184,186,1,2021,1,'2022-02-10 13:40:00','CA'),
(184,185,1,2021,1,'2022-02-11 13:40:00','CA'),
(183,186,1,2021,1,'2022-02-11 13:40:00','CI'),
(188,189,2,2021,1,'2022-02-09 16:00:00','CA'),
(187,190,2,2021,1,'2022-02-09 18:20:00','CI'),
(188,190,2,2021,1,'2022-02-10 17:10:00','CA'),
(187,189,2,2021,1,'2022-02-10 17:10:00','CI'),
(189,190,2,2021,1,'2022-02-11 09:30:00','CI'),
(187,188,2,2021,1,'2022-02-11 17:10:00','EM'),
(191,193,3,2021,1,'2022-02-09 17:10:00','CA'),
(192,194,3,2021,1,'2022-02-09 18:20:00','EM'),
(193,194,3,2021,1,'2022-02-10 13:40:00','CI'),
(191,192,3,2021,1,'2022-02-10 18:20:00','EM'),
(191,194,3,2021,1,'2022-02-11 16:00:00','CA'),
(192,193,3,2021,1,'2022-02-11 16:00:00','CI'),
(196,197,1,2022,1,'2022-02-09 14:50:00','CA'),
(195,198,1,2022,1,'2022-02-09 17:10:00','CI'),
(195,196,1,2022,1,'2022-02-10 14:50:00','EM'),
(197,198,1,2022,1,'2022-02-10 14:50:00','CA'),
(195,197,1,2022,1,'2022-02-11 18:20:00','EM'),
(196,198,1,2022,1,'2022-02-11 18:20:00','CA'),
(200,201,2,2022,1,'2022-02-09 16:00:00','EM'),
(199,201,2,2022,1,'2022-02-10 17:10:00','EM'),
(200,202,2,2022,1,'2022-02-10 18:20:00','CA'),
(199,202,2,2022,1,'2022-02-11 10:40:00','CI'),
(201,202,2,2022,1,'2022-02-11 14:50:00','CI'),
(199,200,2,2022,1,'2022-02-11 17:10:00','CA'),
(203,205,3,2022,1,'2022-02-09 16:00:00','CI'),
(203,204,3,2022,1,'2022-02-10 14:50:00','CI'),
(204,205,3,2022,1,'2022-02-11 16:00:00','EM'),
(206,208,4,2022,1,'2022-02-09 14:50:00','EM'),
(207,208,4,2022,1,'2022-02-10 16:00:00','CA'),
(206,207,4,2022,1,'2022-02-11 14:50:00','EM');
INSERT INTO juega 
(id_equipoUno,id_equipoDos,instancia,anio,torneo,dia,cancha)
VALUES
(204,207,'iz',2022,1,'2022-02-09 17:10:00','EM'),
(205,206,'iz',2022,1,'2022-02-10 16:00:00','EM'),
(203,208,'iz',2022,1,'2022-02-11 14:50:00','CA');
INSERT INTO juega 
(id_equipoUno,id_equipoDos,id_grupo,anio,torneo,dia,cancha)
VALUES
(209,210,1,2022,2,'2022-02-11 21:50:00','EM'),
(210,211,1,2022,2,'2022-02-12 13:45:00','CA'),
(209,211,1,2022,2,'2022-02-12 18:00:00','CI'),
(212,213,2,2022,2,'2022-02-11 13:00:00','CA'),
(213,214,2,2022,2,'2022-02-12 13:45:00','EM'),
(212,214,2,2022,2,'2022-02-12 18:00:00','CA');
INSERT INTO juega 
(id_equipoUno,id_equipoDos,instancia,anio,torneo,dia,cancha)
VALUES
(211,214,'iz',2022,2,'2022-02-11 18:20:00','CI-2'),
(209,212,'iz',2022,2,'2022-02-12 13:45:00','CI-1'),
(210,213,'iz',2022,2,'2022-02-12 18:00:00','EM');
