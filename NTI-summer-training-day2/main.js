// one

function AddnValues(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (typeof (nums[i]) !== "number") {
            console.error("not a number");
            return;
        }
    }
    return nums.reduce((acc, curr) => acc + curr)
}
console.log(AddnValues([1, 2, 3, "m"]));


