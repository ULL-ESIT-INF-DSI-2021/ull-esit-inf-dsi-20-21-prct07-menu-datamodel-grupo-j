import {Dish} from "./Dish"
import {ingredientType} from "./Ingredient"
import * as inquirer from 'inquirer';

export class Menu {
    name: string;
    menuPrice: number;
    dishes: Dish []; 

    /**
     * Contructor del Menú
     * @param name nombre del menú
     * @param menuPrice precio del menú
     * @param dishes platos que componen el menú
     * @function calculateMenuPrice() calcular precio del menu
     */
    constructor(name: string = "", menuPrice: number = 0, dishes: Dish [] = []) {
        this.name = name;
        this.dishes = dishes;
        this.menuPrice = 0;
        this.calculateMenuPrice();
    }

    /**
     * @returns name, nombre del menu
     */
    getName(): string{
        return this.name;
    }

    /**
     * @returns precio, precio del menú
     */
    getMenuPrice() {
        return this.menuPrice;
    }

    /**
     * @returns platos, platos que lo componen
     */
    getDishes() {
        return this.dishes;
    }

    /**
     * Cambia el nombre del menú
     * @param newName Nuevo nombre del menú
    */
    setName(newName: string): void {
        this.name = newName;
    }

    /**
     * Calcula el precio del menú
     * @param ndishes Vector de tipo Dish que tendrá todos los platos elegidos
     * @return Devuelve el coste total
     */
    calculateMenuPrice(): void{
        this.dishes.forEach(dish => {
            this.menuPrice += dish.dishPrice;  //["ingredient"].getPricePerKg() / 100 * ingredient["amountInGrams"]; // antes /1000
        }); 
        //return this.menuPrice;
    }


    /**
     * Cambia el precio del menú
     * @param newMenuPrice Nuevo precio del menú
    */
    setMenuPrice(newMenuPrice: number): void {
        this.menuPrice = newMenuPrice;
    }

    /**
     * Cambia los platos del menú
     * @param newDishes Nuevos platos del menú
    */
    setDishes(newDishes: Dish[] = []): void {
        this.dishes = newDishes;
    }

    /**
     * @function print, imprime el menú
     */
    print(): void{
        console.log(`${this.getName()}`);
        let aux: Dish[] = Array.from(this.dishes);
        let count: number = 1;
        aux.sort();
        while(aux.length !== 0) {
            while(aux[count] === aux[count - 1]) {
                count++;
                console.log(`${aux[0].getName()}   ${aux[0].getDishPrice().toFixed(2)}€   x${count}`);
                aux.splice(0, count);
            }
        }     
        /*this.aux.forEach(element => {
            console.log(`${element.getName()}   ${element.getDishPrice().toFixed(2)}€   x ${this.dishes.}
            `);
        });*/
    }
    
    /**
     * Getter que devuelve la composición nutricional del menú
     * @returns Composicion Nutricional del menú
     */
    getMenuComposition(): {carbohydrates: number, proteins: number, lipids: number}{
        let cb: number = 0, pt = 0, lp = 0;
        this.dishes.forEach(element => {
            cb += element.getComposition().carbohydrates;
            pt += element.getComposition().proteins;
            lp += element.getComposition().lipids;
        });
        return {carbohydrates: cb, proteins: pt, lipids: lp};
    }

    /**
     * Getter listado de grupo de alimentos por orden del menú
     * @returns listado en orden de aparición de los alimentos
     */
    getListGroupIngredients(): ingredientType[] {
        let result: ingredientType[] = [];
        this.dishes.forEach(dish => {
            dish.ingredients.forEach(ing => {
                let group: ingredientType = ing.ingredient.getIngredientGroup();
                if(!result.includes(group)) result.push(group);
                
            });  
        })
        return result;
    }

    /**
     * Añade un nuevo plato
     * @param newDish Plato que se desea añadirse
     */
     addNewDish(newDish: Dish) {
        this.dishes.push(newDish);
    }

    /**
     * Elimina un plato
     * @param dish Plato que desea eliminarse
     */
    deleteDish(dish: Dish) {
        const deletion: number = this.dishes.findIndex(element => element.getName() === dish.getName());
        if(deletion !== -1) {
            this.dishes.splice(deletion, 1);
        }
        else {
            console.log("No hay ningún plato en el menú");
        }
    }

    /**
     * @function findDishByName, busca un plato
     * @param menu, recibe un menú
     * @return @return retorna un plato y sino lo encuentra lo indica
     */
    findDishByName(menu: string){
        const deletion: number = this.dishes.findIndex(element => element.getName() === menu);
        if(deletion !== -1) {
            return this.dishes [deletion];
        }
        else {
            console.log("El plato no está en la carta");
        }
    }
}


