# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


// path('ticker2/', views.ticker2, name='ticker2'),
//     path('session-key-count/', views.session_key_count, name='session_key_count'),
// path('ticker1/', views.ticker1, name='ticker1'),
// path('top-paragraph/', views.top_paragraph, name='top_paragraph'),
// path('result-list/', views.result_list, name='result_list'),
// path('paragraph/', views.paragraph, name='paragraph'),
// path('app-and-game/', views.app_and_game, name='app_and_game'),


// path('create-ticker1/', views.create_ticker1, name='create_ticker1'),
// path('create-session-key/', views.create_session_key, name='create_session_key'),
// path('ticker1-update/<int:pk>/', views.ticker1_update, name='ticker1_update'),
// path('ticker1-delete', views.ticker1_delete, name='ticker1_delete'),

// path('create-ticker2/', views.create_ticker2, name='create_ticker2'),
// path('ticker2-update/<int:pk>/', views.ticker2_update, name='ticker2_update'),
// path('ticker2-delete', views.ticker2_delete, name='ticker2_delete'),

// path('create-top-paragraph/', views.create_top_paragraph, name='create_top_paragraph'),
// path('top-paragraph-update/<int:pk>/', views.top_paragraph_update, name='top_paragraph_update'),
// path('create-top-paragraph', views.create_top_paragraph, name='create_top_paragraph'),

// path('create-paragraph/', views.create_paragraph, name='create_paragraph'),
// path('paragraph-update/<int:pk>/', views.paragraph_update, name='paragraph_update'),
// path('paragraph-delete', views.paragraph_delete, name='paragraph_delete'),

// path('create-app-and-game/', views.create_app_and_game, name='create_app_and_game'),
// path('app-and-game-update/<int:pk>/', views.app_and_game_update, name='app_and_game_update'),
// path('app-and-game-delete', views.app_and_game_delete, name='app_and_game_delete'),