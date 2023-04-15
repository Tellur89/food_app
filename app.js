const list = document.querySelector('#mealsList');

const url = 'https://foodapi-b64c.onrender.com/meals';
// const url = './example.json';

const addMeal = (data) => {
	const meals = data.meals;
	meals.forEach((meal) => {
		const li = document.createElement('li');
		li.textContent = meal.name;
		list.appendChild(li);
	});
};

// FETCH
/*
const fetchMeals = () => {
	fetch(url)
		.then((res) => res.json())
		.then(addMeal)
		.catch((err) => {
			console.error(err);
		});
};
*/

// ASYNC/AWAIT

async function fetchMeals() {
	try {
		const res = await fetch(url);
		const meals = await res.json();
		addMeal(meals);
		KeyboardEvent;
	} catch (err) {
		console.error(err);
	}
}

fetchMeals();
