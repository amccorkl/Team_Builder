const Manager = require('../lib/Manager');

describe('Manager', () => {

    test('should construct a new object including an office number validated to type of number', () => {
        const newManager = new Manager('Katie', 33, 'manager@test.com', 22);

        expect(newManager.officeNumber).toEqual(22);
    });

    
    test('should return Manager when the getRole() function is called', () => {
        const newManager = new Manager('Katie', 33, 'manager@test.com', 22);

        expect(newManager.getTitle()).toEqual('Manager');
    });
}); 