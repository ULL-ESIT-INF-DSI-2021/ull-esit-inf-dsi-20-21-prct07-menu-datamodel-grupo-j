# Desarrollo de Sistemas Informáticos

## Práctica 7. Modelo de datos de un sistema que permite el diseño de menús

### Grupo J

### Autores:

* Adrián González Hernández  --> correo: alu0101216775@ull.edu.es
* Andrea Calero Caro         --> correo: alu0101202952@ull.edu.es
* Saúl Pérez García          --> correo: alu0101129785@ull.edu.es

Fecha de entrega: 18-04-2021


### Introducción

Durante el desarrollo de esta práctica se pretende implementar un diseño orientado a objetos del modelo de datos de un sistema de información que permita el diseño de menús para un restaurante. Para ello, se utilizarán además módulos como **Inquirer.js** y **Lowdb** que nos permitirá hacer de esta práctica una aplicación interactiva, que permita al usuario moverse por las distintas opciones dentro de un menú, crear comandas mediante la elección de los distintos menús disponibles así como añadir o quitar platos de los mismos. Si así lo desea, el cliente también podrá consultar información referida a los distintos platos y losingredientes que los componen como los valores nutricionales o el tipo de alimentos predominante en cada plato.

Para enriquecer el código, hará usará TDD para la elaboración de pruebas, y además este estará preparado para documentar con typedoc. En esta ocasión se hará uso de **GitHub actions** que nos va a permitir automatizar, personalizar y ejecutar nuestros flujos de trabajo de desarrollo de software directamente en el repositorio.
Finalmente, en la elaboración de esta entrega se respetarán los **principios SOLID** de diseño orientado a objetos.

### ----------------------------------------------------------------------------------------------------------------

### Clase Ingredient

La calse ingresiente será la encargada de representar los distintos ingredientes que van a conformar los platos, cada ingrediente debe estar catalogado en uno de los grupos de alimentos que se indican a continuación. En nuestro caso cada uno de ellos se encuentran definidos en un `type ingredientType`:

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
  * getName()
  * getLocation()
  * getIngredientGroup()
  * getNutrients()
  * getPricePerKg()

  * setName(newName: string)
  * setPrice(newPrice: number)
  * setNutrients(newNutrients: {carbohydrates: number, proteins: number, lipids: number})

  * print()
```

### ----------------------------------------------------------------------------------------------------------------

### Clase Dish

Los platos de un menú estarán compuestos por ingredientes como los descritos anteriormente. Estos se van a clasificar en cuatro categorías distintas: 

* Entrante 
* Primer plato 
* Segundo plato
* Postre

Cuando un cliente seleccione un plato podrá ver los ingredientes que lo componen, el valor nutricional del plato a partir de la suma de la composición nutricional de los alimentos que componen a dicho plato dependiendo de la cantidad en gramos que se use de cada ingediente para la elaboración. 
Otra información a la que podrá acceder el cliente será el grupo de alimentos predominante, es decir, si un plato está compuesto por cuatro ingedientes y de ellos son verduras, se indicará que ese plato tiene un mayor contenido en verduras.
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
  * getMainIngredientType()
  * getName()
  * getDishType()
  * getIngredients()
  * getDishPrice()

  * setName(newName: string)
  * setDishType(newDishTye: DishType)
  * setIngredients(newIngredients: {ingredient: Ingredient, amountInGrams: number}[] = [])
  * setDishPrice(newDishPrice: number)

  * calculatePrice()
```

### ----------------------------------------------------------------------------------------------------------------

### Clase Carta

El sistema que estamos desarrolando está dirigido a un restaurante y este dispondrá una carta que tendrá una serie de menús predeterminados que hemos definido en el fichero `data.ts` almacenados en `menuArray`. Además, cada cliente podrá confeccionar un menú a su gusto de entre toda la selección de platos disponibles también localizados en `data.ts` dentro de `dishesArray`. Estos menús personalizados pueden tener la cantidad de un mismo platos deseada.

Esta clase dispondrá de los siguientes atributos: 

```
  * @param localMenus
  * @param dishes
  * @function generateCarta() Genera una carta
```

Y también tendrá los siguientes métodos:

```
  * getLocalMenus()
  * getDishes()

  * findMenuByName(menu: string)
  * findDishByName(menu: string)
  * generateCarta()
  * printFullCarta()
  * addNewMenu(newMenu: Menu)
  * addNewDish(newDish: Dish)
  * deleteMenu(menu: Menu)
  * deleteDish(dish: Dish)
```

### ----------------------------------------------------------------------------------------------------------------

### Clase Menu

Esta clase dispondrá de los siguientes atributos: 

```
  * @param name nombre del menú
  * @param menuPrice precio del menú
  * @param dishes platos que componen el menú
  * @function calculateMenuPrice() calcular precio del menu
```

Y también tendrá los siguientes métodos:

```
  * getName()
  * getMenuPrice()
  * getDishes()
  * getMenuComposition()
  * getListGroupIngredients()

  * setName(newName: string)
  * setMenuPrice(newMenuPrice: number)
  * setDishes(newDishes: Dish[] = [])

  * calculateMenuPrice()
  * print()
  * addNewDish(newDish: Dish)
  * deleteDish(dish: Dish)
  * findDishByName(menu: string)
```

### ----------------------------------------------------------------------------------------------------------------

### Clase Comanda

Esta clase dispondrá de los siguientes atributos: 

```
  * @param nameTable numero de la mesa de la comanda
  * @param dishes vector que almacenará los platos
  * @param menus vector que almacenará los menus
  * @param menuAmount cantidad de menus
  * @param isCustomMenu si es true el cliente elegirá un menú personalizado, sino será uno predefinido
```

Y también tendrá los siguientes métodos:

```
getNameTable()
getMenus()
getMenuAmount()
getDishes()

clear()
printCommand()
addNewMenu(newMenu: Menu)
addNewDish(newDish: Dish)
deleteMenu(menu: Menu)
deleteDish(dish: Dish)
findMenuByName(menu: string)
findDishByName(menu: string)
```





    