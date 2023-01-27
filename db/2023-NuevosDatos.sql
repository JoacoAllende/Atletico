CREATE TABLE noticias (
    id INT(4) NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    cuerpo VARCHAR(14000) NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    fecha VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO noticias (titulo, cuerpo, imagen, fecha) VALUES ('SE PONE EN MARCHA EL XVII TORNEO NACIONAL DE FUTBOL INFANTIL!!', 'El pasado viernes 10 de Enero a las 11hs se realizó una conferencia de prensa en el salón de fiesta del club Atlético Ayacucho, en el cual se lanzó el 17° Torneo Nacional de Fútbol Infantil que estará reservado para las clase 2007 y junto a él, se realizará el Torneo Paralelo para la clase 2009. Cabe mencionar que están confirmadas las presencias de los más prestigiosas instituciones del fútbol de A.F.A. y Nacional de Uruguay. Los esperamos!!', 'Noticia1', '2020-01-12');
INSERT INTO noticias (titulo, cuerpo, imagen, fecha) VALUES ('TRISTE NOTICIA', 'Es difícil incorporar noticias que no quisiéramos compartir y que nos han sorprendido tristemente. El trágico fallecimiento de Nicolás Trabella en estas últimas horas, quien venía entrenando con el plantel 2007, con sus escasos 12 años para jugar el XVII Torneo Nacional de Fútbol Infantil. Sus compañeros y profes están intentando superar el duelo porque hay que continuar. La familia albirroja acompaña a la famila Trabella en este difícil momento.', 'Noticia2', '2020-02-05');
INSERT INTO noticias (titulo, cuerpo, imagen, fecha) VALUES ('SE REALIZÓ EL SORTEO DE ZONAS DEL TORNEO NACIONAL DE FUTBOL INFANTIL!!', 'El pasado 8 de febrero desde las 20hs, se desarrolló el sorteo del Torneo Nacional sub-12 y del Torneo Paralelo sub-10 en nuestro salón que posee nuestra institución, por lo que quedaron definidos los grupos en ambas categorías. En estos días se publicará el cronograma de los partidos con las canchas y horarios correspondientes.', 'Noticia3', '2020-02-08');
INSERT INTO noticias (titulo, cuerpo, imagen, fecha) VALUES ('POSTERGADA LA INAUGURACIÓN!!', 'Debido a inconevientes climáticos, la ceremonia inaugural se reprogramó para el día viernes a las 19:50 hs. Además, se completarán durante el transcurso de la mañana, aquellos partidos que el clima impidió que se realicen.', 'Noticia4', '2020-02-13');
INSERT INTO noticias (titulo, cuerpo, imagen, fecha) VALUES ('INAUGURACIÓN OFICIAL!!', 'Luego de la postergación por el mal clima del pasado jueves, se realizó la ceremonia inaugural con la presencia de los equipos participantes. En la misma se realizó un homenaje a Nicolás, jugador N°3 del equipo anfitrión, quien perdiera la vida en un accidente días atrás. En un acto muy emotivo, por pedido de sus compañeros y decisión de la comisión directiva, se hizo entrega de su camiseta a la familia, ante un interminable aplauso del público presente, la cual será retirada durante la temporada actual.', 'Noticia5', '2020-02-15');
INSERT INTO noticias (titulo, cuerpo, imagen, fecha) VALUES ('VELEZ CAMPEON!!!', 'El Club Atlético Vélez Sarsfield se consagró campeón del XVII Torneo Nacional de Fútbol Infantil - Ciudad de Ayacucho -, tras vencer 2 a 1 en una final pareja, al Club Atĺético Talleres de Córdoba. En cuanto al torneo paralelo categoría 2009, el campeón fue Gimnasia de Tandil, que venció en los penales 5 a 3 a Alumni Azuleño, luego de empatar en 0 en los 60 minutos reglamentarios de la final. Salud campeones!!', 'Noticia6', '2020-02-16');
INSERT INTO noticias (titulo, cuerpo, imagen, fecha) VALUES ('UN AÑO MÁS!!', 'Finalizó el XVII Torneo Nacional de Fútbol Infantil. El Club Atlético Ayacucho agradece a todos aquellos, que de una manera u otra colaboran para que el torneo se realice con total éxito. Agradece también a todos los equipos participantes, haciendo una mensión especial a Talleres de Córdoba, Andes Talleres de Mendoza y Club Nacional de Futbol de Uruguay, por lo gran cantidad de kilómetros recorridos, lo que engrandece nuestro torneo. La comisión directiva se siente orgullosa por el trabajo realizado. Esperamos el año próximo volver a encontrarnos y contar con la presencia de más equipos.', 'Noticia7', '2020-02-16');
INSERT INTO noticias (titulo, cuerpo, imagen, fecha) VALUES ('La previa: antes del torneo', 'El pasado jueves se realizó en las instalaciones de nuestra institución el sorteo para la organización de zonas que difinieron los enfrentamientos. La categoría 2009 luchará para quedarse con la nueva Copa Challenge.', 'Noticia8', '2022-01-29');
INSERT INTO noticias (titulo, cuerpo, imagen, fecha) VALUES ('Arrancó el campeonato', 'Finalizando el martes, alrededor de las 21 hs., arribó a las puertas de la institución del Albirrijo la primer delegación. Luego de varias hora de viaje, se hizo presente Talleres de Córdoba, que un año más nos acompaña en el Torneo Nacional de Fútbol Infantil - Ciudad de Ayacucho.', 'Noticia9', '2022-02-08');

INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Estudiantes de La Plata A.F.A.',1,0,2023); 
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico General Urquiza (Mar del Plata)',1,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Deportivo El Leon (Gral. Madariaga)',1,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Asociacion Atletica Argentinos Juniors A.F.A.',2,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Ateneo Estrada (Ayacucho)',2,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Las Flores',2,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Huracan Madariaga',2,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico San Lorenzo de Almagro A.F.A.',3,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club de Gimnasia y Esgrima de Tandil',3,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Racing Athletic Club (Olavarria)',3,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Talleres (Cordoba) A.F.A.',4,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Ayacucho',4,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Escuela Municipal Azul',4,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Ferroviarios (Balcarce)',4,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Banfield A.F.A.',5,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Sarmiento (Ayacucho)',5,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Chascomus',5,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Racing Futbol Club (Balcarce)',5,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Ferro Carril Oeste A.F.A.',6,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Social y Deportivo Rauch',6,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Independiente (Mar del Plata)',6,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Asociacion Deportiva Atletico Villa Gesell',6,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Independiente (Avellaneda) A.F.A.',7,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Independiente (Tandil)',7,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Ferrocarril Roca (Las Flores)',7,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Deportivo Juventud Unida (Gral. Madariaga)',7,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Velez Sarsfield A.F.A.',8,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Defensores (Ayacucho)',8,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Liniers (Bahia Blanca)',8,0,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Cosme (Gral. Madariaga)',8,0,2023);


INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Ayacucho',1,3,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Asociacion Deportiva Atletico Villa Gesell',1,3,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Deportivo Juventud Unida (Gral. Madariaga)',1,3,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Racing Athletic Club (Olavarria) A',1,3,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Defensores (Ayacucho)',2,3,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Sportivo Mitre (Balcarce)',2,3,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Liniers (Bahia Blanca) A',2,3,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Racing Athletic Club (Olavarria) B',2,3,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Ateneo Estrada (Ayacucho)',3,3,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico General Urquiza (Mar del Plata)',3,3,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Cosme (Gral. Madariaga)',3,3,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club y Biblioteca Ramon Santamarina (Tandil)',3,3,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Sarmiento (Ayacucho)',4,3,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Ferroviarios (Balcarce) A',4,3,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Deportivo El Leon (Gral. Madariaga)',4,3,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Chascomus',5,3,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Ferroviarios (Balcarce) B',5,3,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Liniers (Bahia Blanca) B',5,3,2023);


INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Ayacucho',1,2,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Deportivo El Leon (Gral. Madariaga)',1,2,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Juventud Unida Blanco',1,2,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico y Social San Lorenzo (Rauch)',1,2,2023);


INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Sarmiento (Ayacucho)',1,1,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Independiente (Mar del Plata)',1,1,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Deportivo Juventud Unida (Gral. Madariaga)',1,1,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Las Flores',1,1,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Ayacucho',2,1,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico y Social San Lorenzo (Rauch)',2,1,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Huracan Madariaga',2,1,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Barrio Traut Club (Las Flores)',2,1,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club de Gimnasia y Esgrima de Tandil',3,1,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico General Urquiza (Mar del Plata)',3,1,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Cosme (Gral. Madariaga)',3,1,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Ferrocarril Roca (Las Flores)',3,1,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Independiente (Tandil)',4,1,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Ferroviarios (Balcarce)',4,1,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Deportivo El Leon (Gral. Madariaga)',4,1,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Defensores (Ayacucho)',5,1,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Social y Deportivo Rauch',5,1,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Asociacion Deportiva Atletico Villa Gesell',5,1,2023);



INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Defensores (Ayacucho)',1,4,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Ferroviarios (Balcarce) A',1,4,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Deportivo El Leon (Gral. Madariaga)',1,4,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Las Flores',1,4,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico General Urquiza (Mar del Plata)',2,4,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Ferroviarios (Balcarce) B',2,4,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Cosme (Gral. Madariaga)',2,4,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Atletico Ayacucho',3,4,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Racing Futbol Club (Balcarce)',3,4,2023);
INSERT INTO equipo (nombre, grupo, torneo, anio) VALUES ('Club Deportivo Juventud Unida (Gral. Madariaga)',3,4,2023);