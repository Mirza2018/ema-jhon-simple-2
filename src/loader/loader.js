
import { getShoppingCart } from "../utilities/fakedb";

const loderHandle=async ()=>{

    const getIt=await fetch('products.json');
    const allData=await getIt.json()


    const getData = getShoppingCart()
    const requireData = [];
    for (const id in getData) {
        const machData = allData.find(da => da.id === id);
        if (machData) {
            const quantity = getData[id];
            machData.quantity = quantity;
            requireData.push(machData);
        }
    }
return requireData;
}





// const loderHandle = () => {

//     fetch('products.json')
//         .then(res => res.json())
//         .then(data => allData(data))
// }
// loderHandle()
// const allData = (data) => {
//     const getData = getShoppingCart()
//     const requardData = [];
//     for (const id in getData) {
//         const machData = data.find(da => da.id === id);
//         if (machData) {
//             const quantity = getData[id];
//             machData.quantity = quantity;
//             requardData.push(machData);
//         }
//     }

//     return requardData;
// }


export { loderHandle }