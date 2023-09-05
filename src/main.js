import "./app.css";
import App from "./App.svelte";
import "./i18n";
import './router'

const app = new App({
	target: document.getElementById("app")
});

export default app;
