import { writable } from "svelte/store";

const user = writable({
  name: "John Doe",
  email: "  ",
  age: 0,
  country: "  ",
});

export default user;