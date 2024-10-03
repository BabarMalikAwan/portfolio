import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:5000/meals');
        if (!response.ok) {
          throw new Error('Failed to fetch meals.');
        }
        const data = await response.json();
        setMeals(data);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  if (isLoading) {
    return <section className={classes.mealsLoading}><p>Loading...</p></section>;
  }

  if (error) {
    return <section className={classes.mealsError}><p>{error}</p></section>;
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal._id}
      id={meal._id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;