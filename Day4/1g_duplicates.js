//g. Remove duplicates from an array
//Anonymous Functions
var removeDuplicates = function(array, n)
{
    arr = array.sort()
    
    if (n==0 || n==1)
        return n;
 
    var temp = new Array(n);
 
    var j = 0;
    for (var i=0; i<n-1; i++)
        if (arr[i] != arr[i+1])
            temp[j++] = arr[i];
 
    temp[j++] = arr[n-1];

    // console.log(arr);
 
    for (var i=0; i<j; i++)
        arr[i] = temp[i];
 
    return j;
}
 
var arr = [1, 2, 5, 3, 4, 4, 4, 5, 2];
    var n = arr.length;
    n = removeDuplicates(arr, n);
 
    for (var i=0; i<n; i++)
       console.log( arr[i]+" ");

// IIFE Function
    var arr = [1, 2, 5, 3, 4, 4, 4, 5, 2];
    var n = arr.length;

    n = (function (array, n)
       {
           arr = array.sort()
           
           if (n==0 || n==1)
               return n;
        
           var temp = [];
        
           var j = 0;
           for (var i=0; i<n-1; i++)
               if (arr[i] != arr[i+1])
                   temp[j++] = arr[i];
        
           temp[j++] = arr[n-1];
       
           // console.log(arr);
        
           for (var i=0; i<j; i++)
               arr[i] = temp[i];
         return j;

       })(arr, n)
        
       for (var i=0; i<n; i++)
       console.log( arr[i]+" ");
        
