### Pasos iniciales

1. Crear una clase `Criatura` con - CHECK 
    - nombre
    - vida
    - vidaMaxima
    - ataque

    
2. Crear la clase `Heroe` y la clase `Monstruo` y hacerlas descender de `Criatura` - CHECK 
3. Crear tres clases concretas `Orco`, `Goblin` y `Kobold` que desciendan de `Monstruo`, que en su constructor deben llamar a su clase ascendiente con valores específicos que necesita su constructor - CHECK 
4. Crear la clase `Juego` para manejar el flujo del juego: - CHECK
    - debe tener una propiedad `historial` que es un array que inicializa vacío - CHECK
    - debe tener un método `loguear` que agregue un mensaje al historial y lo muestre en consola - CHECK 
    - debe loguear cada acción y mensaje relativo al juego (p.ej.: "Atacas a monstruo! Le sacás 8 de vida", "No puedes investigar") - CHECK
    - debe tener una propiedad `monstruo` que representa el monstruo actual - CHECK
    - debe tener un método `investigar` que genere un nuevo mostruo aleatorio y lo asigne a `monstruo` - CHECK 
    - debe tener un método `atacar` que permita atacar a `monstruo` - CHECK 
    - debe permitir `investigar` sólo si el monstruo actual no tiene vida - CHECK 
    - debe permitir `atacar` sólo si el monstruo actual tiene vida - CHECK 

### Siguientes pasos:

5. Extraer la lógica de combate en una clase `Combate` y refactorizar el código. `Juego` debería tener `Combate` y delegarle responsabilidades - CHECK
6. Centralizar las distintas posibles acciones (atacar, investigar) dentro de un único método (p. ej. `ejecutar`) que tome como argumento un string, y ejecute la acción que corresponde. - CHECKED
7. Chequear si el juego está terminado o no (si `Heroe` no tiene vida), e impedir hacer acciones si lo está - CHECKED
8. Permitir reiniciar el juego - CHECKED
9. Agregarle a `Heroe` la propiedad `inventario`, que es un array que inicializa vacio - CHECKED
10. Crear una clase `Item` con `nombre` y el método `utilizar`, dicho método debe tener como parámetro `objetivo` y debe invocar al metodo para sumarle vida al objetivo -SEMICHECKED
11. Agregar a `Heroe` el método `utilizarItem`, que tome como argumento un ítem y llame a su método `utilizar` pasándose a sí mismo como argumento, luego debe eliminar dicho ítem de `inventario` - SEMICHECKED
12. Agregar a `Juego` el método `utilizarItem`, que llame al método `utilizarItem` de `Heroe`
13. Hacer que `investigar` tenga un probabilidad de encontrar un monstruo o una poción y agregarla a `inventario` de `Heroe`
14. Extraer la lógica de inventario en una clase `Inventario`, que permita agregar, utilizar y remover ítems, e imprimir una lista de ítems. Agregar la posibilidad de utlizar y ver ítems como acciones del juego.