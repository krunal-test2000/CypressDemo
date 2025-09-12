# 🧪 CypressDemo

Automated testing with **Cypress** — end-to-end tests for user flows, using BDD style where needed.  

---

## 📦 What’s Inside

* Cypress Test Framework (JavaScript / TypeScript) for end-to-end testing

* cypress.config.js – central configuration for Cypress tests

* Example Specs / Test Files located under the cypress/ folder, including:

* e2e/features/ – Cucumber .feature files

* pages/ – Page Object Model (POM) files

* fixtures/ – Test data (JSON, CSV, etc.)

* support/ – Step definitions, custom commands, and global support scripts

* package.json / package-lock.json – project dependencies and scripts

* .vscode/ – optional VS Code settings for smoother navigation between feature files and step definitions

* Reports, Screenshots & Videos automatically generated under cypress/reports/, cypress/screenshots/, and cypress/videos/

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

✅ One test spec per user flow makes tests easier to manage

✅.vscode/ folder contains optional settings for navigation from feature files to step definitions.

✅ Page objects are organized under cypress/pages/ for easier maintenance.

✅ Use fixtures/ for storing reusable test data (JSON, etc.).


