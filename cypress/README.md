## run Tests

<!-- run test from the terminal in headless node -->
cypress run

<!-- run test from the terminal -->
cypress run --headed

<!-- run a specific test in headless node-->
node_modules/.bin/cypress run --spec cypress/integration/examples/actions.spec.js

<!-- run with chrome browser -->
node_modules/.bin/cypress run --browser chrome cypress/integration/examples/actions.spec.js

<!-- run test with recording projectid -->
npx cypress run --record --key 8fe8965f-1de8-4ec3-8dad-482a7f976d89
