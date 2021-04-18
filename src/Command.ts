import {Dish} from './Dish'
import {Menu} from './Menu'

export class Command {
    nameTable: number;
    //isCustomMenu: boolean = true;
    menus: Menu[];
    dishes: Dish[];
     
    /**
     * Constructor de la comanda
     * @param nameTable numero de la mesa de la comanda
     * @param dishes vector que almacenará los platos
     * @param menus vector que almacenará los menus
     * @param menuAmount cantidad de menus
     */
    constructor(nameTable: number = 0) {
        this.nameTable = nameTable;
        this.dishes = [];
        this.menus = [];
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
     * @function clear, método encargado de borrar de la comanda todos los platos y los menus
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
        let result: string = "\n###########  COMANDA  ###########\n";

        if(this.menus.length !== 0) {
            this.menus.forEach(element => {
                result += "\n-------------------------------\n";
                result += element.getName() + "\t\t" + element.getMenuPrice().toFixed(2) + "\n\n"; //`${element.getName()}    ${element.menuPrice.toFixed(2)}€
                element.dishes.forEach(dish => {
                result += " * " + dish.getName() + "\n";
                });
            });
        } 

        result += "\n";

        if(this.dishes.length !== 0) {
            this.dishes.forEach(element => {
                result += " * " + element.getName() + "\t\t" + element.getDishPrice().toFixed(2) + "\n\n"; //`${element.getName()}    ${element.menuPrice.toFixed(2)}€
            });
        } 
        /*else {
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
        }*/
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

    /**
     * @function findMenuByName, función que busca un menú
     * @param menu, recibe un menú
     * @return retorna un menú y sino lo encuentra lo indica
     */
    findMenuByName(menu: string){
        const deletion: number = this.menus.findIndex(element => element.getName() === menu);
        if(deletion !== -1) {
            return this.menus [deletion];
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
}
