function testStrict(val)
{
    if(val === 7)
    {
        return "equal";
    }
    return "Not equal";
}

console.log(testStrict(7));

/*
3 == 3
3 === '3'
*/
