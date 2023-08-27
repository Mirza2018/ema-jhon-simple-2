const getData=()=>{
    let shoppingCart={}
    const storedcart=localStorage.getItem("shopping-cart");
    if(storedcart){
        shoppingCart=JSON.parse(storedcart)
    }
    return shoppingCart;
}


const adddb=(id)=>{
let shoppingCart=getData();

const quantity=shoppingCart[id];
if(quantity){
    shoppingCart[id]=quantity+1;
}
else{
    shoppingCart[id]=1;
}
localStorage.setItem("shopping-cart",JSON.stringify(shoppingCart))
}
export {getData,adddb}