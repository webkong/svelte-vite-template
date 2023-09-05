import { register, init } from "svelte-i18n";

register("en", () => import("./lang/en.json"));
register("zh", () => import("./lang/zh.json"));

init({
	fallbackLocale: "en",
	// initialLocale: getLocaleFromNavigator()
});
