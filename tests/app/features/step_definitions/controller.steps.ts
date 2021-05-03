import assert from 'assert';
import request from 'supertest';
import {ApplicationKernel} from "../../../../src/app/ApplicationKernel";
import {AfterAll, BeforeAll, Given, Then} from "@cucumber/cucumber";

let _request: request.Test;
let _response: request.Response;
let application: ApplicationKernel;

Given('I send a GET request to {string}', (route: string) => {
    _request = request(application.httpServer).get(route);
});

Given('I send a PUT request to {string} with body:', (route: string, body: string) => {
    _request = request(application.httpServer).put(route).send(JSON.parse(body));
});

Then('the response status code should be {int}', async (status: number) => {
    _response = await _request.expect(status);
});

Then('the response should be empty', () => {
    assert.deepStrictEqual(_response.body, {});
});

Then('the response content should be:', response => {
    assert.deepStrictEqual(_response.body, JSON.parse(response));
});

BeforeAll(async () => {
    application = new ApplicationKernel('test', '3000');
    await application.start();
});

AfterAll(async () => {
    await application.stop();
});
