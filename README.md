# Torneo Suizo Escolar

**30 Santo Domingo · versión 1.2.4**

Aplicación para organizar torneos de ajedrez escolar con sistema suizo: registro por número, sorteo automático, emparejamientos sin repetir rival, tandas según los tableros disponibles, captura de resultados, reloj de tanda con avisos, modo proyector y tabla de posiciones con desempates. Funciona con o sin internet.

## Creada por

**Christian Reyes Guzmán**
Docente del Plantel 30 Santo Domingo
Colegio de Bachilleres de Chiapas

*Hecha por un docente para docentes: organiza un torneo de ajedrez con emparejamientos automáticos en minutos, con o sin internet.*

## Desarrollo

Diseño, pruebas en el aula y criterio docente: Christian Reyes Guzmán.
Programación asistida por inteligencia artificial (Claude, de Anthropic).

## Tecnología

- Aplicación web progresiva (PWA)
- Lenguajes: HTML5, CSS3 y JavaScript
- Datos: localStorage en el dispositivo
- Archivos: JSON (respaldos) y CSV (resultados)
- Emparejamiento: sistema suizo con desempates Buchholz, programado sin librerías externas

## Usar la app

Abre **https://reguchis.github.io/Torneo-Suizo-P30/**

- **Android (Chrome):** menú ⋮ › *Instalar app* o *Agregar a la pantalla principal*.
- **iPhone (Safari):** botón Compartir › *Agregar a inicio*.
- **Computadora (Chrome o Edge):** ícono de instalar en la barra de direcciones.

Ábrela una vez con internet; después funciona sin conexión desde el ícono.

## Privacidad

Los nombres y resultados se guardan solo en el dispositivo de cada docente. Este repositorio contiene únicamente el código de la app. Para pasar un torneo a otro equipo usa *Ajustes › Respaldo*.

## Archivos

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | La aplicación completa |
| `manifest.webmanifest` | Nombre, colores e íconos para instalarla |
| `sw.js` | Guarda la app en el dispositivo para usarla sin internet |
| `icons/` | Íconos para Android, iPhone y navegador |

## Publicar una versión nueva

1. Reemplaza los archivos del repositorio por los de la versión nueva.
2. En `sw.js`, el número de `VERSION` debe ser distinto al anterior.
3. Al abrir la app, aparece el aviso *Hay una versión nueva de la app*; toca **Actualizar**.
