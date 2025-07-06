import React, { useState, useCallback } from 'react';
import { Recipe, GeneratorCriteria } from './types';
import { generateRecipes } from './services/geminiService';
import Header from './components/Header';
import RecipeCard from './components/RecipeCard';
import RecipeDetail from './components/RecipeDetail';
import RecipeGenerator from './components/RecipeGenerator';
import { BookOpenIcon } from './components/icons/BookOpenIcon';
import { LoadingSpinner } from './components/icons/LoadingSpinner';
import { SparklesIcon } from './components/icons/SparklesIcon';


const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatorCriteria, setGeneratorCriteria] = useState<GeneratorCriteria | null>(null);

  const handleGenerate = useCallback(async (criteria: GeneratorCriteria) => {
    setIsLoading(true);
    setError(null);
    setGeneratorCriteria(criteria);
    try {
        const newRecipes = await generateRecipes(criteria);
        setRecipes(newRecipes);
        setSelectedRecipe(newRecipes.length > 0 ? newRecipes[0] : null);
    } catch (e: any) {
        setError(e.message || 'Ocurrió un error desconocido.');
        setGeneratorCriteria(null); // Reset to show form again on error
    } finally {
        setIsLoading(false);
    }
  }, []);

  const handleGenerateMore = useCallback(async () => {
    if (!generatorCriteria) return;
    setIsLoading(true);
    setError(null);
    try {
        const moreRecipes = await generateRecipes(generatorCriteria);
        setRecipes(prev => [...prev, ...moreRecipes]);
    } catch (e: any) {
        setError(e.message || 'Ocurrió un error desconocido.');
    } finally {
        setIsLoading(false);
    }
  }, [generatorCriteria]);

  if (!generatorCriteria && !isLoading) {
      return <RecipeGenerator onGenerate={handleGenerate} isLoading={isLoading} error={error} />
  }
  
  if (isLoading && recipes.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <div className="text-center">
                 <div className="flex items-center justify-center text-emerald-500">
                    <LoadingSpinner className="h-10 w-10"/>
                    <span className="text-2xl font-bold ml-4 text-gray-800 dark:text-gray-200">Generando tus deliciosas recetas...</span>
                 </div>
                 <p className="mt-4 text-lg text-gray-500">¡La IA está calentando los fogones!</p>
            </div>
        </div>
      );
  }

  return (
    <div className="flex h-screen w-full font-sans">
      <aside className="w-1/3 max-w-sm h-full flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <Header />
        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isSelected={selectedRecipe?.id === recipe.id}
              onSelect={() => setSelectedRecipe(recipe)}
            />
          ))}
           <button
              onClick={handleGenerateMore}
              disabled={isLoading}
              className="w-full mt-4 bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-emerald-700 transition duration-300 flex items-center justify-center disabled:bg-gray-400"
            >
              {isLoading ? <LoadingSpinner className="-ml-1 mr-2 h-5 w-5" /> : <><SparklesIcon className="w-5 h-5 mr-2"/>Generar Más</>}
            </button>
            {error && !isLoading && <div className="p-3 mt-4 bg-red-100 text-red-700 border border-red-300 rounded-lg text-center text-sm">{error}</div>}
        </div>
      </aside>

      <main className="flex-1 h-full overflow-y-auto">
        {selectedRecipe ? (
          <RecipeDetail recipe={selectedRecipe} />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <BookOpenIcon className="w-24 h-24 mb-4" />
            <h2 className="text-2xl font-bold">No se encontraron recetas</h2>
            <p className="mt-2 text-lg">Hubo un problema al generar las recetas. Por favor, inténtalo de nuevo.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;