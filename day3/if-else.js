var demo2;
(function (demo2) {
    function evenAndOdd() {
        for (var i = 1; i <= 16; i++) {
            if (i % 2 == 0) {
                console.log(i + " is Even");
            }
            else {
                console.log(i + " is odd");
            }
        }
    }
    ;
    evenAndOdd();
})(demo2 || (demo2 = {}));
