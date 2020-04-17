const supertest = require('supertest');
//const app = require('../app');
const deployedApp = 'http://127.0.0.1:3000/api'; //this is for deployed backend url

describe("Testing the authentication API ENDPOINT", () => {

	it("tests the user login route with sample correct user data", async () => {

		const response = await supertest(deployedApp).post('/user/login').send({
			email: "test@test.com",
	        password: "testtest"
		});
        
        expect(response.status).toBe(200);
    });

    //////////////////////////////////////////////////////////////////////////

    it("tests the user login route with sample false user data", async () => {

		const response = await supertest(deployedApp).post('/user/login').send({
			email: "test@test.com",
	        password: "testtes"
		});
        
        expect(response.status).toBe(400);
    });
    
    //////////////////////////////////////////////////////////////////////////

    it("tests the hospital login route with sample correct hospital login data", async () => {

		const response = await supertest(deployedApp).post('/hospital/login').send({
			email: "test@test.com",
	        password: "testtest"
		});
        
        expect(response.status).toBe(200);
    });
    
    //////////////////////////////////////////////////////////////////////////

    it("tests the hospital login route with sample false hospital login data", async () => {

		const response = await supertest(deployedApp).post('/hospital/login').send({
			email: "test@test.com",
	        password: "testtes"
		});
        
        expect(response.status).toBe(400);
    });
    
    //////////////////////////////////////////////////////////////////////////

    it("tests the user register route with sample mock data", async () => {

        const randomNumber = Math.floor(Math.random() * 1000); 

		const response = await supertest(deployedApp).post('/user/register').send({
            first_name: "testData",
            last_name: "test",
			email: randomNumber + "@test.com",
	        password: "tester"
		});
        
        expect(response.status).toBe(200);
    });

    //////////////////////////////////////////////////////////////////////////

    it("tests the hospital register route with sample mock data", async () => {

        const randomNumber = Math.floor(Math.random() * 1000); 

		const response = await supertest(deployedApp).post('/hospital/register').send({
            name: "test Hospital",
			email: randomNumber + "@test.com",
	        password: "tester"
		});
        
        expect(response.status).toBe(200);
    });

});