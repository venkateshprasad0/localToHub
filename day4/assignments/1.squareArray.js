var array1 = [1, 2, 3, 4];
var Square = function (a) {
    console.log(a * a);
};
array1.forEach(Square, array1);
