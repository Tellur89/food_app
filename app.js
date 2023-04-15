const cards = document.querySelector('#cards');

const url = 'https://foodapi-b64c.onrender.com/meals';
// const url = 'https://raw.githubusercontent.com/Tellur89/food_API/main/meals.json';

const addMeal = (data) => {
	const meals = data;
	meals.forEach((meal) => {
		const card = document.createElement('div');
		card.className = 'card';
		card.setAttribute('style', 'width: 18rem');

		const cardImg = document.createElement('img');
		cardImg.className = 'card-img-top';
		cardImg.setAttribute('src', meal.img);
		card.appendChild(cardImg);

		const cardBody = document.createElement('div');
		cardBody.className = 'card-body';
		card.setAttribute('style', 'margin: 10px');
		card.appendChild(cardBody);

		const cardHeading = document.createElement('h5');
		cardHeading.className = 'card-title';
		cardHeading.textContent = meal.name;
		cardBody.appendChild(cardHeading);

		const cardParagraph = document.createElement('p');
		cardParagraph.className = 'card-text';
		cardParagraph.textContent = meal.price;
		cardBody.appendChild(cardParagraph);

		const cardButton = document.createElement('a');
		cardButton.className = 'btn btn-primary';
		cardButton.setAttribute('href', 'https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute');
		cardButton.textContent = 'Click Me!';
		cardBody.appendChild(cardButton);

		// li.textContent = meal.name;
		cards.appendChild(card);
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
