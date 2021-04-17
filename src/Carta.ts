import {Dish} from "./Dish"
import {DishType} from "./Dish"
import {Ingredient} from "./Ingredient"
import {ingredientType} from "./Ingredient"
import {Menu} from "./Menu"

export class Carta {
    localMenus: Menu[];
    dishes: Dish[];

    /**
     * @param localMenus
     * @param dishes
     */
    constructor(localMenus: Menu[] = [], dishes: Dish[] = []) {
        this.localMenus = localMenus;
        this.dishes = dishes;
        this.generateCarta();
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

    findMenuByName(menu: string){
        const deletion: number = this.localMenus.findIndex(element => element.getName() === menu);
        if(deletion !== -1) {
            return this.localMenus [deletion];
        }
        else {
            console.log("El menú no está en la carta");
        }
    }

    findDishByName(menu: string){
        const deletion: number = this.dishes.findIndex(element => element.getName() === menu);
        if(deletion !== -1) {
            return this.dishes [deletion];
        }
        else {
            console.log("El menú no está en la carta");
        }
    }

    generateCarta(){
        let egg: Ingredient = new Ingredient("EGG", "SPAIN", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 5, proteins: 50, lipids: 25}, 5);
        let potato: Ingredient = new Ingredient("POTATO", "SPAIN", "VERDURAS-HORTALIZAS", {carbohydrates: 45, proteins: 10, lipids: 30}, 1.5);
        let tortilla: Dish = new Dish("TORTILLA", "SECONDCOURSE", [{ingredient: egg, amountInGrams: 50}, {ingredient: potato, amountInGrams: 200}]);

        let milk: Ingredient = new Ingredient("MILK", "SPAIN", "LACTEOS", {carbohydrates: 4.7, proteins: 3.1, lipids: 3.5}, 7);
        let limon: Ingredient = new Ingredient("LEMON", "PORTUGAL", "FRUTAS", {carbohydrates: 12.7, proteins: 0.1, lipids: 0.06}, 8);
        let natilla: Dish = new Dish("NATILLA", "DESSERT", [{ingredient: milk, amountInGrams: 50}, {ingredient: limon, amountInGrams: 200}]);

        let menu1: Menu = new Menu("MENU-CHEF", 9, [tortilla, natilla]);
        this.addNewMenu(menu1);
        this.addNewDish(tortilla);
        this.addNewDish(natilla);
    }
    /**
     * Imprime la carta en un formato fácil de leer y entender para el usuario
     */
    printFullCarta() : string {
        let result: string = `Carta del restaurante:

        Menús del chef:
        `;
        this.localMenus.forEach(element => {
            result += `${element.getName()}     ${element.getMenuPrice()}€
            
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
     * Añade un nuevo menu a la carta
     * @param newMenu Menu que desea añadirse a la carta
     */
    addNewMenu(newMenu: Menu) {
        this.localMenus.push(newMenu);
    }

    /**
     * Añade un nuevo menu a la carta
     * @param newMenu Menu que desea añadirse a la carta
     */
    addNewDish(newDish: Dish) {
        this.dishes.push(newDish);
    }

    /**
     * Elimina un menu de la carta
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
     * Elimina un plato de la carta
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