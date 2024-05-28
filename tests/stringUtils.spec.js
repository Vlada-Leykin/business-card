import moveCapitalLettersToFront from '../src/exercises/stringManipulations/stringUtils.js';

describe('String manipulation', function () {
    describe('moveCapitalLettersToFront', function () {
        it('should return the same string', function () {
            const testStr = "text without any capital letters";

            const result = moveCapitalLettersToFront(testStr);
            expect(result).toBe("text without any capital letters");
        });

        it('should move all capital letters to the beginning of the string', function () {
            const testStr = "VladaLeykin";

            const result = moveCapitalLettersToFront(testStr);
            expect(result).toBe("VLladaeykin");
        });

        it('should move all capital letters to the beginning of the string in a pretty long text', function () {
            const testStr = `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Vestibulum a blandit ipsum. 
        In cursus nibh neque, quis hendrerit metus condimentum non. 
        Quisque quis quam massa. Curabitur et volutpat odio, vel mollis augue. 
        Praesent mattis, augue dictum faucibus venenatis, 
        neque dui molestie purus, eu pretium nibh orci vel lacus. 
        Suspendisse id enim nisi. Etiam egestas dui quis libero ullamcorper, 
        in vehicula libero bibendum.`;

            const expectedStr = `LVIQCPSEorem ipsum dolor sit amet, 
        consectetur adipiscing elit. estibulum a blandit ipsum. 
        n cursus nibh neque, quis hendrerit metus condimentum non. 
        uisque quis quam massa. urabitur et volutpat odio, vel mollis augue. 
        raesent mattis, augue dictum faucibus venenatis, 
        neque dui molestie purus, eu pretium nibh orci vel lacus. 
        uspendisse id enim nisi. tiam egestas dui quis libero ullamcorper, 
        in vehicula libero bibendum.`;

            const result = moveCapitalLettersToFront(testStr);
            expect(result).toBe(expectedStr);
        });
    });
});
