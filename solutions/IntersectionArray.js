// 350. Intersection of Two Arrays II
// Solved
// Easy
// Topics
// Companies
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000
 
function intersect(nums1, nums2) {
    const countMap1 = {};
    const result = [];

    nums1.forEach(num => {
        countMap1[num] = (countMap1[num] || 0) + 1;
    });

    nums2.forEach(num => {
        if (countMap1[num] > 0) {
            result.push(num);
            countMap1[num]--;
        }
    });

    return result;

}