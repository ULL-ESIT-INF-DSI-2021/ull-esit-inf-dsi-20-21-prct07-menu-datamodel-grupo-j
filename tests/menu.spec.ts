import "mocha";
import {expect} from 'chai';
import {Ingredient} from '../src/Ingredient'
import {Dish} from '../src/Dish'
import {Menu} from '../src/Menu'


let egg: Ingredient = new Ingredient("EGG", "SPAIN", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 5, proteins: 50, lipids: 25}, 5);
let potato: Ingredient = new Ingredient("POTATO", "SPAIN", "VERDURAS-HORTALIZAS", {carbohydrates: 45, proteins: 10, lipids: 30}, 1.5);
let tortilla: Dish = new Dish("TORTILLA", "SECONDCOURSE", [{ingredient: egg, amountInGrams: 50}, {ingredient: potato, amountInGrams: 200}]);

let milk: Ingredient = new Ingredient("MILK", "SPAIN", "LACTEOS", {carbohydrates: 4.7, proteins: 3.1, lipids: 3.5}, 7);
let limon: Ingredient = new Ingredient("LEMON", "PORTUGAL", "FRUTAS", {carbohydrates: 12.7, proteins: 0.1, lipids: 0.06}, 8);
let natilla: Dish = new Dish("NATILLA", "DESSERT", [{ingredient: milk, amountInGrams: 50}, {ingredient: limon, amountInGrams: 200}]);

let menu1: Menu = new Menu("MENU-CHEF", 9, [tortilla, natilla]);

describe('Menu initialization tests', () => {
    it('name of each menu', () => {
        expect(menu1.setName("MENU-CHEF"));
        expect(menu1.getName()).to.be.equal("MENU-CHEF");
    });
    it('price of each menu', () => {
        expect(menu1.setMenuPrice(9));
        expect(menu1.getMenuPrice()).to.be.equal(9);
    });
    it('New dishes are added properly to menu', () => {
        let menu: Menu = new Menu();
        menu.addNewDish(tortilla);
        menu.addNewDish(natilla);
        expect(menu1.setDishes([tortilla]));
        expect(menu.getDishes()).to.be.eql([tortilla, natilla]);
    });
    it('getMenuComposition of each dish of menu', () => {
        expect(menu1.getMenuComposition()).to.be.eql({carbohydrates: 92.5, proteins: 45, lipids: 72.5});
    });
    it('getListGroupIngredients of each dish of menu', () => {
        expect(menu1.getListGroupIngredients()).to.be.eql(["CARNES-HUEVOS-LEGUMBRES", "VERDURAS-HORTALIZAS"]); //"CARNES-HUEVOS-LEGUMBRES", "VERDURAS-HORTALIZAS", "LACTEOS", "FRUTAS"
    });
    it('Find dish by the name', () => {
        let menu: Menu = new Menu();
        menu.addNewDish(tortilla);
        expect(menu.findDishByName("TORTILLA")).to.be.eql(tortilla);
    });
    it('Delete dish', () => {
        let menu: Menu = new Menu();
        menu.addNewDish(tortilla);
        expect(menu.deleteDish(tortilla)).to.be.eql([]);
    });
});