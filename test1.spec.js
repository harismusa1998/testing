const {test, expect} = require ('@playwright/test')

test('Launch application', async({page})=>{
    await page.goto('https://jira.trungk18.com/project/board');
    await expect(page).toHaveTitle('Angular Jira Clone with Akita and TailwindCSS - by trungk18');
    await page.locator ("xpath=//*[@id='content']/board/div/board-filter/div/form/j-input/div/input").fill("is")
    await page.click("xpath=//*[@id='Backlog']/issue-card[1]/div/div/p")
})
