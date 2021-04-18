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
     * @param dishes vector que almacenará los platos
     * @param menus vector que almacenará los menus
     * @param menuAmount cantidad de menus
     * @param isCustomMenu si es true el cliente elegirá un menú personalizado, sino será uno predefinido
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
     * @returns {Menu[]} Retorna la lista de menús
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

    /**
     * Método encargado de borrar de la comanda todos los platos y los menus
     */
    clear(){
        this.menus.forEach(element => {
            element.dishes.forEach(dish => {
               element.deleteDish(dish);
            })
            this.deleteMenu(element);
        });
    }

    /**
     * Imprime la comanda con la orden del cliente
     * @returns comanda con el tipo de menú
     */
    printCommand() : string {
        let result: string = `\n###########  COMANDA  ###########
        `
        if(this.isCustomMenu == false) {
            `Menú:
            
            `;
            this.menus.forEach(element => {
                result += `${element.getName()}    ${element.menuPrice.toFixed(2)}€
                Platos:
                `;
                element.dishes.forEach(dish => {
                result += `${dish.getName()}
                `;
                });
            });
        } else {
            `Menú personalizado:
            
            `;
            this.menus.forEach(element => {
            result += `${element.getName()}     ${element.menuPrice.toFixed(2)}€
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
            console.log("No hay ningún plato en el menú");
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
