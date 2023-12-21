export type Ingredient = {
    name: string;
    quantity: string;
};
  
  export type Recipe = {
    id: number;
    name: string;
    category: 'Trending' | 'Recent';
    image: string;
    servings: number;
    ingredients: Ingredient[];
};
  