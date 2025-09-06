


import {test,expect} from '@playwright/test'
import amazon from "C:/Users/khanp/OneDrive/Desktop/Demo/tests/amazon.js"

test("launch amazon browser", async ({page})=>{

const log=new amazon (page)
await log.login('Admin', 'admin123');
await page.close();

})
