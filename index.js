// Code your solution in this file!
function distanceFromHqInBlocks(destination)
{
    let distance;
    if(destination>42)
    {
    distance=destination-42;
    return distance;
    }
    else
    {
    distance=42-destination;
    return distance;
    }

}
function distanceFromHqInFeet(destination)
{

    const ft=264;
    let feet;


    if(destination>42)
    {
        feet=((destination-42)*ft);
        return feet;
    }
    else
    {
        feet=((42-destination)*ft);
        return feet;
    }

}
function distanceTravelledInFeet(start,destination)
{
    let feet;
    const ft=264;
    if(destination>start)
    {
    feet=((destination-start)*ft);
    return feet;
    }
    else
    {
        feet=((start-destination)*ft);
        return feet;
    }

}
function calculatesFarePrice(start,destination)
{
const ft=264;
let fare;
let v1;
if(start>destination)
{
    v1=((start-destination)*ft);
    if((v1>400 ) && (v1<2000))
    {
fare=(((((start-destination)*ft)-400)*2)/100);
return fare;
    }
    else if((v1>2000) && (v1<2500))
    {
fare=25;
        return fare;
    }
    else if(v1<400)
    {
        return 0;
    }
    else if(v1>2500)
    {
        return 'cannot travel that far';
    }

    }

else
{
    v1=((destination-start)*ft);

    if((v1>400) && (v1<2000))
    {
    fare=(((((destination-start)*ft)-400)*2)/100);
    return fare;
    }

 else if((v1>2000) && (v1<2500))
    {
fare=25;
        return fare;
    }
    else if(v1<400)
    {
        return 0;
    }
    else if(v1>2500)
    {
        return 'cannot travel that far';
    }
}

}