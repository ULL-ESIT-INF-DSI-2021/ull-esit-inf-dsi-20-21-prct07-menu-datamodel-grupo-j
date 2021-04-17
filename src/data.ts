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
/*19*/let banana: Ingredient = new Ingredient("BANANA", "INDIA", "FRUTAS", {carbohydrates: 20, proteins: 1.2, lipids: 0.3}, 3);
/*20*/let sausage: Ingredient = new Ingredient("SAUSAGE", "GERMANY", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 0.7, proteins: 12.9, lipids: 27}, 8);
/*21*/let cornmeal: Ingredient = new Ingredient("CORNMEAL", "RUSSIA", "CEREALES", {carbohydrates: 76, proteins: 8.7, lipids: 2.7}, 5);
/*22*/let breadCrumbs: Ingredient = new Ingredient("BREAD CRUMBS", "FRANCIA", "CEREALES", {carbohydrates: 58, proteins: 7.8, lipids: 1}, 5);
/*23*/let liquidCream: Ingredient = new Ingredient("LIQUID CREAM", "NEW ZELAND", "LACTEOS", {carbohydrates: 3.4, proteins: 2.5, lipids: 20}, 6);
/*24*/let noodles: Ingredient = new Ingredient("NOODLES", "CHINA", "CEREALES", {carbohydrates: 78, proteins: 12.9, lipids: 1.5}, 2);
/*25*/let clams: Ingredient = new Ingredient("CLAMS", "JAPAN", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 0, proteins: 10.7, lipids: 0.5}, 12);
/*26*/let cod: Ingredient = new Ingredient("COD", "SPAIN", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 0, proteins: 17.7, lipids: 0.4}, 11.5);
/*27*/let celery: Ingredient = new Ingredient("CELERY", "ENGLAND", "VERDURAS-HORTALIZAS", {carbohydrates: 1.3, proteins: 1.3, lipids: 0.2}, 1.5);
/*28*/let parsley: Ingredient = new Ingredient("PARSLEY", "SPAIN", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 2.7, proteins: 3, lipids: 1.3}, 1.2);
/*29*/let veal: Ingredient = new Ingredient("VEAL", "CANADA", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 0, proteins: 24, lipids: 3}, 8);
/*30*/let greenPeas: Ingredient = new Ingredient("GREEN PEAS", "ITALY", "VERDURAS-HORTALIZAS", {carbohydrates: 9.7, proteins: 5.6, lipids: 0.5}, 2);
/*31*/let redPepper: Ingredient = new Ingredient("RED PEPPER", "CHINA", "VERDURAS-HORTALIZAS", {carbohydrates: 6.4, proteins: 1, lipids: 0.4}, 2.7);
/*32*/let greenPepper: Ingredient = new Ingredient("GREEN PEPPER", "CHINA", "VERDURAS-HORTALIZAS", {carbohydrates: 3.7, proteins: 0.7, lipids: 0.2}, 2.65);
/*33*/let chickpea: Ingredient = new Ingredient("CHICKPEA", "MEXICO", "VERDURAS-HORTALIZAS", {carbohydrates: 49.6, proteins: 21.3, lipids: 5.4}, 3.1);
/*34*/let cabbage: Ingredient = new Ingredient("CABBAGE", "USA", "VERDURAS-HORTALIZAS", {carbohydrates: 6, proteins: 1.3, lipids: 0.1}, 3.6);
/*35*/let zucchini: Ingredient = new Ingredient("ZUCCHINI", "INDIA", "VERDURAS-HORTALIZAS", {carbohydrates: 3.35, proteins: 1.21, lipids: 0.18}, 5);
/*36*/let beans: Ingredient = new Ingredient("BEANS", "USA", "VERDURAS-HORTALIZAS", {carbohydrates: 7.13, proteins: 1.82, lipids: 0.12}, 1.69);
/*37*/let pumpkin: Ingredient = new Ingredient("PUMPKIN", "CHINA", "VERDURAS-HORTALIZAS", {carbohydrates: 4.59, proteins: 1.13, lipids: 0.2}, 2.89);
/*38*/let chicken: Ingredient = new Ingredient("CHICKEN", "BRAZIL", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 0, proteins: 20, lipids: 9.7}, 10.1);
/*39*/let avocado: Ingredient = new Ingredient("AVOCADO", "MEXICO", "VERDURAS-HORTALIZAS", {carbohydrates: 5.9, proteins: 1.5, lipids: 12}, 6);
/*40*/let serranoHam: Ingredient = new Ingredient("SERANO HAM", "SPAIN", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 0, proteins: 31, lipids: 13}, 5);
/*41*/let chorizo: Ingredient = new Ingredient("CHORIZO", "SPAIN", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 2.85, proteins: 13.72, lipids: 29.18}, 4);
/*42*/let bloodSausage: Ingredient = new Ingredient("BLOOD SAUSAGE", "SPAIN", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 3, proteins: 19.5, lipids: 39.5}, 6.4);
/*43*/let octopus: Ingredient = new Ingredient("OCTOPUS", "SPAIN", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 2.2, proteins: 14.91, lipids: 1.4}, 11.4);
/*44*/let mayonnaise: Ingredient = new Ingredient("MAYONNAISE", "ARGENTINA", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 3.51, proteins: 0.13, lipids: 4.91}, 2.4);
/*45*/let olives: Ingredient = new Ingredient("OLIVES", "EGYPT", "VERDURAS-HORTALIZAS", {carbohydrates: 6, proteins: 0.8, lipids: 11}, 1.9);
/*46*/let vinegar: Ingredient = new Ingredient("VINEGAR", "ARGENTINA", "VERDURAS-HORTALIZAS", {carbohydrates: 0, proteins: 0, lipids: 0}, 1.5);
/*47*/let porkChop: Ingredient = new Ingredient("PORK CHOP", "USA", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 0, proteins: 13.12, lipids: 6.85}, 8.5);
/*48*/let sargo: Ingredient = new Ingredient("SARGO", "SPAIN", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 0, proteins: 18.4, lipids: 12}, 9.5);
/*49*/let coffee: Ingredient = new Ingredient("COFFEE", "BRAZIL", "VERDURAS-HORTALIZAS", {carbohydrates: 0, proteins: 0.1, lipids: 0}, 2);
/*50*/let cocoa: Ingredient = new Ingredient("COCOA", "IVORY COAST", "VERDURAS-HORTALIZAS", {carbohydrates: 9.9, proteins: 25, lipids: 10}, 1.5);
/*51*/let cinnamon: Ingredient = new Ingredient("CINNAMON", "SRI LANKA", "VERDURAS-HORTALIZAS", {carbohydrates: 1.89, proteins: 0.09, lipids: 0.07}, 1.5);
/*52*/let strawberry: Ingredient = new Ingredient("STRAWBERRY", "CHINA", "FRUTAS", {carbohydrates: 7, proteins: 0.7, lipids: 0.5}, 2.5);
/*53*/let whippedCream: Ingredient = new Ingredient("WHIPPED CREAM", "NETHERLANDS", "LACTEOS", {carbohydrates: 10.1, proteins: 2.1, lipids: 31.4}, 3.5);
/*54*/let butter: Ingredient = new Ingredient("BUTTER", "FRANCE", "LACTEOS", {carbohydrates: 99, proteins: 0.6, lipids: 83}, 2.15);


// List of dishes (5-10 per type of dish)
/*1*/let croquetas: Dish = new Dish("CROQUETAS DE ATÚN", "STARTER", [{ingredient: milk, amountInGrams: 500}, {ingredient: tuna, amountInGrams: 100}, {ingredient: cornmeal, amountInGrams: 20}, {ingredient: oliveOil, amountInGrams: 100}, {ingredient: egg, amountInGrams: 150}, {ingredient:liquidCream, amountInGrams: 140}, {ingredient: breadCrumbs, amountInGrams: 30}]);
/*2*/let surtido: Dish = new Dish("SURTIDO DE CHACINA", "STARTER", [{ingredient: cheese, amountInGrams: 50}, {ingredient: serranoHam, amountInGrams: 50}, {ingredient: chorizo, amountInGrams: 20}, {ingredient: bloodSausage, amountInGrams: 100}]);
/*3*/let ensaladilla: Dish = new Dish("ENSALADILLA RUSA", "STARTER", [{ingredient: egg, amountInGrams: 100}, {ingredient: potato, amountInGrams: 250}, {ingredient: carrot, amountInGrams: 80}, {ingredient: tuna, amountInGrams: 160}, {ingredient: mayonnaise, amountInGrams: 600}, {ingredient: olives, amountInGrams: 30}, {ingredient: redPepper, amountInGrams: 30}]);
/*4*/let sardinas: Dish = new Dish("SARDINAS", "STARTER", [{ingredient: sardines, amountInGrams: 300}, {ingredient: oliveOil, amountInGrams: 25}, {ingredient: limon, amountInGrams: 80}]);
/*5*/let pulpo: Dish = new Dish("PULPO A LA VINAGRETA", "STARTER", [{ingredient: octopus, amountInGrams: 400}, {ingredient: oliveOil, amountInGrams: 25}, {ingredient: greenPepper, amountInGrams: 80}, {ingredient: redPepper, amountInGrams: 40}, {ingredient: parsley, amountInGrams: 10}, {ingredient: vinegar, amountInGrams:10}]);

/*6*/let arrozCubana: Dish = new Dish("ARROZ A LA CUBANA", "FIRSTCOURSE", [{ingredient: whiteRice, amountInGrams: 200}, {ingredient: banana, amountInGrams: 50}, {ingredient: egg, amountInGrams: 104}, {ingredient: garlic, amountInGrams: 15}, {ingredient: sausage, amountInGrams: 160}]);
/*7*/let sopaPescado: Dish = new Dish("SOPA DE PESCADO", "FIRSTCOURSE", [{ingredient: noodles, amountInGrams: 125}, {ingredient: clams, amountInGrams: 350}, {ingredient: cod, amountInGrams: 700}, {ingredient: carrot, amountInGrams: 80}, {ingredient: parsley, amountInGrams: 3}, {ingredient: celery, amountInGrams: 10}]);
/*8*/let estofado: Dish = new Dish("ESTOFADO", "FIRSTCOURSE", [{ingredient: veal, amountInGrams: 605}, {ingredient: greenPeas, amountInGrams: 120}, {ingredient: potato, amountInGrams: 400}, {ingredient: carrot, amountInGrams: 80}, {ingredient: cebolla, amountInGrams: 45}, {ingredient: celery, amountInGrams: 10}]);
/*9*/let puchero: Dish = new Dish("PUCHERO CANARIO", "FIRSTCOURSE", [{ingredient: chickpea, amountInGrams: 300}, {ingredient: greenPepper, amountInGrams: 90}, {ingredient: potato, amountInGrams: 400}, {ingredient: carrot, amountInGrams: 100}, {ingredient: tomatoe, amountInGrams: 50}, {ingredient: redPepper, amountInGrams: 10}, {ingredient: cabbage, amountInGrams: 30}, {ingredient: beans, amountInGrams: 100}, {ingredient: pumpkin, amountInGrams: 230}, {ingredient: chicken, amountInGrams: 120}, {ingredient: zucchini, amountInGrams: 90}, {ingredient: oliveOil, amountInGrams: 10}]);
/*10*/let macarrones: Dish = new Dish("MACARRONES", "FIRSTCOURSE", [{ingredient: macaroni, amountInGrams: 600}, {ingredient: tomatoe, amountInGrams: 200}, {ingredient: cheese, amountInGrams: 120}]);

/*11*/let cesarSalad: Dish = new Dish("CESAR-SALAD", "SECONDCOURSE", [{ingredient:lettuce, amountInGrams: 100}, {ingredient: tomatoe, amountInGrams: 60}, {ingredient: oliveOil, amountInGrams: 20}, {ingredient: egg, amountInGrams: 53}, {ingredient: cheese, amountInGrams: 50}, {ingredient: garlic, amountInGrams: 15}, {ingredient: beet, amountInGrams: 30}, {ingredient: carrot, amountInGrams: 58}, {ingredient: avocado, amountInGrams: 40}]);
/*12*/let tortilla: Dish = new Dish("TORTILLA", "SECONDCOURSE", [{ingredient: egg, amountInGrams: 50}, {ingredient: potato, amountInGrams: 200}]);
/*13*/let merluza: Dish = new Dish("MERLUZA CON PAPAS", "SECONDCOURSE", [{ingredient: hake, amountInGrams: 300}, {ingredient: potato, amountInGrams: 200}, {ingredient: cebolla, amountInGrams: 30}, {ingredient: redPepper, amountInGrams: 20}, {ingredient: garlic, amountInGrams: 15}]);
/*14*/let chuletas: Dish = new Dish("CHULETAS", "SECONDCOURSE", [{ingredient: porkChop, amountInGrams: 300}, {ingredient: potato, amountInGrams: 200}]);
/*15*/let sargo_: Dish = new Dish("SARGO CON PAPAS", "SECONDCOURSE", [{ingredient: sargo, amountInGrams: 300}, {ingredient: potato, amountInGrams: 200}, {ingredient: redPepper, amountInGrams:30}, {ingredient:greenPepper, amountInGrams: 40}]);

/*16*/let natilla: Dish = new Dish("NATILLA", "DESSERT", [{ingredient: milk, amountInGrams: 100}, {ingredient: limon, amountInGrams: 80}]);
/*17*/let tiramisu: Dish = new Dish("TIRAMISÚ", "DESSERT", [{ingredient: cheese, amountInGrams: 500}, {ingredient: egg, amountInGrams: 100}, {ingredient: coffee, amountInGrams: 350}, {ingredient: cornmeal, amountInGrams:100}, {ingredient: cocoa, amountInGrams: 30}]);
/*18*/let flan: Dish = new Dish("FLAN", "DESSERT", [{ingredient: milk, amountInGrams: 100}, {ingredient: egg, amountInGrams: 160}, {ingredient: limon, amountInGrams: 10}, {ingredient: cinnamon, amountInGrams: 20}]);
/*19*/let bananaSplit: Dish = new Dish("BANANA SPLIT", "DESSERT", [{ingredient: milk, amountInGrams: 400}, {ingredient: banana, amountInGrams: 80}, {ingredient: strawberry, amountInGrams: 60}, {ingredient: whippedCream, amountInGrams: 175}]);
/*20*/let cheeseCake: Dish = new Dish("TARTA DE QUESO", "DESSERT", [{ingredient: butter, amountInGrams: 100}, {ingredient: cheese, amountInGrams: 500}, {ingredient: liquidCream, amountInGrams: 400}, {ingredient: strawberry, amountInGrams: 200}]);


// List of menu (5-10 per type of menu)
let menu1: Menu = new Menu("MENU DEL CHEF", 16, [pulpo, estofado, sargo_, tiramisu]);
let menu2: Menu = new Menu("ESPECIAL DEL MAR", 10, [sardinas, sopaPescado, merluza, cheeseCake]);
let menu3: Menu = new Menu("VIVA ESPAÑA", 10, [surtido, puchero, tortilla, natilla]);
let menu4: Menu = new Menu("EXPERIENCIA EXTRANJERA", 10, [ensaladilla, arrozCubana, cesarSalad, bananaSplit]);
let menu5: Menu = new Menu("MENU INFANTIL", 8, [croquetas, macarrones, chuletas, flan]);