## Migrating ESLint 9.x in a Typescript project

The ESLint team has developed a migrator tool to help convert legacy config files (e.g., .eslintrc\*) to the flat config.

```
npx @eslint/migrate-config .eslintrc.*
```

## Setup

```
npm init @eslint/config@latest

 npm i -D eslint@latest
```

Sure! Here's a detailed explanation of each change in ESLint 9.0.0 with comprehensive examples:

### 1. **Node.js < v18.18, v19 Are No Longer Supported**

**Change**: ESLint 9.0.0 no longer supports Node.js versions older than 18.18 or the v19 series.

**Example**:
If you are currently using Node.js version 16.x.x or Node.js 19.x.x:

```bash
node -v # Outputs: v16.x.x or v19.x.x
```

You need to upgrade to at least Node.js 18.18:

```bash
node -v # Outputs: v18.18.0 or later
```

### 2. **New Default Config Format (`eslint.config.js`)**

**Change**: ESLint 9.0.0 introduces a new flat configuration format using a single JavaScript file (`eslint.config.js`).

**Old Configuration**:

- `.eslintrc.json`:

  ```json
  {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": "eslint:recommended",
    "rules": {
      "no-unused-vars": "warn",
      "eqeqeq": "error"
    }
  }
  ```

- `package.json`:
  ```json
  {
    "name": "my-project",
    "version": "1.0.0",
    "eslintConfig": {
      "extends": "eslint:recommended",
      "rules": {
        "semi": ["error", "always"]
      }
    }
  }
  ```

### 3. **Removed Multiple Formatters**

**Change**: ESLint 9.0.0 supports only one formatter at a time.

**Example**:
If you previously used multiple formatters:

```bash
eslint --format json --format codeframe .
```

You now need to choose a single formatter:

```bash
eslint --format json . # Only JSON formatter will be used
```

### 4. **Removed `require-jsdoc` and `valid-jsdoc` Rules**

**Change**: ESLint has removed the `require-jsdoc` and `valid-jsdoc` rules.

**Example**:
If you had:

```javascript
// eslintrc.js
module.exports = {
  rules: {
    "require-jsdoc": "error",
    "valid-jsdoc": "error",
  },
};
```

You’ll need to use external tools like JSDoc linters instead of relying on these rules.

**Old JSDoc Example**:

```javascript
/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The sum of a and b.
 */
function add(a, b) {
  return a + b;
}
```

### 5. **`eslint:recommended` Has Been Updated**

**Change**: The `eslint:recommended` preset has new and updated rules.

**Example**:
Previously, if you used:

```javascript
// eslintrc.js
module.exports = {
  extends: "eslint:recommended",
};
```

After the update, new rules and changes may result in additional warnings or errors. You might need to adjust your code to comply with these new rules.

### 6. **`--quiet` No Longer Runs Rules Set to "warn"**

**Change**: The `--quiet` option now only runs rules set to "error".

**Example**:
Previously, running:

```bash
eslint --quiet .
```

would suppress warnings, including those from rules like `no-unused-vars` if it was set to "warn".

With the new behavior:

- **Old Configuration**:

  ```javascript
  // eslintrc.js
  module.exports = {
    rules: {
      "no-unused-vars": "warn",
      eqeqeq: "error",
    },
  };
  ```

- **Command**:

  ```bash
  eslint --quiet .
  ```

  - **Before**: Both warnings and errors would be processed, but warnings would not be displayed.
  - **After**: Only `eqeqeq` errors are processed; `no-unused-vars` warnings are ignored.

### 7. **Multiple `/* eslint */` Comments for the Same Rule Are Now Disallowed**

**Change**: You cannot have multiple `/* eslint */` comments for the same rule in one file.

**Example**:
Previously, you could write:

```javascript
/* eslint no-console: "error" */
console.log("Error");
/* eslint no-console: "warn" */ // This is now disallowed
console.log("Error");
```

You need to consolidate into a single comment:

```javascript
/* eslint no-console: "error" */
console.log("Error");
```

### 8. **New Checks in `no-implicit-coercion` by Default**

**Change**: The `no-implicit-coercion` rule now has additional checks.

**Example**:
Previously allowed:

```javascript
let str = "" + 123; // Implicit coercion of number to string
```

Now flagged:

```javascript
let str = String(123); // Use explicit coercion
```

### 9. **`varsIgnorePattern` Option of `no-unused-vars` No Longer Applies to Catch Arguments**

**Change**: The `varsIgnorePattern` option no longer applies to `catch` variables.

**Example**:
Previously, you could ignore the `error` variable:

```javascript
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^_" }] */

try {
  // code
} catch (error) {
  // Error variable was ignored if matching pattern
}
```

Now, `error` will be flagged if unused:

```javascript
try {
  // code
} catch (error) {
  // `error` will be flagged if unused
}
```

This detailed explanation should help you understand the changes in ESLint 9.0.0 and how they impact your configuration and code.
