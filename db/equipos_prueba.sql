INSERT INTO `equipo` (`nombre`, `grupo`, `anio`, `torneo`) VALUES
('Club Atletico River Plate A.F.A.', 1, 2020, 0),
('Club y Biblioteca Ramon Santamarina (Tandil)', 1, 2020, 0),
('Club Atletico Estudiantes (Olavarria)', 1, 2020, 0),
('Club Atletico Argentino (Saladillo)', 1, 2020, 0),
('Club Estudiantes de La Plata A.F.A.', 2, 2020, 0),
('Club Atletico y Social San Lorenzo (Rauch)', 2, 2020, 0),
('Club Atletico Ayacucho', 2, 2020, 0),
('Club Atletico Belgrano (Vidal)', 2, 2020, 0);

INSERT INTO juega (id_equipoUno, id_equipoDos, id_grupo, anio, torneo) VALUES
(91, 92, 1, 2020, 0),
(93, 94, 1, 2020, 0),
(91, 93, 1, 2020, 0),
(94, 92, 1, 2020, 0),
(91, 94, 1, 2020, 0),
(93, 92, 1, 2020, 0);

INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo) VALUES
(91, 92, 'c', 2020, 0),
(93, 94, 'c', 2020, 0);