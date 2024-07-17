import globals from "globals";
import pluginJs from "@eslint/js";

export default [
	{
		languageOptions: {
			globals: globals.browser,
		},
	},
	{
		ignores: ["dist/", "webpack.config.js"],
	},
	pluginJs.configs.recommended,
];
