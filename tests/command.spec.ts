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
/*
describe('Command dishes tests', () => {
    it('New dishes are added properly', () => {
        let command: Command = new Command(1);
        command.addNewDish(tortilla);
        command.addNewDish(natilla);
        expect(command.getDishes()).to.be.eql([tortilla, natilla]);
    });
});*/