namespace strRev2 {
    var str: string = "prasad";

    function ReverseString(str: string) {

        // Check input
        if (!str || str.length < 2 ||
            typeof str !== 'string') {
            return 'Not valid';
        }

        // Take empty array revArray
        var revArray: string[];
        revArray = [];
        const length: number = str.length - 1;

        // Looping from the end
        for (let i: number = length; i >= 0; i--) {
            revArray.push(str[i]);
        }

        // Joining the array elements
        return revArray.join('');
    }

    console.log(ReverseString(str));
}