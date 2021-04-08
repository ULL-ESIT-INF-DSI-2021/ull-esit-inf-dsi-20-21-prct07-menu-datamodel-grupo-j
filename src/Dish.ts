import {Ingredient} from "./Ingredient"

type DishType = "STARTER" | "FIRSTCOURSE" | "SECONDCOURSE" | "DESSERT"; 

export class Dish {
    name: string;
    dishType: DishType;
    ingredients: {ingredient: Ingredient, amountInGrams: number}[];
    // grupo de alimento predominante 
    dishPrice: number;

    constructor(name: string, dishType: DishType, ingredients: {ingredient: Ingredient, amountInGrams: number}[] = []) {
        this.name = name;
        this.dishType = dishType;
        this.ingredients = ingredients;
        this.dishPrice = 0;
        this.calculatePrice();
    }

    calculatePrice() {
        this.ingredients.forEach(ingredient => {
            this.dishPrice += ingredient["ingredient"].getPricePerKg();
        });
    }

    getName(){
        return this.name;
    }

    getDishTye(){
        return this.dishType;
    }

    getIngredients(){
        return this.ingredients;
    }

    getDishPrice(){
        return this.dishPrice;
    }

    setName(newName: string): void {
        this.name = newName;
    }

    setDishType(newDishTye: DishType): void {
        this.dishType = newDishTye;
    }

    setIngredients(newIngredients: {ingredient: Ingredient, amountInGrams: number}[] = []): void {
        this.ingredients = newIngredients;
    }

    setDishPrice(newDishPrice: number): void {
        this.dishPrice = newDishPrice;
    }
}