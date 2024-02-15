/**
 * this is just a Demo Function to see the Functionality of vitest
 * 
 * @param nums numbers to sum up 
 * @returns the sum of supplied numbers 
 */
export function sum(...nums: number[]) : number {
    return nums.reduce((prev, curr) => {
        return prev + curr
    })
}
