import "mocha";
import {expect} from 'chai';
import {Ingredient} from '../src/Ingredient'


let egg: Ingredient = new Ingredient("EGG", "SPAIN", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 5, proteins: 50, lipids: 25}, 5);

describe('Ingredients initialization tests', () => {
    it('getPricePerKg of each ingredient', () => {
        expect(egg.getPricePerKg()).to.be.equal(5);
    });
    it('getNutrientType of each ingredient', () => {
        expect(egg.getIngredientGroup()).to.be.equal("CARNES-HUEVOS-LEGUMBRES");
    });
});