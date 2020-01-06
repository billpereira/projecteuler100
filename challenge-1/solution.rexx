/*REXX*/
a = 3
b = 5
c = 100

say result(a,b,c)

the_end:
exit 0

/* Find the latest number before limit */ 
latest: procedure
    arg r, limit 
    lastNum = limit - (limit // r)
    if (lastNum = limit) then do
        lastNum = lastNum - r
    end
return lastNum

/* Find number of elements */ 
n: procedure
    arg a1, an, r
return (an - a1) / r + 1

/* find mmc */
mmc: procedure 
    arg num1, num2
    a = num1
    b = num2
    do while (rest <> 0)
        rest = a // b
        a = b
        b = rest
    end 
return (num1 * num2) / a


/* Find Sum */
sum:
    arg a1, an, n
return (a1+an)*n/2


/* Result = Sum of first plus second less the commons */
result:
    arg a, b, c
    firtSum = sum(a,latest(a,c),n(a,latest(a,c),a))
    secondSum = sum(b,latest(b,c),n(b,latest(b,c),b))
    value = firtSum + secondSum
    if mmc(a,b) < c then do
        mmcAB = mmc(a,b)
        latestMMC = latest(mmcAB,c)
        nMMC = n(mmcAB, latestMMC, mmcAB)
        commonSum = sum(mmcAB,latestMMC,nMMC)
        value = value - commonSum
    end
return value
