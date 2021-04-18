

/*
// LocalStorage is a lowdb adapter for saving to localStorage
const adapter = new LocalStorage('db')

// Create database instance
const db = low(adapter)

// Set default state
db.defaults({ items: [] })
  .write()

function add() {
  db.get('items')
    .push({ time: Date.now() })
    .write()
}

function reset() {
  db.set('items', [])
    .write()
}

//
// UI code using vanilla JavaScript
// You can use any other UI lib with lowdb
//

function render() {
  const state = db.getState()
  const str = JSON.stringify(state, null, 2)
  document.getElementById('state').innerHTML = str
}

document.getElementById('reset').onclick = function() {
  reset()
  render()
}

document.getElementById('add').onclick = function() {
  add()
  render()
}

render()













import * as Data from "./data"
import * as lowdb from 'lowdb'
import * as LocalStorage from 'lowdb/adapters/LocalStorage'
import FileSync from "lowdb/adapters/FileSync";
import { Ingredient, ingredientType } from "./Ingredient"
import {Dish, DishType} from "./Dish"
import { Menu } from "./Menu"
import {Carta} from "./Carta"

const adapter = new LocalStorage('db')
const db = lowdb(adapter)
/*
db.defaults({ })
  .write()

// Data se guarda automáticamente en LocalStorage
db.get('posts')
  .push({ title: 'lowdb' })
  .write()
*/
/*
type schemaType = {
    ingredients: {
        name: string;
        location: string;
        ingredientGroup: ingredientType;
        nutrients: {carbohydrates: number, proteins: number, lipids: number};
        pricePerKg: number;
    } [];

    dishes: Dish[];
    menus: Menu[]
};


export class JsonTodoCollection extends Carta {
    database: lowdb.LowdbSync<schemaType>;
    constructor(public userName: string, todoItems: Ingredient[] = []) {
        super(userName, []);
        this.database = lowdb(new FileSync("data.ts"));
        if (this.database.has("tasks").value())  {
            let dbItems = this.database.get("tasks").value();
            dbItems.forEach(item => this.itemMap.set(item.id,
                new Ingredient(item.id, item.task, item.complete)));
        } else {
            this.database.set("tasks", todoItems).write();
            todoItems.forEach(item => this.itemMap.set(item.id, item));
        }
    }
    addTodo(task: string): number {
        let result = super.addTodo(task);
        this.storeTasks();
        return result;
    }
    markComplete(id: number, complete: boolean): void {
        super.markComplete(id, complete);
        this.storeTasks();
    }
    removeComplete(): void {
        super.removeComplete();
        this.storeTasks();
    }
    private storeTasks() {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
}




*/


