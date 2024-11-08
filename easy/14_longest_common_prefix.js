/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

 

Constraints:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.


 */
    var longestCommonPrefix = function(strs) {
        
     let prefix = ''
     if ( strs.length===0) return prefix;
     for (let i =0; i<strs[0].length;i++){
        const character = strs[0][i];
        for (let j=0; j<strs.length; j++){
            if(strs[j][i] != character) return prefix
            else {
                prefix+=character
            }
        }
     }
     return prefix
    };

    /*
    -- Metodo horizontal
    f l o w e r
    f l o w
    f l i g h t

    compara f f  - son iguales
    luego compara l l l son iguales
    luego o o son iguales 
    luego w w son iguales
    finalmente e  -  no son iguales 
    hasta ahora el prefijo mayor seria f l o w
    repite lo mismo para la siguiente palabra f l i g h t 
    y encuentra que el mayor prefijo es f l


    -- Metodo vertical -> mejor performance en terminos de tiempo
    compara todas las primeras letras al mismo tiempo

    */