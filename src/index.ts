import * as inquirer from 'inquirer'; 
import {Ingredient} from './Ingredient'
import {Dish} from './Dish'
import {Menu} from './Menu'
import {Carta} from './Carta'
import {Command} from './Command'
import * as data from './data'

enum chefMenus {
    Bueno = "The best menu! :)",
    Malo = "Shitty menu"
}

enum actions {
    addMenu = "Add new menu to the command",
    addDish = "Add new dish to the command",
    deleteMenu = "Delete a menu from my command",
    deleteDish = "Delete a dish from my command",
    clear = "Delete all my command",
    finishCommand = "Send my command",
    cancelCommand = "Cancel my command and quit"
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
    const menuArray: string[] = [], dishArray: string[] = [];
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
    } else {
        const menutypeSelection = await inquirer.prompt({
            type: "list",
            name: "customMenu",
            message: "How do you want to order your menu?",
            choices: ["From a chef menu", "Choosing dishes"]
        });
        if(menutypeSelection["customMenu"] === "From a chef menu") {
            const menuSelection = await inquirer.prompt({
                type: "list",
                name: "chefMenu",
                message: "What menu do you want to choose?",
                choices: menuArray
            });
        }
        else {

        }
    }
    mainPrompt();
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
    const userSelection = await inquirer.prompt( {
        type: "list",
        name: "delDish",
        message: "Which dish do you want to delete?",
        choices: ["Dish1", "None"]
    });
    mainPrompt();
}

function clear() {
    myCommand.clear();
    mainPrompt();
}

function sendCommand() {
    mainPrompt();
}

mainPrompt();