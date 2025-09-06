//pom


class amazon{
    constructor (page){
        this.page=page
        this.site=page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        this.user=page.locator('//input[@name="username"]')
        this.pass=page.locator('//input[@type="password"]')
        this.button=page.locator('//button[@type="submit"]')

    }
    async login(nam,pwd){
        await this.user.fill(nam);
        await this.pass.fill(pwd)
        await this.button.click()
    }
}
export default amazon;
