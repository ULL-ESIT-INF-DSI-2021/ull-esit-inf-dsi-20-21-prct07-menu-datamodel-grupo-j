import "mocha";
import {expect} from 'chai';
import {Ingredient} from '../src/Ingredient'
import {Dish} from '../src/Dish'
import {Menu} from '../src/Menu'
import {Command} from '../src/Command'

let egg: Ingredient = new Ingredient("EGG", "SPAIN", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 5, proteins: 50, lipids: 25}, 5);
let potato: Ingredient = new Ingredient("POTATO", "SPAIN", "VERDURAS-HORTALIZAS", {carbohydrates: 45, proteins: 10, lipids: 30}, 1.5);
let tortilla: Dish = new Dish("TORTILLA", "SECONDCOURSE", [{ingredient: egg, amountInGrams: 50}, {ingredient: potato, amountInGrams: 200}]);

let milk: Ingredient = new Ingredient("MILK", "SPAIN", "LACTEOS", {carbohydrates: 4.7, proteins: 3.1, lipids: 3.5}, 7);
let limon: Ingredient = new Ingredient("LEMON", "PORTUGAL", "FRUTAS", {carbohydrates: 12.7, proteins: 0.1, lipids: 0.06}, 8);
let natilla: Dish = new Dish("NATILLA", "DESSERT", [{ingredient: milk, amountInGrams: 50}, {ingredient: limon, amountInGrams: 200}]);

let menu1: Menu = new Menu("MENU-CHEF", 9, [tortilla, natilla]);


describe('Command  tests', () => {
    it('Command table', () => {
        let command: Command = new Command(0);
        expect(command.getNameTable()).to.be.eql(0);
    });
});

describe('Command dishes tests', () => {
    it('New dishes are added properly', () => {
        let command: Command = new Command(0);
        command.addNewDish(natilla);
        expect(command.getDishes().includes(natilla)).to.be.eql(true);
    });
    it('Get dish', () => {
        let command: Command = new Command(0);
        command.addNewDish(tortilla);
        expect(command.getDishes()).to.be.eql([tortilla]);
    });
    it('Find dish by the name', () => {
        let command: Command = new Command(0);
        command.addNewDish(tortilla);
        expect(command.findDishByName("TORTILLA")).to.be.eql(tortilla);
    });
    it('Delete dish', () => {
        let command: Command = new Command(0);
        command.addNewDish(tortilla);
        command.deleteDish(tortilla);
        expect(command.getDishes().includes(tortilla)).to.be.eql(false);
    });
});


describe('Command menu tests', () => {
    it('Get menu', () => {
        let command: Command = new Command(1);
        command.addNewMenu(menu1);
        expect(command.getMenus()).to.be.eql([menu1]);
    });
    it('New menu are added properly', () => {
        let command: Command = new Command(1);
        command.addNewMenu(menu1);
        expect(command.getMenus()).to.be.eql([menu1]);
    });
    it('Menus are deleted properly', () => {
        let command: Command = new Command(1);
        command.addNewMenu(menu1);
        command.deleteMenu(menu1);
        expect(command.getMenus()).to.be.eql([]);
    });
    it('Find menu by the name', () => {
        let command: Command = new Command(1);
        command.addNewMenu(menu1);
        expect(command.findMenuByName("MENU-CHEF")).to.be.eql(menu1);
    });
});

