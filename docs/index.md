# Desarrollo de Sistemas Informáticos

## Práctica 7. Modelo de datos de un sistema que permite el diseño de menús



### Grupo J

### Autores:

* Adrián González Hernández  --> correo: alu0101216775@ull.edu.es
* Andrea Calero Caro         --> correo: alu0101202952@ull.edu.es
* Saúl Pérez García          --> correo: alu0101129785@ull.edu.es

Fecha de entrega: 18-04-2021


### Introducción

Durante el desarrollo de esta práctica se pretende implementar un diseño orientado a objetos del modelo de datos de un sistema de información que permita el diseño de menús para un restaurante. Para ello, se utilizarán además módulos como **Inquirer.js** y **Lowdb** que nos permitirá hacer de esta práctica una aplicación interactiva, que posibilite al usuario moverse por las distintas opciones dentro de un menú, crear comandas mediante la elección de los diferentes menús disponibles, así como añadir o quitar platos de los mismos. Si así lo desea, el cliente también podrá consultar información referida a los distintos platos e ingredientes que los componen como los valores nutricionales.

Para enriquecer el código, hará usará TDD para la elaboración de pruebas, y además este estará preparado para documentar con typedoc. En esta ocasión se hará uso de **GitHub actions** que nos va a permitir automatizar, personalizar y ejecutar nuestros flujos de trabajo de desarrollo de software directamente en el repositorio.
Finalmente, en la elaboración de esta entrega se respetarán los **principios SOLID** de diseño orientado a objetos.

### ----------------------------------------------------------------------------------------------------------------

### Clase Ingredient

La clase ingrediente será la encargada de representar los distintos ingredientes que van a conformar los platos. Cada alimento debe estar catalogado en uno de los grupos de alimentos que se indican a continuación. En nuestro caso cada uno de ellos se encuentran definidos en un `type ingredientType`:

* Carnes, pescados, huevos, tofu, frutos secos, semillas y legumbres
* Verduras y hortalizas
* Leche y derivados
* Cereales
* Frutas

Además, cada ingrediente dedeberá proporcionar información referida a sus macronutrientes y kcal por cada 100 gramos de este siendo estos los hidratos de carbono, las proteínas y los lípidos.
También deberá de indicarse el precio del ingrediente por kg en euros así como su nombre y procedencia.

Esta clase dispondrá de los siguientes atributos: 

```
  * @param name Nombre del ingrediente
  * @param location Pais o ciudad de procedencia
  * @param ingredientGroup  Grupo de alimentos
  * @param nutrients Cantidad de nutrientes de cada tipo por cada 100g del alimento
  * @param pricePerKg Precio por kilogramo del alimento 
```

Y también tendrá los siguientes métodos:

```
  * getName() // @returns name, nombre del ingrediente
  * getLocation() // @returns location, localización u origen del ingrediente
  * getIngredientGroup() // @returns ingredientGroup, grupo del ingrediente al que pertenece
  * getNutrients() // @returns nutrients, composición nutricional
  * getPricePerKg() // @return pricePerKg, precio por kilo del ingrediente

  * setName(newName: string) // Cambia el nombre del ingrediente
  * setPrice(newPrice: number) // Cambia el precio del ingrediente
  * setNutrients(newNutrients: {carbohydrates: number, proteins: number, lipids: number})

  * print()
```

Los métodos más destacables de esta clase son `setNutrients` y `print`:

* setNutrients. Cambia la composicion nutricional, de tal forma que cada ingrediente o nuevo ingrediente tenga su composición nutricional en carbohidratos, proteínas y lípidos.
* print. Imprime para cada ingrediente su nombre, grupo de alimento al que pertenece, y sus macronutrientes.

### ----------------------------------------------------------------------------------------------------------------

### Clase Dish

Los platos de un menú estarán compuestos por ingredientes como los descritos anteriormente. Estos se van a clasificar en cuatro categorías distintas: 

* Entrante 
* Primer plato 
* Segundo plato
* Postre

Cuando un cliente seleccione un plato podrá ver los ingredientes que lo componen, el valor nutricional del plato a partir de la suma de la composición nutricional de los alimentos que componen a dicho plato dependiendo de la cantidad en gramos que se use de cada ingediente para la elaboración. 
Finalmente también debe figurar el precio total del plato en euros en función de la suma de los precios de los ingredientes y las cantidades que lo componen.

Esta clase dispondrá de los siguientes atributos: 

```
  * @param name nombre del plato
  * @param dishType tipo del plato
  * @param ingredients ingredientes que componen el plato
  * @param dishPrice precio del plato
  * @function calculatePrice() calcula el precio del plato por el precio y cantidad de ingredientes
```

Y también tendrá los siguientes métodos:

```
  * getComposition() 
  * getName() // @returns name, retorna el nombre del plato
  * getDishType() // @returns dishType, retorna el tipo del plato (entrante, primer plato, ...)
  * getIngredients() // @returns ingredients, retorna el nombre de los ingredientes del plato
  * getDishPrice() // @returns dishPrice, retorna el precio del plato

  * setName(newName: string) // Cambia el nombre del plato
  * setDishType(newDishTye: DishType) // Cambia el tipo del plato
  * setIngredients(newIngredients: {ingredient: Ingredient, amountInGrams: number}[] = []) //Cambia los ingredientes de un plato
  * setDishPrice(newDishPrice: number) // Cambia el precio de los platos

  * calculatePrice() 
```

Los métodos que resaltan de esta clase son `getComposition` y `calculatePrice`:

* getComposition. Calcula para cada ingrediete los valores de la composición de cada nutriente multiplicando su valor base por la cantidad en gramor y a su resultado lo divide por 100 gr.
* calculatePrice. Calcula el precio total del plato en euros en función de la suma de los precios de los ingredientes y las cantidades de estos que componen el plato. La fórmula es sencilla, multiplica el precio del kilo por la cantidad en gramos que se usa en la elaboración del plato

### ----------------------------------------------------------------------------------------------------------------

### Clase Carta

El sistema que estamos desarrollando está dirigido a un restaurante y este dispondrá una carta que tendrá una serie de menús predeterminados que hemos definido en el fichero `data.ts` almacenados en `menuArray`. Además, cada cliente podrá confeccionar un menú a su gusto de entre toda la selección de platos disponibles también localizados en `data.ts` dentro de `dishesArray`. Estos menús personalizados pueden tener la cantidad de un mismo platos deseada.

Esta clase dispondrá de los siguientes atributos: 

```
  * @param localMenus
  * @param dishes
  * @function generateCarta() Genera una carta
```

Y también tendrá los siguientes métodos:

```
  * getName() // @returns name, retorna el nombre de la carta
  * getLocalMenus() // @returns {Menu[]}, retorna la lista de menús
  * getDishes() // @returns {Dish[]}, retorna la lista de platos

  * setName(newName: string) // Cambia el nombre de la carta

  * findMenuByName(menu: string) // Función que busca un menú
  * findDishByName(menu: string) // Función que busca un plato
  * generateCarta() // genera una carta a partir de los menús y sus platos
  * printFullCarta()
  * addNewMenu(newMenu: Menu) // Menu que desea añadirse a la carta
  * addNewDish(newDish: Dish) // Plato que desea añadirse a la carta
  * deleteMenu(menu: Menu) // Elimina un menú de la carta
  * deleteDish(dish: Dish) // Elimina un plato de la carta
```

El método que resalta de esta clase es `printFullCarta`:

* printFullCarta. Recorre los diferentes menús mostrando sus precios y los distintos platos.

### ----------------------------------------------------------------------------------------------------------------

### Clase Menu

Los menús van a estar compuestos por platos, incluyendo un plato de cada categoría (entrante, primer plato, segundo plato y postre). Para cada menú, podrá consultarse la siguiente información:

* Precio total del menú en euros.
* Platos que lo componen con sus correspodientes ingredientes y la composición nutricional.
* Listado de grupos de alimentos por orden de aparición.

Esta clase dispondrá de los siguientes atributos: 

```
  * @param name nombre del menú
  * @param menuPrice precio del menú
  * @param dishes platos que componen el menú
  * @function calculateMenuPrice() calcular precio del menu
```

Y también tendrá los siguientes métodos:

```
  * getName() // @returns name, nombre del menu
  * getMenuPrice() // @returns precio, precio del menú
  * getDishes() // @returns platos, platos que lo componen
  * getMenuComposition() // devuelve la composición nutricional del menú
  * getListGroupIngredients()

  * setName(newName: string) // Cambia el nombre del menú
  * setMenuPrice(newMenuPrice: number) // Cambia el precio del menú
  * setDishes(newDishes: Dish[] = []) // Cambia los platos del menú

  * calculateMenuPrice() // Calcula el precio del menú
  * print() // Imprime el menú
  * addNewDish(newDish: Dish) // Añade un nuevo plato
  * deleteDish(dish: Dish) // Elimina un plato
  * findDishByName(menu: string) // Busca un plato
```

El método que resalta de esta clase es `getListGroupIngredients`:

* getListGroupIngredients. Da un listado ordenado del grupo de alimentos que contiene los platos del menú.

### ----------------------------------------------------------------------------------------------------------------

### Clase Comanda

La clase comanda será la encargada de almacenar la comanda de un nuevo cliente del restaurante, su contenido variará dependiendo del menú escogido.

Para el funcionamiento de la clase Comanda, se hará uso de **Inquirer.js**. De esta forma, es cliente podrá acceder a un menú de selección donde podrá realizar distintas acciones:

* Visualizar la carta del restaurante. Esta funcionalidad permite ver cada menú y cada plato que compone a cualquiera de los menús disponibles y su información correspondiente como comentamos en la `clase Dish`.
* Añadir menús a la comanda: El cliente podrá añadir uno o varios menus a su comanda. Para ello, dispone de varias opciones: Elegir un menú diseñado por el chef, crear un nuevo menú a partir de los menús ya existentes (añadiendo o eliminandole platos), o crear un menú seleccionando los platos desde cero. Toda esta información se irá añadiendo a la comanda hasta que se envie o elimine.
* Añadir platos: Si se desea, se pueden añadir platos individuales a la comanda, sin convertirlos en ningún menu.
* Eliminar elementos de la comanda: Habrá varias funciones que permitan eliminar elementos, ya sean menús completos, platos sueltos, o partes de un menú a la hora de crearlo de forma personalizada.

Esta clase dispondrá de los siguientes atributos: 

```
  * @param nameTable numero de la mesa de la comanda
  * @param dishes vector que almacenará los platos
  * @param menus vector que almacenará los menus
```

Y también tendrá los siguientes métodos:

```
  * getNameTable() // @returns nameTable, numero de mesa de la comanda
  * getMenus() // @returns {Menu[]}, retorna la lista de menús
  * getMenuAmount() //
  * getDishes() // @returns {Dish[]}, retorna la lista de platos

  * clear() // método encargado de borrar de la comanda todos los platos y los menus
  * printCommand()
  * addNewMenu(newMenu: Menu) // Añade un nuevo menú a la comanda
  * addNewDish(newDish: Dish) // Añade un nuevo plato a la comanda
  * deleteMenu(menu: Menu) // Borra un menú de la comanda
  * deleteDish(dish: Dish) // Borra un plato de la comanda
  * findMenuByName(menu: string) // Busca un menú
  * findDishByName(menu: string) // Busca un plato
```
El método que resalta de esta clase es `printCommand`:

* printCommand. Muestra la información de las comandas, separando los menús añadidos hasta el momento de los platos sueltos insertados.

### ---------------------------------------------------------------------------------------------------------------

### Funcionamiento

Para cumplir on el funcionamiento hemos creado el fichero `data.ts` que contiene la información de todos los ingredientes disponibles, los platos de las distintas categorías disponibles y los menús predeterminados que posee el restaurante.

Haciendo uso del módulo **Inquirer.js** para la gestión de una línea de comandos interactiva la aplacación podrá añadir y borrar ingredientes, platos, menús y cartas, logrando además por medio del otro módulo comentado en la introducción, **Lowdb**,  que toda la información introducida persista.

Para el desarrollo de este sistema, se ha creado una interfaz en admin-inquirer.ts. Esta interfaz permite al administrador ir creando diferentes platos, ingredientes, menus o cartas, y almacenarlas en una base de datos con Lowdb. 
Este sistema está diseñado de la forma más amigable posible para el usuario, confirmando algunas acciones, preguntando si se desean añadir más elementos, entre muchas otras opciones.

La base de datos se almacena en el fichero data.json, siguiendo la siguiente estructura:

```json
type dbtype = {
    ingredients: {
        name: string;
        location: string;
        ingredientGroup: ingredientType;
        nutrients: {carbohydrates: number, proteins: number, lipids: number};
        pricePerKg: number;
    }[],
    dishes: {
        name: string;
        dishType: DishType;
        ingredients: {ingredient: Ingredient, amountInGrams: number}[];
        dishPrice: number;
    }[],
    menus: {
        name: string;
        menuPrice: number;
        dishes: Dish [];
    }[],
    cartas: {
        localMenus: Menu[];
        dishes: Dish[];
    }[];
};
```

### ---------------------------------------------------------------------------------------------------------------

### Conclusiones

### ---------------------------------------------------------------------------------------------------------------

### Configuración de GitHub GitHub Pages
El último paso consiste en implementar GitHub Pages desde el repositorio. Para hacerlo, se debe acceder a la sección "settings" en el repositorio en GitHub. Una vez allí, en la zona "GitHub Pages" se debe hacer lo siguiente:
1. Habilitar GitHub pages en el repositorio
2. Seleccionar la rama de trabajo (en este caso, master) y la carpeta raíz (en este caso, /docs, ya que allí se encuentra el archivo index.md) y marcar save
3. Elegir un tema para la página
Una vez hecho, solo queda esperar unos segundos y acceder a la página que aparece para ver la web.

### ---------------------------------------------------------------------------------------------------------------

### Referencias
* [Coveralls](https://coveralls.io)
* [GitHub Actions](https://github.com/features/actions)
* Inquirer.js
*  --> (https://www.npmjs.com/package/inquirer)
*  --> (https://github.com/SBoudrias/Inquirer.js) 
* [Lowdb](https://www.npmjs.com/package/lowdb)







    