const {test, expect} = require ('@playwright/test')

test('Launch Comment', async({page})=>{
    await page.goto('https://jira.trungk18.com/project/board');
    await page.locator("xpath=//*[@id='app-frame']").click();
    await page.locator("xpath=//*[@id='app-frame']/nz-spin/div/app-project/div/app-navigation/div/div/app-navbar-left/aside/div/div[3]/div/i/svg').fill('Test", { timeout: 100_000 }).click();
    await page.locator("xpath=//*[@id='cdk-overlay-7']/nz-modal-container/div/div/div/add-issue-modal/div/form/div[3]/input", { timeout: 10_000 }).fill('Test123');
    await page.getByText('Create Issue').click();
    await page.getByRole('issue-card').filter({hasText: 'Test123'});

})
