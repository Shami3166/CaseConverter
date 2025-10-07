# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```




/case-converter-app
├── /src
│ ├── /public
│ │ ├── robots.txt
│ │ ├── sitemap.xml
│ │
│ ├── /components
│ │ ├── Navbar.tsx
│ │ ├── Footer.tsx
│ │ ├── CaseConverter.tsx
│ │ └── FAQ.tsx
│ │
│ ├── /pages
│ │ ├── index.tsx .. (main tool page )
│ │ ├── About.tsx
│ │ ├── Contact.tsx
│ │ ├── PrivacyPolicy.tsx
│ │ └── TermsOfService.tsx
│ │ └── sitemap.xml.tsx
│ │ └── /blogs
│ │       └── /how-to-change-text-case-mobile.tsx
│ │       └── /why-proper-capitalization-matters.tsx
│ │       └── /common-text-case-mistakes.tsx
│ │       └── /how-to-change-text-case-microsoft-word.tsx
│ │       └── /how-to-change-text-case-google-sheets.tsx
│ │       └── /how-to-change-text-case-google-docs.tsx
│ ├── /hooks
│ │ └── useCaseConverter.ts ← KEEP (performance helper)
│ ├── /routes
│ │ └── appRoutes
│ │
│ ├── /utils
│ │ └── caseConverter.ts ← KEEP (performance helper)
│ │
│ ├── App.tsx
│ └── main.tsx
├── /gitignore
├── /index.html
├── /package-lock.json
├── /package.json
├── /README.md
├── /eslint.config.js
├── /tsconfig.app.json
├── /tsconfig.node.json
├── /tsconfig.json
├── /vite.config.ts
├── /vercel.json









case-converter-nextjs/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx                          ← Main tool (home page)
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── privacy-policy/
│   │   └── page.tsx
│   ├── terms-of-service/
│   │   └── page.tsx
│   ├── sitemap.xml/
│   │   └── route.tsx
│   ├── robots.txt/
│   │   └── route.tsx
│   └── blogs/
│       ├── how-to-change-text-case-mobile/
│       │   └── page.tsx
│       ├── why-proper-capitalization-matters/
│       │   └── page.tsx
│       ├── common-text-case-mistakes/
│       │   └── page.tsx
│       ├── how-to-change-text-case-microsoft-word/
│       │   └── page.tsx
│       ├── how-to-change-text-case-google-sheets/
│       │   └── page.tsx
│       └── how-to-change-text-case-google-docs/
│           └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── CaseConverter.tsx
│   └── FAQ.tsx
├── hooks/
│   └── useCaseConverter.ts
├── utils/
│   └── caseConverter.ts
├── lib/
│   └── utils.ts                         ← shadcn/utils (auto-generated)
├── public/
│   ├── (your static assets if any)
├── tailwind.config.ts
├── components.json
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md