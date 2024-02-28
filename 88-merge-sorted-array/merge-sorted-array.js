var merge = function(nums1, m, nums2, n) {
    let j=0
    for(let i=m;i<nums1.length;i++){
        
            nums1[i]=(nums2[j]);
            j++;
        
    }
    nums1.sort((a,b) => { return a - b })
};