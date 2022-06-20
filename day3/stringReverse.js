var strRev;
(function (strRev) {
    var str = "prasad";
    function ReverseString(str) {
        // Check input
        if (!str || str.length < 2 ||
            typeof str !== 'string') {
            return 'Not valid';
        }
        // Take empty array revArray
        var revArray;
        revArray = [];
        var length = str.length - 1;
        // Looping from the end
        for (var i = length; i >= 0; i--) {
            revArray.push(str[i]);
        }
        // Joining the array elements
        return revArray.join('');
    }
    console.log(ReverseString(str));
})(strRev || (strRev = {}));
