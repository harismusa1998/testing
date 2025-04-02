const {test, expect} = require ('@playwright/test')

test('Changing Prio', async({page})=>{
    await page.goto('https://jira.trungk18.com/project/board');
    await page.getByRole('button',{name:"Tetris"}).click();
    await page.getByText("Angular Spotify", { timeout: 10_000 }).click();
    await page.getByText("Highest", { timeout: 10_000 }).click();
    await page.getByText('Lowest').click();
})