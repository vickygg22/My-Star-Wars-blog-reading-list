const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favorites: []
		},
		actions: {
			addFavorites: (name) => {
				const store = getStore();
				if(store.favorites.includes(name)){
					return;
				} else {
					setStore({favorites: [...store.favorites, name]})
				}
			},
			deleteFavorites: (index) => {
				const store = getStore();
				setStore({favorites: [
					...store.favorites.slice(0, index),
					...store.favorites.slice(index + 1, store.favorites.length)
					]})
			},
			// Use getActions to call a function within a function
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
