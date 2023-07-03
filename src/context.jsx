import axios from "axios";
import { useContext, createContext, useEffect, useState } from "react";

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const req = `${allMealsUrl}${search}`;

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);

      setMeals(response.data.meals);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(req);
  }, [search]);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(text);
  };

  const handleSurprise = (e) => {
    e.preventDefault();
    fetchData(randomMealUrl);
  };

  const handleFavorites = (id) => {
    const selectedFav = meals.find((meal) => meal.idMeal === id);
    if (favorites.indexOf(selectedFav) > -1) return;
    setFavorites([...favorites, selectedFav]);
  };

  const removeFavorites = (id) => {
    const selectedArray = favorites.filter(
      (favorite) => favorite.idMeal !== id
    );
    setFavorites(selectedArray);
  };

  return (
    <AppContext.Provider
      value={{
        meals,
        handleInput,
        text,
        handleSearch,
        handleSurprise,
        loading,
        handleFavorites,
        favorites,
        removeFavorites
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
