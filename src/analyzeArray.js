export function analyzeArray(nums) {
    let min = nums[0]
    let max = nums[0]
    let total = nums[0]
    const length = nums.length;
    
    total = nums.reduce((prev, curr) => {
        if (min > curr) {
            min = curr
        } 

        if (max < curr) {
            max = curr
        }

        return prev + curr
    }, 0)

    const average = total / length;

    return {
        average,
        min,
        max,
        length,
    };
}



console.log(analyzeArray([1,8,3,4,2,6]));
