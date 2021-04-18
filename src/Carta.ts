import {Dish} from "./Dish"
import {DishType} from "./Dish"
import {Ingredient} from "./Ingredient"
import {ingredientType} from "./Ingredient"
import {Menu} from "./Menu"
import * as Data from "./data"

export class Carta {
    localMenus: Menu[];
    dishes: Dish[];
    name: string;

    /**
     * Constructor
     * @param localMenus
     * @param dishes
     * @function generateCarta() Genera una carta
     */
    constructor(localMenus: Menu[] = [], dishes: Dish[] = [], name: string = "") {
        this.localMenus = localMenus;
        this.dishes = dishes;
        this.name = name;
        this.generateCarta();
    }

    /**
     * @returns name, retorna el nombre de la carta
     */
    getName(): string{
        return this.name;
    }
    
    /**
     * @returns {Menu[]} Retorna la lista de menus
     */
    getLocalMenus(): Menu[] {
        return this.localMenus;
    }

    /**
     * @returns {Dish[]} Retorna la lista de platos
     */
    getDishes(): Dish[] {
        return this.dishes;
    }

    /** Cambia el nombre de la carta
     * @param newName Nuevo nombre de la carta
     */
    setName(newName: string): void {
        this.name = newName;
    }

    /**
     * @function findMenuByName, función que busca un menú
     * @param menu, recibe un menú
     * @return retorna un menú y sino lo encuentra lo indica
     */
    findMenuByName(menu: string){
        const deletion: number = this.localMenus.findIndex(element => element.getName() === menu);
        if(deletion !== -1) {
            return this.localMenus [deletion];
        }
        else {
            console.log("El menú no está en la carta");
        }
    }

    /**
     * @function findDishByName, función que busca un plato
     * @param menu, recibe un menú
     * @return retorna un plato y sino lo encuentra lo indica
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

    /**
     * @function generateCarta, genera una carta a partir de los menús y sus platos
     */
    generateCarta(){
        Data.dishesArray.forEach(element => {
            this.addNewDish(element);
        })

        Data.menuArray.forEach(element => {
            this.addNewMenu(element);
        })

    }
    /**
     * @function printFullCarta, imprime la carta en un formato fácil de leer y entender para el usuario
     */
    printFullCarta() : string {
        let result: string = `Carta del restaurante:

        Menús del chef:
        `;
        this.localMenus.forEach(element => {
            result += `${element.getName()}     ${element.menuPrice.toFixed(2)}€
            
                Platos incluidos:
                `;
                element.dishes.forEach(dish => {
                    result += `${dish.getName()}
                    `;
                })
        });
        return result;
    }

    /**
     * @function addNewMenu, añade un nuevo menu a la carta
     * @param newMenu Menu que desea añadirse a la carta
     */
    addNewMenu(newMenu: Menu) {
        this.localMenus.push(newMenu);
    }

    /**
     * @function addNewDish, añade un nuevo menu a la carta
     * @param newMenu Menu que desea añadirse a la carta
     */
    addNewDish(newDish: Dish) {
        this.dishes.push(newDish);
    }

    /**
     * @function deleteMenu, elimina un menu de la carta
     * @param menu Menu que desea eliminarse de la carta
     */
    deleteMenu(menu: Menu) {
        const deletion: number = this.localMenus.findIndex(element => element.getName() === menu.getName());
        if(deletion !== -1) {
            this.localMenus.splice(deletion, 1);
        }
        else {
            console.log("El menú no está en la carta");
        }
    }

    /**
     * @funtion deleteDish, elimina un plato de la carta
     * @param dish Plato que desea eliminarse de la carta
     */
    deleteDish(dish: Dish) {
        const deletion: number = this.dishes.findIndex(element => element.getName() === dish.getName());
        if(deletion !== -1) {
            this.dishes.splice(deletion, 1);
        }
        else {
            console.log("El plato no está en la carta");
        }
    }
}