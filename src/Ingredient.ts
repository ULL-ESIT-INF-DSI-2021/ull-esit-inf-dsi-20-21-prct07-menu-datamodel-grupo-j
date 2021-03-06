export type ingredientType = "CARNES-HUEVOS-LEGUMBRES" |"VERDURAS-HORTALIZAS" | "LACTEOS" | "CEREALES" | "FRUTAS"; 

export class Ingredient {

  name: string;
  location: string;
  ingredientGroup: ingredientType;
  nutrients: {carbohydrates: number, proteins: number, lipids: number};
  pricePerKg: number;

  /**
   * Contructor del alimento
   * @param name Nombre del ingrediente
   * @param location Pais o ciudad de procedencia
   * @param ingredientGroup  Grupo de alimentos
   * @param nutrients Cantidad de nutrientes de cada tipo por cada 100g del alimento
   * @param pricePerKg Precio por kilogramo del alimento 
   */
  constructor(name: string, location: string, ingredientGroup: ingredientType, nutrients: {carbohydrates: number, proteins: number, lipids: number}, pricePerKg: number) {
    this.name = name;
    this.location = location;
    this.ingredientGroup = ingredientGroup;
    this.nutrients = nutrients;
    this.pricePerKg = pricePerKg;
  }

  /**
   * @returns name, nombre del ingrediente
   */
  getName(){
    return this.name;
  }

  /**
   * @returns location, localización u origen del ingrediente
   */
  getLocation(){
    return this.location;
  }

  /**
   * @returns ingredientGroup, grupo del ingrediente al que pertenece
   */
  getIngredientGroup(){
    return this.ingredientGroup;
  }

  /**
   * @returns nutrients, composición nutricional
   */
  getNutrients(): {carbohydrates: number, proteins: number, lipids: number}{
    return this.nutrients;
  }
  
  /**
   * @return pricePerKg, precio por kilo del ingrediente 
   */
  getPricePerKg(){
    return this.pricePerKg;
  }

  /**
   * Cambia el nombre del ingrediente
   * @param newName Nuevo nombre del ingrediente
   */
  setName(newName: string): void {
    this.name = newName;
  }

  /**
   * Cambia el precio del ingrediente
   * @param newPrice Nuevo precio del ingrediente
   */
  setPrice(newPrice: number): void {
    this.pricePerKg = newPrice;
  }

  /**
   * Cambia la composicion nutricional
   * @param newNutrients asigna la composición nutricional
   */
  setNutrients(newNutrients: {carbohydrates: number, proteins: number, lipids: number}): void {
      this.nutrients = newNutrients;
  }

  /**
   * Método que imprime los ingredientes, su grupo y composición nutricional
   */
  print(){
    console.log(this.getName() + "\t" + "Group: " + this.getIngredientGroup() + "\tcarbohydrates: " + this.getNutrients().carbohydrates + "  Proteins: " + this.getNutrients().proteins + "  Lipids: "+ this.getNutrients().lipids + "\n");
  }
}