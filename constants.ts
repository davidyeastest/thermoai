
import { Recipe } from './types';

export const RECIPES: Recipe[] = [
  {
    id: 1,
    title: 'Gazpacho Andaluz',
    description: 'A classic cold soup from southern Spain, perfect for hot summer days. Refreshing, healthy, and full of flavor.',
    image: 'https://picsum.photos/seed/gazpacho/800/600',
    prepTime: '15 min',
    cookTime: '0 min',
    servings: 6,
    ingredients: [
      '1 kg ripe tomatoes, roughly chopped',
      '1 Italian green pepper, seeded and chopped',
      '1 cucumber, peeled and chopped',
      '1/2 red onion, chopped',
      '1 clove garlic, peeled',
      '50g stale bread, crusts removed',
      '75ml extra virgin olive oil',
      '30ml sherry vinegar',
      'Salt to taste',
      'Cold water (optional)'
    ],
    instructions: [
      'Place all vegetables (tomatoes, pepper, cucumber, onion, garlic) into the Thermomix bowl.',
      'Blend for 30 seconds at speed 5.',
      'Add the bread, olive oil, vinegar, and salt.',
      'Blend for 2 minutes at speed 10 until very smooth.',
      'If the gazpacho is too thick, add a little cold water and mix for a few seconds at speed 3.',
      'Chill in the refrigerator for at least 1 hour before serving.',
      'Serve cold, garnished with finely diced cucumber, pepper, and croutons.'
    ]
  },
  {
    id: 2,
    title: 'Mushroom Risotto (Risotto ai Funghi)',
    description: 'A creamy and comforting Italian classic. The Thermomix makes stirring this risotto to perfection effortless.',
    image: 'https://picsum.photos/seed/risotto/800/600',
    prepTime: '10 min',
    cookTime: '25 min',
    servings: 4,
    ingredients: [
      '40g Parmesan cheese, in pieces',
      '1 onion, halved',
      '2 cloves garlic',
      '30g butter',
      '20g olive oil',
      '300g Arborio or Carnaroli rice',
      '50ml dry white wine',
      '850g vegetable or chicken broth, hot',
      '250g mushrooms, sliced',
      'Fresh parsley, chopped, for garnish',
      'Salt and black pepper to taste'
    ],
    instructions: [
      'Place Parmesan cheese in the bowl and grate for 10 seconds at speed 10. Set aside.',
      'Place onion and garlic in the bowl. Chop for 5 seconds at speed 5.',
      'Scrape down the sides. Add butter and olive oil. Sauté for 3 minutes at 120°C, speed 1.',
      'Add the mushrooms and cook for 5 minutes at 100°C, reverse direction, speed spoon.',
      'Add the rice and toast for 3 minutes at 120°C, reverse direction, speed 1, without the measuring cup.',
      'Add the white wine and cook for 1 minute at 100°C, reverse direction, speed 1, without the measuring cup.',
      'Add the hot broth, salt, and pepper. Cook for 15-18 minutes at 100°C, reverse direction, speed spoon. Place simmering basket on lid instead of measuring cup.',
      'Let it rest in the bowl for 1 minute. Stir in the grated Parmesan cheese and serve immediately with fresh parsley.'
    ]
  },
    {
    id: 3,
    title: 'Soupe à l\'oignon (French Onion Soup)',
    description: 'A rich and savory soup with deeply caramelized onions, beef broth, and a cheesy crouton topping.',
    image: 'https://picsum.photos/seed/onionsoup/800/600',
    prepTime: '15 min',
    cookTime: '50 min',
    servings: 4,
    ingredients: [
        '100g Gruyère cheese, cubed',
        '4 large yellow onions (about 1kg), peeled and thinly sliced',
        '50g unsalted butter',
        '1 tbsp sugar',
        '1 litre beef broth',
        '250ml dry white wine (like Sauvignon Blanc)',
        '2 sprigs fresh thyme',
        '1 bay leaf',
        'Salt and freshly ground black pepper',
        '4-8 slices of baguette, toasted',
        '1 clove garlic, halved'
    ],
    instructions: [
        'Place Gruyère cheese into the mixing bowl and grate 10 sec/speed 8. Set aside.',
        'Without cleaning the bowl, place butterfly whisk. Add sliced onions and butter. Cook 20 min/120°C/speed 1.',
        'Remove butterfly whisk. Add sugar and cook for another 10 min/Varoma/speed 1, with the simmering basket on the lid to prevent splashing.',
        'Add wine, broth, thyme, and bay leaf. Season with salt and pepper. Cook 20 min/100°C/reverse/speed spoon.',
        'Preheat the oven grill.',
        'Rub the toasted baguette slices with the cut side of the garlic clove.',
        'Ladle soup into oven-safe bowls. Top each with 1-2 slices of baguette and a generous amount of grated Gruyère.',
        'Place bowls under the grill for 2-4 minutes, or until cheese is melted and bubbly. Serve immediately.'
    ]
  }
];
