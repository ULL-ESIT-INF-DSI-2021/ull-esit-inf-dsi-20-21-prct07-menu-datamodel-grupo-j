import {Dish} from "./Dish"
import {ingredientType} from "./Ingredient"
import * as inquirer from 'inquirer';

export class Menu {
    name: string;
    menuPrice: number;
    dishes: Dish []; 
    menus: Menu[];
    menuAmount: number;

    /**
     * Contructor del Menú
     * @param name nombre del menú
     * @param menuPrice precio del menú
     * @param dishes platos que componen el menú
     */
    constructor(name: string, menuPrice: number, dishes: Dish []) {
        this.name = name;
        this.menuPrice = menuPrice;
        this.menuAmount = 1;
        this.menus = [];
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
     * @returns menuAmount, cantidad de menus
     */
      getMenuAmount(){
        return this.menuAmount; 
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

    /**
     * Añade un nuevo menú 
     * @param newMenu Menú que se desea añadir
     */
     addNewMenu(newMenu: Menu) {
        this.menus.push(newMenu);
    }

    /**
     * Añade un nuevo plato
     * @param newDish Plato que se desea añadirse
     */
     addNewDish(newDish: Dish) {
        this.dishes.push(newDish);
    }

    /**
     * Elimina un menu
     * @param menu Menu que desea eliminarse
     */
     deleteMenu(menu: Menu) {
        const deletion: number = this.menus.findIndex(element => element.getName() === menu.getName());
        if(deletion !== -1) {
            this.menus.splice(deletion, 1);
        }
        else {
            console.log("El menú no está en la carta");
        }
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
            console.log("El plato no está en la carta");
        }
    }
}


