import * as inquirer from 'inquirer'; 
import {Ingredient} from './Ingredient'
import {Dish} from './Dish'
import {Menu} from './Menu'
import {Carta} from './Carta'
import {Command} from './Command'
import * as data from './data'

enum actions {
    showInformation = "See the information of our products",
    addMenu = "Add new menu to the command",
    addDish = "Add new dish to the command",
    deleteMenu = "Delete a menu from my command",
    deleteDish = "Delete a dish from my command",
    clear = "Delete all my command",
    finishCommand = "Send my command",
    cancelCommand = "Cancel my command and quit"
}

enum customMenuActions {
    addDish = "Add new dish to menu",
    deleteDish = "Delete dish from menu",
    confirm = "Confirm and add menu",
    quit = "Cancel and quit"
}

const myCommand = new Command(1);

async function mainPrompt(): Promise<void>{
    console.clear();
    myCommand.printCommand();

    const userSelection = await inquirer.prompt( {
        type: "list",
        name: "actions",
        message: "What do you want to do?",
        choices: Object.values(actions)
    }); switch(userSelection["actions"]) {
            case actions.showInformation:   showAll();      break;
            case actions.addMenu:           selectMenu();   break;
            case actions.addDish:           selectDish();   break;
            case actions.deleteMenu:        deleteMenu();   break;
            case actions.deleteDish:        deleteDish();   break;
            case actions.clear:             clear();        break;
            case actions.finishCommand:     sendCommand();  break;
            case actions.cancelCommand:                     break;

    }
}

async function selectMenu() {
    let carta = new Carta();
    const menuArray: string[] = [], dishArray: string[] = [], menuId: number = 1;;
    carta.localMenus.forEach(element => {
        menuArray.push(element.getName());
    });
    carta.dishes.forEach(element => {
        dishArray.push(element.getName());
    });
    const userSelection = await inquirer.prompt( {
        type: "list",
        name: "menuType",
        message: "What kind of menu do you want to order?",
        choices: ["A menu designed by our chef", "A custom menu"]
    });
    if(userSelection["menuType"] === "A menu designed by our chef") {
        const menuSelection = await inquirer.prompt({
            type: "list",
            name: "chefMenu",
            message: "What menu do you want to choose?",
            choices: menuArray
        });
        let usermenu: Menu = carta.findMenuByName(menuSelection["chefMenu"])!;
        myCommand.addNewMenu(usermenu);
        mainPrompt();
    } else {
        const menutypeSelection = await inquirer.prompt({
            type: "list",
            name: "customMenu",
            message: "How do you want to order your menu?",
            choices: ["From a chef menu", "Choosing dishes"]
        });
        if(menutypeSelection["customMenu"] === "From a chef menu") {
            const menuCustomSelection = await inquirer.prompt({
                type: "list",
                name: "chefCustomMenu",
                message: "What menu do you want to choose?",
                choices: menuArray
            });
            let newCustomMenu = new Menu("Custom Menu " /*+ menuId*/);
            let usermenu: Menu = carta.findMenuByName(menuCustomSelection["chefCustomMenu"])!;
            newCustomMenu.setDishes(usermenu.getDishes());
            customMenuActionSelection(newCustomMenu);        
            //waitForSelection(newCustomMenu);
        }   
    }
   // mainPrompt();
}

async function selectDish() {
    let carta = new Carta();
    const dishArray: string[] = [];
    carta.dishes.forEach(element => {
        dishArray.push(element.getName());
    });
    const dishSelection = await inquirer.prompt({
        type: "list",
        name: "customMenu",
        message: "What dishes do you want to order?",
        choices: dishArray
    })
    let userdish: Dish = carta.findDishByName(dishSelection["customMenu"])!;
    myCommand.addNewDish(userdish);
    mainPrompt();
}

async function deleteMenu() {
    let menuitems: string[] = [];
    myCommand.getMenus().forEach(element => {
        menuitems.push(element.getName());
    });
    const userSelection = await inquirer.prompt( {
        type: "list",
        name: "delMenu",
        message: "Which menu do you want to delete?",
        choices: menuitems
    });
    let usermenu: Menu = myCommand.findMenuByName(userSelection["delMenu"])!;
    myCommand.deleteMenu(usermenu);
    mainPrompt();
}

async function deleteDish() {
    let dishitems: string[] = [];
    myCommand.getDishes().forEach(element => {
        dishitems.push(element.getName());
    });
    const userSelection = await inquirer.prompt( {
        type: "list",
        name: "delDish",
        message: "Which dish do you want to delete?",
        choices: dishitems
    });
    let userdish: Dish = myCommand.findDishByName(userSelection["delDish"])!;
    myCommand.deleteDish(userdish);
    mainPrompt();
}

var waitForSelection = (menu: Menu) => customMenuActionSelection(menu);
async function customMenuActionSelection(menu: Menu): Promise<void> {
    let option: boolean = true;
    let carta: Carta = new Carta();
    while(option) {
        console.clear();
        menu.print();
        const userActionSelection = await inquirer.prompt( {
            type: "list",
            name: "customActions",
            message: "What do you want to do?",
            choices: Object.values(customMenuActions)
        }); 
        if(userActionSelection["customActions"] === customMenuActions.addDish) {
            const dishArray: string[] = [];
            carta.dishes.forEach(element => {
                dishArray.push(element.getName());
            });
            const dishSelection = await inquirer.prompt({
                type: "list",
                name: "customMenu",
                message: "What dish do you want to add to your menu?",
                choices: dishArray
            });
            let userdish: Dish = carta.findDishByName(dishSelection["customMenu"])!;
            menu.addNewDish(userdish);
        }
        else if(userActionSelection["customActions"] === customMenuActions.deleteDish) {
            let dishitems: string[] = [];
            menu.getDishes().forEach(element => {
                dishitems.push(element.getName());
            });
            const deleteDishSelection = await inquirer.prompt( {
                type: "list",
                name: "delDish",
                message: "Which dish do you want to delete from your menu?",
                choices: dishitems
            });
            let userdish: Dish = menu.findDishByName(deleteDishSelection["delDish"])!;
            menu.deleteDish(userdish);
        }
        else if(userActionSelection["customActions"] === customMenuActions.confirm) {
            myCommand.addNewMenu(menu);
            option = false;
        }
        else {
            option = false;
        }
    }
    mainPrompt();
}

function clear() {
    myCommand.clear();
    mainPrompt();
}

function sendCommand() {
    mainPrompt();
}

async function showAll() {
    let carta = new Carta();
    const userSelection = await inquirer.prompt( {
        type: "list",
        name: "whatToShow",
        message: "What do you want to do?",
        choices: ["Show all menus", "Show all dishes", "Go back"]
    });
    if(userSelection["whatToShow"] === "Show all menus") {
        const menuArray: string[] = [], dishArray: string[] = [];
        carta.localMenus.forEach(element => {
            menuArray.push(element.getName());
        });
        carta.dishes.forEach(element => {
            dishArray.push(element.getName());
        });
        console.clear();
        console.log("##########ALL OUR MENUS##########\n\n");
        const userMenuSelection = await inquirer.prompt( {
            type: "list",
            name: "menuType",
            message: "What menu do you want to check?",
            choices: menuArray
        });
        let usermenu: Menu = carta.findMenuByName(userMenuSelection["menuType"])!;
        console.clear();
        console.log("These are all the dishes includes in the menu.\nSelect any of them to check details.\n");
        let dishOptionsArray: string[] = [];
        usermenu.getDishes().forEach(element => {
            dishOptionsArray.push(element.getName());
        });
        dishOptionsArray.push("Go Back");
        const menuDishSelection = await inquirer.prompt({
            type: "list",
            name: "dishMenu",
            message: "What dish do you want to check?",
            choices: dishOptionsArray
        });
        if(menuDishSelection["dishMenu"] === "Go Back") {
            console.clear();
            showAll();
        }
        else {
            let userdish: Dish = carta.findDishByName(menuDishSelection["dishMenu"])!;
            console.clear();
            console.log("Ingredientes del plato " + userdish.getName() + ":\n\n");
            userdish.getIngredients().forEach(element => {
                element.ingredient.print();
            });
            const goback = await inquirer.prompt({
                type: "list",
                name: "back",
                choices: ["Go Back"]
            });
            showAll();
        }
    }
    else if(userSelection["whatToShow"] === "Show all dishes") {

    }
    else {
        mainPrompt();
    }
}

mainPrompt();