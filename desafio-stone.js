let list = [{
    item: "arroz",
    numberProducts: 1,
    price: 500
},
{
    item: "feijão",
    numberProducts: 1,
    price: 250
},
{
    item: "farofa",
    numberProducts: 1,
    price: 250
},
{
    item: "macarrão",
    numberProducts: 3,
    price: 300
}]

emails = [
    "email1@email.com",
    "email2@email.com",
    "email3@email.com",
    "email4@email.com",
    "email5@email.com",
    "email6@email.com"
]

function challenge(shoppingList, emailsList){

    if (shoppingList.length == 0)
    {
        return "Adicione uma lista de compras."
    }

    if (emailsList.length == 0)
    {
        return "Adicione uma lista de emails."
    }

    let arrNumberOfProducts = []
    let arrPrice = []
    let multiplying = []

    for (let i in shoppingList)
    {
        arrNumberOfProducts.push(shoppingList[i].numberProducts);
        arrPrice.push(shoppingList[i].price);
    }

    for(let i=0; i<arrNumberOfProducts.length;i++)
    {
        if(arrNumberOfProducts.length == arrPrice.length)
        {
            multiplying.push(arrNumberOfProducts[i] * arrPrice[i]);
        }
    }

    let totalAmount = 0;

    for(let s of multiplying)
    {
        totalAmount += s
    }

    let amountEach = Math.floor(totalAmount/emailsList.length)
    let amountLast = totalAmount - amountEach * (emailsList.length-1)
    
    let distribution = new Map();
    
    for(let i=0; i<emailsList.length-1; i++)
    {
        distribution.set(emailsList[i], amountEach);
    }
    
    distribution.set(emailsList[emailsList.length-1], amountLast)

    return distribution
}

console.log(challenge(list, emails))