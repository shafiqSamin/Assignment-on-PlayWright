## Project Setup

- Clone the Repository:
  - Open your terminal and run git clone <repository-url>.

- Navigate to the Project Directory:
  - Change to the project directory with cd <project-directory>.

- Install Dependencies:
  - Run npm ci to install dependencies.

- Run Tests:
  - Execute tests with npx playwright test.

- Additional Steps (if needed):

  - Check Node.js Installation:
    - Ensure Node.js is installed (node -v and npm -v).

  - Set Environment Variables:
    - Create a .env file for necessary variables like DATABASE_URL and API_KEY.

  - Update Playwright:
    - Run npx playwright install to update Playwright.

  - Run Specific Tests:
    - Use npx playwright test <test-file-or-directory> for specific tests.

  - View Test Results:
    - Check the playwright-report directory for test results.


<h1>Positive test case</h1>
<h3>Successful Login with Valid Credentials</h3>
Input valid username and password.
Verify successful login by checking for elements on the dashboard page.

## Negative Test Cases

### Login with Invalid Username

1. Input an invalid username and a valid password.
2. Verify that an appropriate error message is displayed.

### Login with Invalid Password

1. Input a valid username and an invalid password.
2. Verify that an appropriate error message is displayed.

### Validation of Login

After each login attempt:

- For successful logins:
  - Verify the presence of elements unique to the dashboard page.
- For unsuccessful logins:
  - Validate the presence of error messages.

### Output
![ADMIN_login1](https://github.com/shafiqSamin/Assignment-on-PlayWright/assets/103017470/15720778-9343-4474-878e-52bfdbb13e3b)

