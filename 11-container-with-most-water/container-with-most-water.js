/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxWater=0;
  let left=0;
  let right=height.length-1;

  while(left<right) {
    const h = Math.min(height[left], height[right]);
    const width = right - left;
    const area = h * width;

     maxWater = Math.max(maxWater, area);
     if (height[left]<height[right]){
        left++;
     }else{
        right--;
     }

  }  
  return maxWater;
};