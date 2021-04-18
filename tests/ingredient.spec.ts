import "mocha";
import {expect} from 'chai';
import {Ingredient} from '../src/Ingredient'


let egg: Ingredient = new Ingredient("EGG", "SPAIN", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 5, proteins: 50, lipids: 25}, 5);

describe('Ingredients initialization tests', () => {
    it('name of each ingredient', () => {
        expect(egg.setName("EGG"));
        expect(egg.getName()).to.be.equal("EGG");
    });
    it('location of each ingredient', () => {
        expect(egg.setName("SPAIN"));
        expect(egg.getLocation()).to.be.equal("SPAIN");
    });
    it('getNutrientType of each ingredient', () => {
        expect(egg.getIngredientGroup()).to.be.equal("CARNES-HUEVOS-LEGUMBRES");
    });
    it('getNutrient of each ingredient', () => {
        expect(egg.setNutrients({carbohydrates: 5, proteins: 50, lipids: 25}));
        expect(egg.getNutrients()).to.be.equal({carbohydrates: 5, proteins: 50, lipids: 25});
    });
    it('getPricePerKg of each ingredient', () => {
        expect(egg.setPrice(5));
        expect(egg.getPricePerKg()).to.be.equal(5);
    });
    
});