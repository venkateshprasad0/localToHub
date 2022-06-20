namespace demo2 {
    function evenAndOdd() {
        for (let i: number = 1; i <= 16; i++) {
            if (i % 2 == 0) {
                console.log(i + " is Even");
            } else {
                console.log(i + " is odd");
            }
        }
    };

    evenAndOdd();
}