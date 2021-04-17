import "mocha";
import {expect} from 'chai';
import {Ingredient} from '../src/Ingredient'
import {Dish} from '../src/Dish'

describe('Dish initialization tests', () => {
    it('Basic properties are set properly', () => {
        let egg: Ingredient = new Ingredient("EGG", "SPAIN", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 5, proteins: 50, lipids: 25}, 5);
        let potato: Ingredient = new Ingredient("POTATO", "SPAIN", "VERDURAS-HORTALIZAS", {carbohydrates: 45, proteins: 10, lipids: 30}, 1.5);
        let tortilla: Dish = new Dish("TORTILLA", "SECONDCOURSE", [{ingredient: egg, amountInGrams: 50}, {ingredient: potato, amountInGrams: 200}]);
        tortilla.setName("TORTILLACONCEBOLLA");
        let cebolla: Ingredient = new Ingredient("CEBOLLA", "FRANCE", "VERDURAS-HORTALIZAS", {carbohydrates: 5, proteins: 15, lipids: 0}, 1.20);
        tortilla.setIngredients([{ingredient: egg, amountInGrams: 50}, {ingredient: potato, amountInGrams: 200}, {ingredient: cebolla, amountInGrams: 20}]);
        tortilla.setDishPrice(2);
        tortilla.setDishType("FIRSTCOURSE");
        expect(tortilla.getName()).to.be.equal("TORTILLACONCEBOLLA");
        expect(tortilla.getDishType()).to.be.equal("FIRSTCOURSE");
        expect(tortilla.getIngredients()).to.be.eql([{ingredient: egg, amountInGrams: 50}, {ingredient: potato, amountInGrams: 200}, {ingredient: cebolla, amountInGrams: 20}]);
        expect(tortilla.getDishPrice()).to.be.equal(2);
    });
    it('Full price is calculated properly', () => {
        let egg: Ingredient = new Ingredient("EGG", "SPAIN", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 5, proteins: 50, lipids: 25}, 5);
        let potato: Ingredient = new Ingredient("POTATO", "SPAIN", "VERDURAS-HORTALIZAS", {carbohydrates: 45, proteins: 10, lipids: 30}, 1.5);
        let tortilla: Dish = new Dish("TORTILLA", "SECONDCOURSE", [{ingredient: egg, amountInGrams: 50}, {ingredient: potato, amountInGrams: 200}]);
        expect(tortilla.getDishPrice()).to.be.equal(5.5);  //0.55
    });
});

describe('Dish composition tests', () => {
    it('Nutritional composition is calculated properly', () => {
        let egg: Ingredient = new Ingredient("EGG", "SPAIN", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 5, proteins: 50, lipids: 25}, 5);
        let potato: Ingredient = new Ingredient("POTATO", "SPAIN", "VERDURAS-HORTALIZAS", {carbohydrates: 45, proteins: 10, lipids: 30}, 1.5);
        let tortilla: Dish = new Dish("TORTILLA", "SECONDCOURSE", [{ingredient: egg, amountInGrams: 50}, {ingredient: potato, amountInGrams: 200}]);
        expect(tortilla.getComposition()).to.be.eql({carbohydrates: 92.5, proteins: 45, lipids: 72.5});
    });
});