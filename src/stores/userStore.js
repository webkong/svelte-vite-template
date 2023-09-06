// 自定义store

import { writable } from "svelte/store";

const userStore = () => {
	let defaultUser = {
		name: "webkong",
		email: "",
		age: 0,
		country: ""
	};
	const { subscribe, set, update } = writable(defaultUser);

	return {
		subscribe,
		setName: (name) => update((n) => ({ ...n, name })),
		setEmail: (email) => update((n) => ({ ...n, email })),
		setAge: (age) => update((n) => ({ ...n, age })),
		setCountry: (country) => update((n) => ({ ...n, country })),
		setUserSync: async () => {
			await new Promise((resolve) => {
				setTimeout(() => {
          // set 会覆盖原有的值
					set({
						name: "webkong2222",
						email: "",
						age: 0,
						country: ""
					});
          resolve();
				}, 2000);
			});
		},
		reset: () => set(defaultUser)
	};
};

export let user = userStore();
