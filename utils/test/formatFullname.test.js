const formatFullname = require("../formatFullname");
const expect = require('chai').expect;

describe('FormatFullName', () => {
    it('should return an error if "fullName" arg is not a string', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(123)).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname(function () { })).to.equal('Error');
    });
    it('should return an error if "fullName" arg is empty - its length is 0', () => {
        expect(formatFullname()).to.equal('Error');
        expect(formatFullname('')).to.equal('Error');
    });
    it('should return proper result when "fullName" arg is correct', () => {
        expect(formatFullname('jOhN dOe')).to.equal('John Doe');
        expect(formatFullname('jOHN doE')).to.equal('John Doe');
        expect(formatFullname('joHN dOE')).to.equal('John Doe');
        expect(formatFullname('john doe')).to.equal('John Doe');
    });
    it('should return an error if "fullName" arg is not proper', () => {
        expect(formatFullname('John')).to.equal('Error');
        expect(formatFullname('Doe')).to.equal('Error');
        expect(formatFullname('John Doe John')).to.equal('Error');
        expect(formatFullname('   Doe')).to.equal('Error');
    });
});