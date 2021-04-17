import {Dish} from './Dish'
import {Menu} from './Menu'

export class Command {
    nameTable: number;
    isCustomMenu: boolean = true;
    menus: Menu[];
    dishes: Dish[];
     
    /**
     * Constructor de la comanda
     * @param nameTable numero de la mesa de la comanda
     */
    constructor(nameTable: number) {
        this.nameTable = 0;
        this.dishes = [];
        this.menus = [];
        this.isCustomMenu = true;
    }
    
    /**
     * @returns nameTable, numero de mesa de la comanda
     */
    getNameTable(){
       return this.nameTable; 
    }

    /**
     * @returns {Menu[]} Retorna la lista de platos
     */
    getMenus(): Menu[]{
        return this.menus;
    }

    /**
     * @returns {Dish[]} Retorna la lista de platos
     */
    getDishes(): Dish[]{
        return this.dishes;
    }

    clear(){

    }

    /**
     * Imprime la comanda con la orden del cliente
     * @returns comanda con el tipo de menú
     */
    printCommand() : string {
        let result: string = `Comanda de la mesa ${this.getNameTable()}:
        `

        if(this.isCustomMenu == false) {
            `Menú:
            
            `;
            this.menus.forEach(element => {
                if(element.getMenuAmount())
                    result += `${element.getName()}   x ${element.getMenuAmount()}   ${element.getMenuPrice()}€
                    Platos:
                    `;
                    element.dishes.forEach(dish => {
                    result += `${dish.getName()}
                    `;
                })
            });
        } else {
            `Menú personalizado:
            
            `;
            this.menus.forEach(element => {
            result += `${element.getName()}     ${element.getMenuPrice()}€
                Platos:
                `;
                element.dishes.forEach(dish => {
                    result += `${dish.getName()}
                    `;
                })
            });
        }
        console.log(result);
        return result;
    }

    /**
     * Añade un nuevo menú a la comanda
     * @param newMenu Menú que se desea añadir a la comanda
     */
    addNewMenu(newMenu: Menu) {
        this.menus.push(newMenu);
    }

    /**
     * Añade un nuevo plato a la comanda
     * @param newDish Plato que se desea añadirse a la comanda
     */
     addNewDish(newDish: Dish) {
        this.dishes.push(newDish);
    }

    /**
     * Elimina un menu de la comanda
     * @param menu Menu que desea eliminarse de la comanda
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
     * Elimina un plato de la comanda
     * @param dish Plato que desea eliminarse de la comanda
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

    findMenuByName(menu: string){
        const deletion: number = this.menus.findIndex(element => element.getName() === menu);
        if(deletion !== -1) {
            return this.menus [deletion];
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

}
