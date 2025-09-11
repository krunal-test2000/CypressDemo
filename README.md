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
   # or
   yarn install
2. **Open Cypress Test Runner**  
   
    `npx cypress open`

3. **Run tests headlessly**

    `npx cypress run`


4. **Run a specific spec file**
e.g.

npx cypress run --spec "cypress/e2e/login.spec.js"

📂 Suggested Folder Structure

Here’s how your project is or might be organised:

```
CypressDemo/
├── package.json
├── package-lock.json
├── cypress.config.js
├── .vscode/                  # Optional: Navigation from feature to step definition
├── cypress/
│   ├── e2e/                  # Your test/spec files
│   │   ├── registration.spec.js
│   │   ├── login.spec.js
│   │   ├── product-search.spec.js
│   │   └── checkout.spec.js
│   ├── fixtures/             # Test data (JSON or other formats)
│   ├── support/              # Custom commands, setup/teardown, utilities
│   │   ├── commands.js
│   │   └── e2e.js
│   ├── screenshots/          # Automatically captured screenshots
│   └── videos/               # Test run videos if enabled
└── node_modules/
```

🔧 Configuration Notes

The configuration file cypress.config.js controls base URL, timeouts, viewport size, etc.

You can add environment variables or custom commands under cypress/support/

Screenshots / video recordings can be enabled or disabled via config

📝 Notes

✅ Tests run in the browser(s) supported by Cypress (Chrome, Electron etc.)

📋 One test spec per user flow makes tests easier to manage

🤝 Contributing

Love to have your input!

Fork the repository

Create a branch: git checkout -b feature/your-feature

Write your tests, add any fixtures / support code needed

Run locally to make sure everything passes

Raise a Pull Request with what you’ve done
