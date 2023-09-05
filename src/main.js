import "./app.css";
import App from "./App.svelte";
import './router'

const app = new App({
	target: document.getElementById("app")
});

export default app;
