const {test, expect} = require ('@playwright/test')

test('Launch Buttons', async({page})=>{
    await page.goto('https://jira.trungk18.com/project/board');
    await page.getByRole('button',{name:"Tetris"}).click();
    //await page.getByText("Tetris").click();
})
