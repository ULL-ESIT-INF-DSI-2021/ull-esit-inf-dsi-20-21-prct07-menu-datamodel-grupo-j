import {Dish} from './Dish'
import {DishType} from './Dish'
import {Menu} from './Menu'
import {Carta} from './Carta'
import {Ingredient} from './Ingredient'
import {ingredientType} from './Ingredient'
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

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

export class JSONcarta {
    private database: lowdb.LowdbSync<dbtype>;
    public ingredientList: Ingredient[];
    public dishList: Dish[];
    public menuList: Menu[];
    public cartaList: Carta[];

    constructor(ingredients: Ingredient[] = [], dishes: Dish[] = [], menus: Menu[] = [], cartas: Carta[] = []) {
        this.database = lowdb(new FileSync("data.json"));
        /*if(this.database.has("ingredients").value()) {
            let idb = this.database.get("ingredients").value();
            idb.forEach(item => {
                let tmpi: Ingredient = item;
                this.ingredientList.push(tmpi);
            })
        }
        if(this.database.has("dishes").value()) {
            let idb = this.database.get("dishes").value();
            idb.forEach(item => {
                let tmpd: Dish = item;
                this.dishList.push(tmpd);
            })
        }
        if(this.database.has("menus").value()) {
            let idb = this.database.get("menus").value();
            idb.forEach(item => {
                let tmpm: Menu = item;
                this.menuList.push(tmpm);
            })
        }
        if(this.database.has("cartas").value()) {
            let idb = this.database.get("cartas").value();
            idb.forEach(item => {
                let tmpc: Carta = item;
                this.cartaList.push(tmpc);
            })
        }
        ingredients.forEach(item => {
            if(!this.ingredientList.includes(item)) this.ingredientList.push(item);
        })
        dishes.forEach(item => {
            if(!this.dishList.includes(item)) this.dishList.push(item);
        })
        menus.forEach(item => {
            if(!this.menuList.includes(item)) this.menuList.push(item);
        })
        cartas.forEach(item => {
            if(!this.cartaList.includes(item)) this.cartaList.push(item);
        })*/
        this.ingredientList = ingredients;
        this.dishList = dishes;
        this.menuList = menus;
        this.cartaList = cartas;
    }

    storeDB() {
        this.database.set("ingredients", [...this.ingredientList]).write();
        this.database.set("menus", [...this.menuList]).write();
        this.database.set("dishes", [...this.dishList]).write();
        this.database.set("cartas", [...this.cartaList]).write();
    }

    addNewIngredient(newIngredient: Ingredient) {
        this.ingredientList.push(newIngredient);
        this.storeDB();
    }

    addNewDish(newDish: Dish) {
        this.dishList.push(newDish);
        this.storeDB();
    }

    addNewMenu(newMenu: Menu){
        this.menuList.push(newMenu);
        this.storeDB();
    }

    addNewCarta(newCarta: Carta){
        this.cartaList.push(newCarta);
        this.storeDB();
    }

    deleteIngredient(ingredient: Ingredient) {
        const deletion: number = this.ingredientList.findIndex(element => element.getName() === ingredient.getName());
        if(deletion !== -1) {
            this.ingredientList.splice(deletion, 1);
            this.storeDB();
        }
        else {
            console.log("El ingrediente ya no se encuentra");
        }
    }

    deleteDish(dish: Dish) {
        const deletion: number = this.dishList.findIndex(element => element.getName() === dish.getName());
        if(deletion !== -1) {
            this.dishList.splice(deletion, 1);
            this.storeDB();
        }
        else {
            console.log("El plato ya no se encuentra");
        }
    }

    deleteMenu(menu: Menu) {
        const deletion: number = this.menuList.findIndex(element => element.getName() === menu.getName());
        if(deletion !== -1) {
            this.menuList.splice(deletion, 1);
            this.storeDB();
        }
        else {
            console.log("El menú ya no se encuentra");
        }
    }

    deleteCarta(carta: Carta) {
        const deletion: number = this.cartaList.findIndex(element => element.getName() === carta.getName());
        if(deletion !== -1) {
            this.cartaList.splice(deletion, 1);
            this.storeDB();
        }
        else {
            console.log("La carta ya no se encuentra");
        }
    }    
}
