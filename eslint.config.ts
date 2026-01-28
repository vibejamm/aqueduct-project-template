// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import globals from "globals";
import tseslint from "typescript-eslint";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

export default tseslint.config({
    ignores: ["dist", "node_modules", "functions", ".features-gen", ".venv", ".idx", "**/*.json", "**/*.css", "**/*.md", "docs", "public", "playwright-report", "test-results", ".firebase", "storybook-static", "assignments", "extensions", "config", "data", "debug", ".shopify", ".github", ".git", ".husky", ".vscode", ".confidential", "tmp", "scripts"],
}, {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },
    settings: {
        react: {
            version: "detect",
        },
    },
}, pluginJs.configs.recommended, ...tseslint.configs.recommended, {
    files: ["**/*.{jsx,tsx}"],
    ...pluginReact.configs.flat.recommended,
}, {
    files: ["**/*.{jsx,tsx}"],
    plugins: { "react-hooks": pluginReactHooks },
    rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/react-in-jsx-scope": "off",
    },
}, {
    files: ["**/*.js", "**/*.cjs"],
    rules: {
        "@typescript-eslint/no-require-imports": "off",
    }
}, {
    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/ban-ts-comment": "off",
    }
}, storybook.configs["flat/recommended"], {
    files: ["src/stories/**/*"],
    rules: {
        "storybook/no-renderer-packages": "off",
        "react/react-in-jsx-scope": "off",
    }
});
