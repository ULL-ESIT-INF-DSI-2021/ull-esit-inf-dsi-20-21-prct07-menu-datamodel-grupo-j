import "mocha";
import {expect} from 'chai';
import {Ingredient} from '../src/Ingredient'
import {Dish} from '../src/Dish'
import {Menu} from '../src/Menu'
import {Carta} from '../src/Carta'

let egg: Ingredient = new Ingredient("EGG", "SPAIN", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 5, proteins: 50, lipids: 25}, 5);
let potato: Ingredient = new Ingredient("POTATO", "SPAIN", "VERDURAS-HORTALIZAS", {carbohydrates: 45, proteins: 10, lipids: 30}, 1.5);
let tortilla: Dish = new Dish("TORTILLA", "SECONDCOURSE", [{ingredient: egg, amountInGrams: 50}, {ingredient: potato, amountInGrams: 200}]);

let milk: Ingredient = new Ingredient("MILK", "SPAIN", "LACTEOS", {carbohydrates: 4.7, proteins: 3.1, lipids: 3.5}, 7);
let limon: Ingredient = new Ingredient("LEMON", "PORTUGAL", "FRUTAS", {carbohydrates: 12.7, proteins: 0.1, lipids: 0.06}, 8);
let natilla: Dish = new Dish("NATILLA", "DESSERT", [{ingredient: milk, amountInGrams: 50}, {ingredient: limon, amountInGrams: 200}]);

let menu1: Menu = new Menu("MENU-CHEF", 9, [tortilla, natilla]);

describe('Carta menus tests', () => {
    it('Name of elements menu and dishes', () => {
        expect(menu1.setName("MENU-CHEF"));
        expect(tortilla.setName("TORTILLA"));
        expect(natilla.setName("NATILLA"));
    });
    it('New menus are added properly', () => {
        let carta: Carta = new Carta();
        carta.addNewMenu(menu1);
        expect(carta.getLocalMenus().includes(menu1)).to.be.eql(true);
    });
    it('Menus are deleted properly', () => {
        let carta: Carta = new Carta();
        carta.addNewMenu(menu1);
        carta.deleteMenu(menu1);
        expect(carta.getLocalMenus().includes(menu1)).to.be.eql(false);
    });
    it('Find menu by the name', () => {
        let carta: Carta = new Carta();
        carta.addNewMenu(menu1);
        expect(carta.findMenuByName("MENU-CHEF")).to.be.eql(menu1);
    });
});

describe('Carta dishes tests', () => {
    it('New dishes are added properly', () => {
        let carta: Carta = new Carta();
        carta.addNewDish(tortilla);
        expect(carta.getDishes().includes(tortilla)).to.be.eql(true);
    });
    it('Delete dish', () => {
        let carta: Carta = new Carta();
        carta.addNewDish(tortilla);
        carta.addNewDish(natilla);
        carta.deleteDish(tortilla)
        expect(carta.getDishes().includes(natilla)).to.be.eql(true);
    });
    it('Find dish by the name', () => {
        let carta: Carta = new Carta();
        carta.addNewDish(tortilla);
        expect(carta.findDishByName("TORTILLA")).to.be.eql(tortilla);
    });
});

/*
describe('Carta print tests', () => {
    it('Carta is print successfully', () => {
        let carta: Carta = new Carta();
        carta.addNewMenu(menu1);
        carta.addNewDish(tortilla);
        expect(carta.printFullCarta()).to.be.equal([""]);
    });
});*/



























