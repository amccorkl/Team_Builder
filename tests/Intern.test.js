const Intern = require('../lib/Intern');

describe('Intern', () => {

    it('should construct a new object including an school validated to a string of at least 2 characters', () => {
        const newIntern = new Intern('Kade', 7, 'intern@test.com', 'DU');

        expect(newIntern.school).toEqual('DU');
    });

   
    it('should return Intern when the getRole() function is called', () => {
        const newIntern = new Intern('Kade', 7, 'intern@test.com', 'DU');

        expect(newIntern.getTitle()).toEqual('Intern');
    });

    it('should return school name when the getSchool() function is called', () => {
        const newIntern = new Intern('Kade', 7, 'intern@test.com', 'DU');

        expect(newIntern.getSchool()).toEqual('DU');
    });
}); 