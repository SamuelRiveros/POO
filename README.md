### Pasos iniciales

1. Crear una clase **abstracta** `Criatura` con
    - nombre
    - vida
    - vidaMaxima
    - ataque

    
2. Crear la clase `Heroe` y la clase **abstracta** `Monstruo` y hacerlas descender de `Criatura`
3. Crear tres clases concretas `Orco`, `Goblin` y `Kobold` que desciendan de `Monstruo`, que en su constructor deben llamar a su clase ascendiente con valores específicos que necesita su constructor
4. Crear la clase `Juego` para manejar el flujo del juego:
    - debe tener una propiedad `historial` que es un array que inicializa vacío
    - debe tener un método `loguear` que agregue un mensaje al historial y lo muestre en consola
    - debe loguear cada acción y mensaje relativo al juego (p.ej.: "Atacas a monstruo! Le sacás 8 de vida", "No puedes investigar")
    - debe tener una propiedad `monstruo` que representa el monstruo actual
    - debe tener un método `investigar` que genere un nuevo mostruo aleatorio y lo asigne a `monstruo`
    - debe tener un método `atacar` que permita atacar a `monstruo`
    - debe permitir `investigar` sólo si el monstruo actual no tiene vida
    - debe permitir `atacar` sólo si el monstruo actual tiene vida

### Siguientes pasos:

5. Extraer la lógica de combate en una clase `Combate` y refactorizar el código. `Juego` debería tener `Combate` y delegarle responsabilidades
6. Centralizar las distintas posibles acciones (atacar, investigar) dentro de un único método (p. ej. `ejecutar`) que tome como argumento un string, y ejecute la acción que corresponde.
7. Chequear si el juego está terminado o no (si `Heroe` no tiene vida), e impedir hacer acciones si lo está
8. Permitir reiniciar el juego
9. Agregarle a `Heroe` la propiedad `inventario`, que es un array que inicializa vacio
10. Crear una clase `Item` con `nombre` y el método `utilizar`, dicho método debe tener como parámetro `objetivo` y debe invocar al metodo para sumarle vida al objetivo
11. Agregar a `Heroe` el método `utilizarItem`, que tome como argumento un ítem y llame a su método `utilizar` pasándose a sí mismo como argumento, luego debe eliminar dicho ítem de `inventario`
12. Agregar a `Juego` el método `utilizarItem`, que llame al método `utilizarItem` de `Heroe`
13. Hacer que `investigar` tenga un probabilidad de encontrar un monstruo o una poción y agregarla a `inventario` de `Heroe`
14. Extraer la lógica de inventario en una clase `Inventario`, que permita agregar, utilizar y remover ítems, e imprimir una lista de ítems. Agregar la posibilidad de utlizar y ver ítems como acciones del juego.

