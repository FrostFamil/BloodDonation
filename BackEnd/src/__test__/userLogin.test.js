const supertest = require('supertest');
const app = require('../app');

describe("Testing the authentication API ENDPOINT", () => {

	it("tests the user login route with sample correct user data", async () => {

		const response = await supertest(app).post('/api/user/login').send({
			email: "test@test.com",
	        password: "testtest"
		}, 15000);
        
        expect(response.status).toBe(200);
    });

    //////////////////////////////////////////////////////////////////////////

    it("tests the user login route with sample false user data", async () => {

		const response = await supertest(app).post('/api/user/login').send({
			email: "test@test.com",
	        password: "testtes"
		}, 15000);
        
        expect(response.status).toBe(400);
    });
    
    //////////////////////////////////////////////////////////////////////////

    it("tests the hospital login route with sample correct hospital login data", async () => {

		const response = await supertest(app).post('/api/hospital/login').send({
			email: "test@test.com",
	        password: "testtest"
		}, 15000);
        
        expect(response.status).toBe(200);
    });
    
    //////////////////////////////////////////////////////////////////////////

    it("tests the hospital login route with sample false hospital login data", async () => {

		const response = await supertest(app).post('/api/hospital/login').send({
			email: "test@test.com",
	        password: "testtes"
		}, 15000);
        
        expect(response.status).toBe(400);
    });
    
    //////////////////////////////////////////////////////////////////////////

    it("tests the user register route with sample mock data", async () => {

        const randomNumber = Math.floor(Math.random() * 1000); 

		const response = await supertest(app).post('/api/user/register').send({
            first_name: "testData",
            last_name: "test",
			email: randomNumber + "@test.com",
	        password: "tester"
		}, 15000);
        
        expect(response.status).toBe(200);
    });

    //////////////////////////////////////////////////////////////////////////

    it("tests the hospital register route with sample mock data", async () => {

        const randomNumber = Math.floor(Math.random() * 1000); 

		const response = await supertest(app).post('/api/hospital/register').send({
            name: "test Hospital",
			email: randomNumber + "@test.com",
	        password: "tester"
		}, 15000);
        
        expect(response.status).toBe(200);
    });

});