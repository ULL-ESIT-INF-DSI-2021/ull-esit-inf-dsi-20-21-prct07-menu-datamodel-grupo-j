import {Ingredient} from "./Ingredient"
import {ingredientType} from "./Ingredient"


export type DishType = "STARTER" | "FIRSTCOURSE" | "SECONDCOURSE" | "DESSERT"; 

export class Dish {
    name: string;
    dishType: DishType;
    ingredients: {ingredient: Ingredient, amountInGrams: number}[];
    dishPrice: number;

    /**
     * Contructor del Plato
     * @param name nombre del plato
     * @param dishType tipo del plato
     * @param ingredients ingredientes que componen el plato
     * @param dishPrice precio del plato
     * @function calculatePrice() calcular precio del plato por el precio y cantidad de ingredientes
     */
    constructor(name: string, dishType: DishType, ingredients: {ingredient: Ingredient, amountInGrams: number}[] = []) {
        this.name = name;
        this.dishType = dishType;
        this.ingredients = ingredients;
        this.dishPrice = 0;
        this.calculatePrice();
    }

    /**
     * Método calculatePrice() Precio total del plato en euros en función de la suma de
     * los precios de los ingredientes y sus cantidades que lo componen
     * @returns precio del plato
     */
    calculatePrice(): void {
        this.ingredients.forEach(ingredient => {
            this.dishPrice += ingredient["ingredient"].getPricePerKg() / 100 * ingredient["amountInGrams"]; // antes /1000
        });
    }

    /**
     * Método getComposition() Composición nutricional del plato
     * @returns la cantidad de carbohidratos, proteinas y lípidos
     */
    getComposition(): {carbohydrates: number, proteins: number, lipids: number} {
        let cb: number = 0, pt = 0, lp = 0;
        this.ingredients.forEach(ingredient => {
            cb += ingredient.ingredient.getNutrients().carbohydrates * ingredient.amountInGrams / 100;
            pt += ingredient.ingredient.getNutrients().proteins * ingredient.amountInGrams / 100;
            lp += ingredient.ingredient.getNutrients().lipids * ingredient.amountInGrams / 100;
        });
        return {carbohydrates: cb, proteins: pt, lipids: lp};
    }

    /*getMainIngredientType(): ingredientType[] {
        let carnes = 0, verduras = 0, lacteos = 0, cereales = 0, frutas = 0;
        this.ingredients.forEach(element => {
            switch(element.ingredient.getIngredientGroup()) {
                case "CARNES-HUEVOS-LEGUMBRES": carnes++;   break;
                case "VERDURAS-HORTALIZAS": verduras++;     break;
                case "LACTEOS": lacteos++;                  break;
                case "CEREALES": cereales++;                break;
                case "FRUTAS": frutas++;                    break;
            }
        });
        
    }*/
    
    /**
     * @returns name Retorna el nombre del plato
     */
    getName(): string{
        return this.name;
    }

    /**
     * @returns dishType Retorna el tipo del plato (entrante, primer plato, ...)
     */
    getDishType(): DishType{
        return this.dishType;
    }

    /**
     * @returns ingredients Retorna el nombre de los ingredientes del plato
     */
    getIngredients():{ingredient: Ingredient, amountInGrams: number}[] {
        return this.ingredients;
    }

    /**
     * @returns dishPrice Retorna el precio del plato
     */
    getDishPrice(): number{
        return this.dishPrice;
    }

    /** Cambia el nombre del plato
     * @param newName Nuevo nombre del plato
     */
    setName(newName: string): void {
        this.name = newName;
    }

    /** Cambia el tipo del plato
     * @param newDishTye Nuevo nombre para el tipo del plato
     */
    setDishType(newDishTye: DishType): void {
        this.dishType = newDishTye;
    }

    /** Cambia los ingredientes de un plato
     * @param newIngredients Nuevo nombre del ingediente
     */
    setIngredients(newIngredients: {ingredient: Ingredient, amountInGrams: number}[] = []): void {
        this.ingredients = newIngredients;
    }
    
    /** Cambia el precio de los platos
     *  @param newDishPrice Nuevo precio para el plato
     */
    setDishPrice(newDishPrice: number): void {
        this.dishPrice = newDishPrice;
    }
}