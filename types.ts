export interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  cookTime: string;
  servings: number;
}

export interface AITip {
    title: string;
    description: string;
}

export enum AIFeature {
    Translate = 'Translate',
    ManualHelper = 'ManualHelper',
    TipsAndMods = 'TipsAndMods',
}

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

export interface GeneratorCriteria {
    ingredients: string;
    cuisine: string;
    orientation: 'protein' | 'carbs' | 'balanced';
    isVegan: boolean;
}
