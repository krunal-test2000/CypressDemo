# 🧪 CypressDemo

Automated testing with **Cypress** — end-to-end tests for user flows, using BDD style where needed.  

---

## 📦 What’s Inside

- Cypress test framework (JS / TypeScript)  
- `cypress.config.js` for configuration  
- Example specs / test files under `cypress/` folder  
- `package.json` / `package-lock.json` for dependencies  
- `.vscode/` settings (optional)  

---

## ⚙️ Prerequisites

- Node.js (v14+ recommended)  
- npm or yarn installed  

---

## 🚀 How to Run Tests

1. **Install dependencies**  
   ```bash
   npm install
   
2. **Open Cypress Test Runner**  
   ```bash
    npx cypress open

3. **Run tests headlessly**
   ```bash
    npx cypress run

4. **Run a specific spec file**
e.g.
    ```bash
    npx cypress run --spec "cypress/e2e/login.spec.js"

📂 Suggested Folder Structure

Here’s how your project is or might be organised:

```
CypressDemo/
├── package.json
├── package-lock.json
├── cypress.config.js
├── .vscode/                  # Optional: VS Code settings for better navigation
├── cypress/
│   ├── e2e/                  # Feature files (Cucumber .feature files)
│   │   └── features/
│   │       ├── api.feature
│   │       └── checkout.feature
│   ├── fixtures/             # Test data (JSON, CSV, etc.)
│   ├── pages/                # Page Object files
│   │   ├── CartPage.js
│   │   ├── CheckoutPage.js
│   │   ├── HomePage.js
│   │   └── ProductPage.js
│   ├── support/              # Cypress support files
│   │   ├── step_definitions/
│   │   │   ├── apiSteps.js
│   │   │   └── checkoutSteps.js
│   │   ├── commands.js
│   │   └── e2e.js
│   ├── screenshots/          # Auto-saved screenshots on failure
│   ├── videos/               # Video recordings of test runs
│   └── reports/              # Generated reports
│       ├── mochawesome/
│       │   ├── assets/
│       │   └── videos/
│       ├── index.html
│       └── orderId.txt
└── node_modules/
```


📝 Notes

✅ Tests run in the browser(s) supported by Cypress (Chrome, Electron etc.)

📋 One test spec per user flow makes tests easier to manage


