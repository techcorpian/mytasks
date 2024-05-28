//f. Return median of two sorted arrays of the same size.
// Anonymous Function
var getMedian = function(ar1, ar2, n)
{
    var i = 0;
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;
 
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
 
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }

        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}
 
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    console.log("Median is "+ getMedian(ar1, ar2, n1));
else
    console.log("Doesn't work for arrays of unequal size");

// IIFE Function
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;

(function (ar1, ar2, n1, n2){
    if (n1 !== n2) {
        console.log("Doesn't work for arrays of unequal size");
        return;
    }

    var i = 0, j = 0, count;
    var m1 = -1, m2 = -1;

    for (count = 0; count <= n1; count++) {
        if (i == n1) {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n2) {
            m1 = m2;
            m2 = ar1[0];
            break;
        }

        if (ar1[i] <= ar2[j]) {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        } else {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }

    var median = (m1 + m2) / 2;
    console.log("Median is " + median);
})(ar1, ar2, n1, n2);

