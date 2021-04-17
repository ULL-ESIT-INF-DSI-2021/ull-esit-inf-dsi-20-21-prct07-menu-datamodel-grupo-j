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
     */
    constructor(name: string, menuPrice: number, dishes: Dish []) {
        this.name = name;
        this.menuPrice = menuPrice;
        this.dishes = dishes;
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
    setDishs(newDishes: [] = []): void {
        this.dishes = newDishes;
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
}


