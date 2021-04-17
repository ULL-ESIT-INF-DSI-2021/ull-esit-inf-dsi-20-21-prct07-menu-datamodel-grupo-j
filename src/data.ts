import {Ingredient} from './Ingredient'
import {Dish} from './Dish'
import {Menu} from './Menu'
import { createPromptModule } from 'inquirer';
import { Command } from './Command';

// List of ingredients

/*1*/let egg: Ingredient = new Ingredient("EGG", "SPAIN", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 5, proteins: 50, lipids: 25}, 5);
/*2*/let potato: Ingredient = new Ingredient("POTATO", "SPAIN", "VERDURAS-HORTALIZAS", {carbohydrates: 45, proteins: 10, lipids: 30}, 1.5);
/*3*/let cebolla: Ingredient = new Ingredient("CEBOLLA", "FRANCE", "VERDURAS-HORTALIZAS", {carbohydrates: 5, proteins: 15, lipids: 0}, 1.20);
/*4*/let milk: Ingredient = new Ingredient("MILK", "IRELAND", "LACTEOS", {carbohydrates: 4.7, proteins: 3.1, lipids: 3.5}, 7);
/*5*/let limon: Ingredient = new Ingredient("LEMON", "PORTUGAL", "FRUTAS", {carbohydrates: 12.7, proteins: 0.1, lipids: 0.06}, 8);
/*6*/let lettuce: Ingredient = new Ingredient("LETTUCE", "ITALY", "VERDURAS-HORTALIZAS", {carbohydrates: 2.9, proteins: 1.4, lipids: 0.2}, 2);
/*7*/let tomatoe: Ingredient = new Ingredient("TOMATOE", "SPAIN", "VERDURAS-HORTALIZAS", {carbohydrates: 3.5, proteins: 1, lipids: 0.11}, 1.5);
/*8*/let oliveOil: Ingredient = new Ingredient("OLIVE OIL", "ITALY", "VERDURAS-HORTALIZAS", {carbohydrates: 0, proteins: 0, lipids: 99.9}, 4.99);
/*9*/let cheese: Ingredient = new Ingredient("CHEESE", "IRELAND", "LACTEOS", {carbohydrates: 0, proteins: 27.6, lipids: 39.6}, 3.15);
/*10*/let garlic: Ingredient = new Ingredient("BEET", "GERMANY", "VERDURAS-HORTALIZAS", {carbohydrates: 23, proteins: 5.3, lipids: 0.3}, 3.15);
/*11*/let beet: Ingredient = new Ingredient("BEET", "BELGIUM", "VERDURAS-HORTALIZAS", {carbohydrates: 6.4, proteins: 1.3, lipids: 0.17}, 2.1);
/*12*/let carrot: Ingredient = new Ingredient("CARROT", "FRANCE", "VERDURAS-HORTALIZAS", {carbohydrates: 0, proteins: 1.3, lipids: 39.6}, 3.15);
/*13*/let whiteRice: Ingredient = new Ingredient("WHITE RICE", "CHINA", "CEREALES", {carbohydrates: 86, proteins: 7, lipids: 0.9}, 1.79);
/*14*/let spaghetti: Ingredient = new Ingredient("SPAGHETTI", "ITALY", "CEREALES", {carbohydrates: 74.1, proteins: 12, lipids: 1.8}, 1.85);
/*15*/let macaroni: Ingredient = new Ingredient("MACARONI", "ITALY", "CEREALES", {carbohydrates: 74.1, proteins: 12, lipids: 1.8}, 1.85);
/*16*/let tuna: Ingredient = new Ingredient("TUNA", "THAILAND", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 0, proteins: 23, lipids: 12}, 10);
/*17*/let sardines: Ingredient = new Ingredient("SARDINES", "CHINA", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 0, proteins: 18.1, lipids: 17.5}, 10);
/*18*/let hake: Ingredient = new Ingredient("HAKE", "CHINA", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 0, proteins: 15.9, lipids: 2.8}, 9.6);
/*19*/let banana: Ingredient = new Ingredient("BANANA", "INDIA", "VERDURAS-HORTALIZAS", {carbohydrates: 20, proteins: 1.2, lipids: 0.3}, 3);
/*20*/let sausage: Ingredient = new Ingredient("SAUSAGE", "GERMANY", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 0.7, proteins: 12.9, lipids: 27}, 8);
/*21*/let cornmeal: Ingredient = new Ingredient("CORNMEAL", "RUSSIA", "CEREALES", {carbohydrates: 76, proteins: 8.7, lipids: 2.7}, 5);
/*22*/let breadCrumbs: Ingredient = new Ingredient("BREAD CRUMBS", "FRANCIA", "CEREALES", {carbohydrates: 58, proteins: 7.8, lipids: 1}, 5);
/*23*/let liquidCream: Ingredient = new Ingredient("LIQUID CREAM", "NEW ZELAND", "LACTEOS", {carbohydrates: 3.4, proteins: 2.5, lipids: 20}, 6);
/*24*/let noodles: Ingredient = new Ingredient("NOODLES", "CHINA", "CEREALES", {carbohydrates: 78, proteins: 12.9, lipids: 1.5}, 2);
/*25*/let clams: Ingredient = new Ingredient("CLAMS", "JAPAN", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 0, proteins: 10.7, lipids: 0.5}, 12);
/*26*/let cod: Ingredient = new Ingredient("COD", "JAPAN", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 0, proteins: 10.7, lipids: 0.5}, 12);





// List of dishes (5-10 per type of dish)
/*1*/let croquetas: Dish = new Dish("CROQUETAS DE ATÚN", "STARTER", [{ingredient: milk, amountInGrams: 500}, {ingredient: tuna, amountInGrams: 100}, {ingredient: cornmeal, amountInGrams: 20}, {ingredient: oliveOil, amountInGrams: 100}, {ingredient: egg, amountInGrams: 150}, {ingredient:liquidCream, amountInGrams: 140}, {ingredient: breadCrumbs, amountInGrams: 30}]);
/**/let arrozCubana: Dish = new Dish("ARROZ A LA CUBANA", "FIRSTCOURSE", [{ingredient: whiteRice, amountInGrams: 200}, {ingredient: banana, amountInGrams: 50}, {ingredient: egg, amountInGrams: 104}, {ingredient: garlic, amountInGrams: 15}, {ingredient: sausage, amountInGrams: 160}]);
/**///let sopaPescado: Dish = new Dish("SOPA DE PESCADO", "FIRSTCOURSE", [{ingredient: noodles, amountInGrams: 125}, {ingredient: clams, amountInGrams: 350}, {ingredient: cod, amountInGrams: 700}, {ingredient: carrot, amountInGrams: 80}, {ingredient: salt, amountInGrams: 3}, {ingredient: celery, amountInGrams: 10}]);
/**/let cesarSalad: Dish = new Dish("CESAR-SALAD", "FIRSTCOURSE", [{ingredient:lettuce, amountInGrams: 100}, {ingredient: tomatoe, amountInGrams: 60}, {ingredient: oliveOil, amountInGrams: 20}, {ingredient: egg, amountInGrams: 53}, {ingredient: cheese, amountInGrams: 50}, {ingredient: garlic, amountInGrams: 15}, {ingredient: beet, amountInGrams: 30}, {ingredient: carrot, amountInGrams: 58}]);
/**/let tortilla: Dish = new Dish("TORTILLA", "SECONDCOURSE", [{ingredient: egg, amountInGrams: 50}, {ingredient: potato, amountInGrams: 200}]);
/**/let natilla: Dish = new Dish("NATILLA", "DESSERT", [{ingredient: milk, amountInGrams: 100}, {ingredient: limon, amountInGrams: 80}]);
/**/

// List of menu
let menu1: Menu = new Menu("MENU-CHEF", 9, [tortilla, natilla]);