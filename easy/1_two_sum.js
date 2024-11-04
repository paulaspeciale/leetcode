/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

2 <= nums.length <= 104
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
*/
/* ------------------------- SOLUCION 1
var twoSum = function(nums, target) {
    // fuerza bruta -> dos for anidados
    // O(n^2) - ventaja no usa espacio adicional
    for (let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j]===target){
                return [i,j]
            }
        } 
    }
}; // O( n * n/2)
console.log(twoSum([3,2,4],6))
*/
//------------------------- SOLUCION 2
var twoSum = function(nums, target) {
/*
Si nos ponemos a pensar por cada numero que tenemos, cuanto nos falta para llegar al target
y si es que tenemos ese numero disponible en el arreglo
numero que necesitamos = target - numero actual

*/
const numero_index = {}
//llenamos el mapa
for (let i=0; i<nums.length; i++){
    numero_index[nums[i]]=i
}
for(let i=0; i<nums.length;i++){
    const numero_necesitado = target - nums[i];

    if(numero_index[numero_necesitado] !==undefined && numero_index[numero_necesitado]!==i){
        // si el numero necesitado se encuentra en el mapa y no repetimos indices
        return [i, numero_index[numero_necesitado]]
    }
}
}
console.log(twoSum([3,2,4],6))