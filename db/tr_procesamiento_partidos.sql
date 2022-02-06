DROP TRIGGER IF EXISTS tr_actualizar_grupo;
	
DELIMITER | 
CREATE TRIGGER tr_actualizar_grupo
AFTER UPDATE ON juega
FOR EACH ROW
BEGIN
    -- Cuando cargo o actualizo goles de un partido 
	IF (old.golesLocal != new.golesLocal OR old.golesVisitante != new.golesVisitante) THEN
        -- Partidos de grupos
		IF (new.instancia IS NULL OR new.instancia = "iz") THEN
            -- Carga de un nuevo un resultado
			IF (old.golesLocal = -1 AND old.golesVisitante = -1) THEN
				UPDATE equipo SET partidosJugados = partidosJugados + 1 WHERE (id = new.id_equipoUno OR id = new.id_equipoDos);
				UPDATE equipo SET golesAFavor = golesAFavor + new.golesLocal, golesEnContra = golesEnContra + new.golesVisitante, golesEnContraTotal = golesEnContraTotal + new.golesVisitante WHERE id = new.id_equipoUno;
				UPDATE equipo SET golesAFavor = golesAFavor + new.golesVisitante, golesEnContra = golesEnContra + new.golesLocal, golesEnContraTotal = golesEnContraTotal + new.golesLocal WHERE id = new.id_equipoDos;
                -- Gana local
				IF (new.golesLocal > new.golesVisitante) THEN
					UPDATE equipo SET puntos = puntos + 3, partidosGanados = partidosGanados + 1 WHERE id = new.id_equipoUno;
					UPDATE equipo SET partidosPerdidos = partidosPerdidos + 1 WHERE id = new.id_equipoDos;
                -- Empate
				ELSEIF (new.golesLocal = new.golesVisitante) THEN
					UPDATE equipo SET puntos = puntos + 1, partidosEmpatados = partidosEmpatados + 1 WHERE (id = new.id_equipoUno OR id = new.id_equipoDos);
                -- Gana visitante
				ELSEIF (new.golesLocal < new.golesVisitante) THEN
					UPDATE equipo SET puntos = puntos + 3, partidosGanados = partidosGanados + 1 WHERE id = new.id_equipoDos;
					UPDATE equipo SET partidosPerdidos = partidosPerdidos + 1 WHERE id = new.id_equipoUno;
				END IF;
            -- Correción de un resultado
			ELSE
                -- Ganaba local
				IF (old.golesLocal > old.golesVisitante) THEN
                    -- Y empataron
					IF (new.golesLocal = new.golesVisitante) THEN
						UPDATE equipo SET puntos = puntos - 2, partidosGanados = partidosGanados - 1, partidosEmpatados = partidosEmpatados + 1 WHERE id = new.id_equipoUno;
						UPDATE equipo SET puntos = puntos + 1, partidosPerdidos = partidosPerdidos - 1, partidosEmpatados = partidosEmpatados + 1 WHERE id = new.id_equipoDos;
                    -- Y gano visitante
                    ELSEIF (new.golesLocal < new.golesVisitante) THEN
						UPDATE equipo SET puntos = puntos - 3, partidosGanados = partidosGanados - 1, partidosPerdidos = partidosPerdidos + 1 WHERE id = new.id_equipoUno;
						UPDATE equipo SET puntos = puntos + 3, partidosPerdidos = partidosPerdidos - 1, partidosGanados = partidosGanados + 1 WHERE id = new.id_equipoDos;
					END IF;
                -- Era empate
                ELSEIF (old.golesLocal = old.golesVisitante) THEN
                    -- Y gano local
					IF (new.golesLocal > new.golesVisitante) THEN
						UPDATE equipo SET puntos = puntos + 2, partidosGanados = partidosGanados + 1, partidosEmpatados = partidosEmpatados - 1 WHERE id = new.id_equipoUno;
						UPDATE equipo SET puntos = puntos - 1, partidosPerdidos = partidosPerdidos + 1, partidosEmpatados = partidosEmpatados - 1 WHERE id = new.id_equipoDos;
                    -- Y gano visitante
					ELSEIF (new.golesLocal < new.golesVisitante) THEN
						UPDATE equipo SET puntos = puntos - 1, partidosPerdidos = partidosPerdidos + 1, partidosEmpatados = partidosEmpatados - 1 WHERE id = new.id_equipoUno;
						UPDATE equipo SET puntos = puntos + 2, partidosGanados = partidosGanados + 1, partidosEmpatados = partidosEmpatados - 1 WHERE id = new.id_equipoDos;
					END IF;
                -- Ganaba visitante
				ELSEIF (old.golesLocal < old.golesVisitante) THEN
                    -- Y gano local
					IF (new.golesLocal > new.golesVisitante) THEN
						UPDATE equipo SET puntos = puntos + 3, partidosGanados = partidosGanados + 1, partidosPerdidos = partidosPerdidos - 1 WHERE id = new.id_equipoUno;
						UPDATE equipo SET puntos = puntos - 3, partidosPerdidos = partidosPerdidos + 1, partidosGanados = partidosGanados - 1 WHERE id = new.id_equipoDos;
                    -- Y gano visitante
					ELSEIF (new.golesLocal = new.golesVisitante) THEN
						UPDATE equipo SET puntos = puntos + 1, partidosEmpatados = partidosEmpatados + 1, partidosPerdidos = partidosPerdidos - 1 WHERE id = new.id_equipoUno;
						UPDATE equipo SET puntos = puntos - 2, partidosEmpatados = partidosEmpatados + 1, partidosGanados = partidosGanados - 1 WHERE id = new.id_equipoDos;
					END IF;
				END IF;
                -- Actualiza goles todos los casos
				UPDATE equipo SET golesAFavor = golesAFavor - old.golesLocal + new.golesLocal, golesEnContra = golesEnContra - old.golesVisitante + new.golesVisitante, golesEnContraTotal = golesEnContraTotal - old.golesVisitante + new.golesVisitante WHERE id = new.id_equipoUno;
				UPDATE equipo SET golesAFavor = golesAFavor - old.golesVisitante + new.golesVisitante, golesEnContra = golesEnContra - old.golesLocal + new.golesLocal, golesEnContraTotal = golesEnContraTotal - old.golesLocal + new.golesLocal WHERE id = new.id_equipoDos;
			END IF;
			UPDATE equipo SET diferenciaGoles = golesAFavor - golesEnContra WHERE id = new.id_equipoUno;
			UPDATE equipo SET diferenciaGoles = golesAFavor - golesEnContra WHERE id = new.id_equipoDos;
        -- Partidos de copa
        ELSE
            -- Carga de un nuevo resultado
			IF (old.golesLocal = -1 AND old.golesVisitante = -1) THEN
				UPDATE equipo SET golesEnContraTotal = golesEnContraTotal + new.golesVisitante WHERE id = new.id_equipoUno;
				UPDATE equipo SET golesEnContraTotal = golesEnContraTotal + new.golesLocal WHERE id = new.id_equipoDos;
            -- Coreccion de un resultado
			ELSE
				UPDATE equipo SET golesEnContraTotal = golesEnContraTotal - old.golesVisitante + new.golesVisitante WHERE id = new.id_equipoUno;
				UPDATE equipo SET golesEnContraTotal = golesEnContraTotal - old.golesLocal + new.golesLocal WHERE id = new.id_equipoDos;
			END IF;
		END IF;
	END IF;
END
|
DELIMITER ;
