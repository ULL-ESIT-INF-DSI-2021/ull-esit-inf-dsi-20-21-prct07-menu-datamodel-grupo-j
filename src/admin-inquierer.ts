import * as inquirer from 'inquirer'; 
import {Ingredient} from './Ingredient'
import {ingredientType} from './Ingredient'
import {Dish} from './Dish'
import {DishType} from './Dish'
import {Menu} from './Menu'
import {Carta} from './Carta'
import {Command} from './Command'
import {JSONcarta} from './JSONcarta'
import * as data from './data'

/**
 * Opciones a las que podrá acceder el administrador al iniciar el programa
 */
enum adminOptions {
    addIngredient = "Add ingredient",
    addDish       = "Add dish",
    addMenu       = "Add menu",
    addCarta      = "Add Carta",
    deleteIngredient = "Delete ingredient",
    deleteDish       = "Delete dish",
    deleteMenu       = "Delete menu",
};

/**
 * Inicialización de la base de datos, usando los elementos previamente registrados en texto plano
 */
let db = new JSONcarta(data.ingredientArray, data.dishesArray, data.menuArray);

/**
 * Funcion principal de la interfaz de administración. Utiliza inquirer para seleccionar una de las funciones del programa, y llama al método correspondiente.
 */
async function mainPrompt(): Promise<void>{
    console.clear();
    

    const userSelection = await inquirer.prompt( {
        type: "list",
        name: "actions",
        message: "What do you want to do?",
        choices: Object.values(adminOptions)
    }); switch(userSelection["actions"]) {
            case adminOptions.addIngredient:            generateNewIngredient();        break;
            case adminOptions.addDish:                  generateNewDish();              break;
            case adminOptions.addMenu:                  generateNewMenu();              break;
            case adminOptions.addCarta:                 generateNewCarta();            break;
            case adminOptions.deleteIngredient:         deleteIngredientdb();        break;
            case adminOptions.deleteDish:               deleteDishdb();              break;
            case adminOptions.deleteMenu:               deleteMenudb();              break;
            //case adminOptions.deleteCarta:              //db.deleteCarta();             break;
    }
}

/**
 * Genera un nuevo ingrediente mediante los input del usuario.
 */
async function generateNewIngredient() {
    const nameSelection = await inquirer.prompt( {
        type: "input",
        name: "nameinput",
        message: "Ingredient Name: "
    });
    const locationSelection = await inquirer.prompt( {
        type: "input",
        name: "locationinput",
        message: "Ingredient location: "
    });
    const ingredientGroupSelection = await inquirer.prompt( {
        type: "input",
        name: "ingredientgroupinput",
        message: "Ingredient Group: "
    });
    const carbSelection = await inquirer.prompt( {
        type: "number",
        name: "carbinput",
        message: "Ingredient Carbohydrates: "
    });
    const protSelection = await inquirer.prompt( {
        type: "number",
        name: "protinput",
        message: "Ingredient Proteins: "
    });
    const lipSelection = await inquirer.prompt( {
        type: "number",
        name: "lipinput",
        message: "Ingredient Lipids: "
    });
    const priceSelection = await inquirer.prompt( {
        type: "number",
        name: "priceinput",
        message: "Ingredient Price: "
    });

    let _name: string = nameSelection["nameinput"];
    let _loc: string = locationSelection["locationinput"];
    let _grp: ingredientType = ingredientGroupSelection["ingredientgroupinput"]!;
    let _crb: number = carbSelection["carbinput"];
    let _prt: number = protSelection["protinput"];
    let _lip: number = lipSelection["lipinput"];
    let _prc: number = priceSelection["priceinput"];

    let newIng: Ingredient = new Ingredient(_name, _loc, _grp, {carbohydrates: _crb, proteins: _prt, lipids: _lip}, _prc);

    db.addNewIngredient(newIng);
}

/**
 * Genera un nuevo plato mediante los input del usuario y el listado de ingredientes
 */
async function generateNewDish() {
    const nameSelection = await inquirer.prompt( {
        type: "input",
        name: "nameinput",
        message: "Dish Name: "
    });
    const typeSelection = await inquirer.prompt( {
        type: "input",
        name: "itypeinput",
        message: "Dish Type: "
    });
    let continueAdding: boolean = true;
    let ingArr: string[] = [];
    data.ingredientArray.forEach(ing => {
        ingArr.push(ing.getName());
    })
    ingArr.push("Go back");
    let _ing: {ingredient: Ingredient, amountInGrams: number}[] = [];
    while(continueAdding) {
        const ingSelection = await inquirer.prompt({
            type: "list",
            name: "ingsel",
            message: "What ingredient do you want to add?",
            choices: ingArr
        });
        const usering: Ingredient = data.ingredientArray[data.ingredientArray.findIndex(element => element.getName() === ingSelection["ingsel"])];
        const amtSelection = await inquirer.prompt( {
            type: "number",
            name: "amtinput",
            message: "Ingredient Amount in grams: "
        });
        _ing.push({ingredient: usering, amountInGrams: amtSelection["amtinput"]})
        const cont = await inquirer.prompt({
            type: "list",
            name: "contsel",
            message: "Add other ingredient?",
            choices: ["Yes", "No"]
        }); continueAdding = (cont["contsel"] === "Yes");
    }
    let _name: string = nameSelection["nameinput"];
    let _grp: DishType = typeSelection["itypeinput"]!;

    let dsh = new Dish(_name, _grp, _ing);

    db.addNewDish(dsh);
}

/**
 * Genera un nuevo manu mediante los input del usuario y el listado de platos
 */
async function generateNewMenu() {
    const nameSelection = await inquirer.prompt( {
        type: "input",
        name: "nameinput",
        message: "Menu Name: "
    });
    let continueAdding: boolean = true;
    let dsArr: string[] = [];
    let _ds: Dish[] = [];
    data.dishesArray.forEach(ing => {
        dsArr.push(ing.getName());
    })
    while(continueAdding) {
        const ingSelection = await inquirer.prompt({
            type: "list",
            name: "ingsel",
            message: "What dish do you want to add?",
            choices: dsArr
        });
        const userdish: Dish = data.dishesArray[data.dishesArray.findIndex(element => element.getName() === ingSelection["ingsel"])];
        _ds.push(userdish);
        const cont = await inquirer.prompt({
            type: "list",
            name: "contsel",
            message: "Add other ingredient?",
            choices: ["Yes", "No"]
        }); continueAdding = (cont["contsel"] === "Yes");
    }
    let _name: string = nameSelection["nameinput"];

    let menutmp: Menu = new Menu(_name, 0, _ds);

    db.addNewMenu(menutmp);
}

/**
 * Genera un nuevo manu mediante los input del usuario y el listado de platos
 */
 async function generateNewCarta() {
    const nameSelection = await inquirer.prompt( {
        type: "input",
        name: "nameinput",
        message: "Carta Name: "
    });
    let continueAdding: boolean = true;
    let dsArr: string[] = [];
    let mnArr: string[] = [];
    let _ds: Dish[] = [];
    let _mn: Menu[] = [];
    data.dishesArray.forEach(ing => {
        dsArr.push(ing.getName());
    });
    data.menuArray.forEach(ing => {
        mnArr.push(ing.getName());
    });
    while(continueAdding) {
        const ingSelection = await inquirer.prompt({
            type: "list",
            name: "ingsel",
            message: "What dish do you want to add?",
            choices: dsArr
        });
        const userdish: Dish = data.dishesArray[data.dishesArray.findIndex(element => element.getName() === ingSelection["ingsel"])];
        _ds.push(userdish);
        const cont = await inquirer.prompt({
            type: "list",
            name: "contsel",
            message: "Add other dish?",
            choices: ["Yes", "No"]
        }); continueAdding = (cont["contsel"] === "Yes");
    }
    continueAdding = true;
    while(continueAdding) {
        const menSelection = await inquirer.prompt({
            type: "list",
            name: "mensel",
            message: "What menu do you want to add?",
            choices: mnArr
        });
        const usermenu: Menu = data.menuArray[data.menuArray.findIndex(element => element.getName() === menSelection["mensel"])];
        _mn.push(usermenu);
        const contm = await inquirer.prompt({
            type: "list",
            name: "contselm",
            message: "Add other menu?",
            choices: ["Yes", "No"]
        }); continueAdding = (contm["contselm"] === "Yes");
    }
    let _name: string = nameSelection["nameinput"];

    let cartatmp: Carta = new Carta(_mn, _ds, _name);

    db.addNewCarta(cartatmp);
}

async function deleteIngredientdb() {
    let ingr: string[] = [];
    db.ingredientList.forEach(element => {
        ingr.push(element.getName());
    });
    const userSelection = await inquirer.prompt( {
        type: "list",
        name: "delDish",
        message: "Which ingredient do you want to delete?",
        choices: ingr
    });
    //let userdish: Dish = myCommand.findDishByName(userSelection["delDish"])!;
    const usering: Ingredient = data.ingredientArray[data.ingredientArray.findIndex(element => element.getName() === userSelection["delDish"])];
    db.deleteIngredient(usering);
}

async function deleteDishdb() {
    let ds: string[] = [];
    db.dishList.forEach(element => {
        ds.push(element.getName());
    });
    const userSelection = await inquirer.prompt( {
        type: "list",
        name: "delDish",
        message: "Which dish do you want to delete?",
        choices: ds
    });
    //let userdish: Dish = myCommand.findDishByName(userSelection["delDish"])!;
    const userdish: Dish = data.dishesArray[data.dishesArray.findIndex(element => element.getName() === userSelection["delDish"])];
    db.deleteDish(userdish);
}

async function deleteMenudb() {
    let mn: string[] = [];
    db.menuList.forEach(element => {
        mn.push(element.getName());
    });
    const userSelection = await inquirer.prompt( {
        type: "list",
        name: "delDish",
        message: "Which menu do you want to delete?",
        choices: mn
    });
    const usermenu: Menu = data.menuArray[data.menuArray.findIndex(element => element.getName() === userSelection["delDish"])];
    db.deleteMenu(usermenu);
}

mainPrompt();
































































/*if (this.database.has("tasks").value()) {
      let dbItems = this.database.get("tasks").value();
      dbItems.forEach(item =>
        this.taskMap.set(
          item.id,
          new TaskItem(item.id, item.task, item.complete)
        )
      );
    } else {
      this.database.set("tasks", taskItems).write();
      taskItems.forEach(item => this.taskMap.set(item.id, item));
    }*/

























/*

async function deleteIngredient() {
    let ingredientitems: string[] = [];
    db.getDishes().forEach(element => {
        ingredientitems.push(element.getName());
    });
    const userSelection = await inquirer.prompt( {
        type: "list",
        name: "delIngre",
        message: "Which dish do you want to delete?",
        choices: ingredientitems
    });
    let userdish: Dish = db.findDishByName(userSelection["delIngre"])!;
    db.deleteDish(useringredient);
    mainPrompt();
}

async function deleteDish() {
    let dishitems: string[] = [];
    db.getDishes().forEach(element => {
        dishitems.push(element.getName());
    });
    const userSelection = await inquirer.prompt( {
        type: "list",
        name: "delDish",
        message: "Which dish do you want to delete?",
        choices: dishitems
    });
    let userdish: Dish = db.findDishByName(userSelection["delDish"])!;
    db.deleteDish(userdish);
    mainPrompt();
}

async function deleteMenu() {
    let menuitems: string[] = [];
    db.addNewMenu().forEach(element => {
        menuitems.push(element.getName());
    });
    const userSelection = await inquirer.prompt( {
        type: "list",
        name: "delMenu",
        message: "Which menu do you want to delete?",
        choices: menuitems
    });
    let usermenu: Menu = db.findMenuByName(userSelection["delMenu"])!;
    db.deleteMenu(usermenu);
    mainPrompt();
}

async function deleteCarta() {
    let cartaitems: string[] = [];
    db.getMenus().forEach(element => {
        cartaitems.push(element.getName());
    });
    const userSelection = await inquirer.prompt( {
        type: "list",
        name: "delCarta",
        message: "Which menu do you want to delete?",
        choices: cartaitems
    });
    let usermenu: Menu = db.findMenuByName(userSelection["delCarta"])!;
    db.deleteMenu(usercarta);
    mainPrompt();
}
*/











