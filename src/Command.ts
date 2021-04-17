import {Dish} from './Dish'
import * as inquirer from 'inquirer'; 

export class Command {

    isCustomMenu: boolean = true; 

    let commands: Command[] = [
        new Command(1, "Buy Flowers"), new Command(2, "Get Shoes"),
        new Command(3, "Collect Tickets"), new Command(4, "Call Joe", true)];

    let collection: CommandCollection = new Command("mesa1", todos);

/*
    displayTodoList(): void {
        console.log('Menú');
        collection.getItemCounts().incomplete } items to do)`);
        collection.getDish(true).forEach(item => item.printDetails());
    }
    enum Commands {
        Quit = "Quit"
    }
    function promptUser(): void {
        console.clear();
        displayTodoList();
        inquirer.prompt({
                type: "list",
                name: "command",
                message: "Choose option",
                choices: Object.values(Commands)
        }).then(answers => {
            if (answers["command"] !== Commands.Quit) {
                promptUser();
            }
        })
    }
    promptUser();*/
}


/*
import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from 'inquirer';

let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];
let collection: TodoCollection = new TodoCollection("Adam", todos);
function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List `
        + `(${ collection.getItemCounts().incomplete } items to do)`);
    collection.getTodoItems(true).forEach(item => item.printDetails());
}
enum Commands {
    Quit = "Quit"
}
function promptUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
            type: "list",
            name: "command",
            message: "Choose option",
            choices: Object.values(Commands)
    }).then(answers => {
        if (answers["command"] !== Commands.Quit) {
            promptUser();
        }
    })
}
promptUser();

*/