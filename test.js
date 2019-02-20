const lib = require('./index');
// const mocha = require('mocha');
const chai = require('chai');
const {expect} = chai;
describe('fibonnaci', function () {
    it('fibonacci: 3', function () {
        let res = lib.fibonacci(4);
        expect(res)
            .to
            .equal(3);
    });

    it('fibonacci: 0', function () {
        let res = lib.fibonacci(0);
        expect(res)
            .to
            .equal(1);
    });

    it('fibonacci: 1', function () {
        let res = lib.fibonacci(1);
        expect(res)
            .to
            .equal(2);
    });

    it('fibonacci: 6', function () {
        let res = lib.fibonacci(6);
        expect(res)
            .to
            .equal(8);
    });

    it('fibonacci: 20', function () {
        let res = lib.fibonacci(20);
        expect(res)
            .to
            .equal(6765);
    });
});