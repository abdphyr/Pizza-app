

// FILTER
export const filter_products = (prs, fd_sd_prs, filter_type) => {

    if(filter_type === "all"){
        return [...prs]
    }else if(filter_type === "close"){
        return []
    }else{
        return [...prs].filter(product => 
            product.kind === filter_type);
    }    
}


// SORT QILISH UCHUN
export const sort_products=(prs, fd_sd_prs, sort_type) => {
    if(sort_type === "price"){
        if(fd_sd_prs.length>0){
            return [...fd_sd_prs]
            .sort((a,b) => a.type.thin.size_26_sm.price
            .toString()
            .localeCompare(b.type.thin.size_26_sm.price
            .toString()))
        }else{
            return [...prs]
            .sort((a,b) => a.type.thin.size_26_sm.price
            .toString()
            .localeCompare(b.type.thin.size_26_sm.price
            .toString()))
        }
    }else{
        if(fd_sd_prs.length>0){
            return [...fd_sd_prs]
            .sort((a,b) => a[sort_type]
            .localeCompare(b[sort_type]))
        }else{
            return [...prs]
            .sort((a,b) => a[sort_type]
            .localeCompare(b[sort_type]))
        }
    }
}



// YANGI ELEMENT CARTGA QO'SHISH UCHUN
export const create_cart_item = (cart,product_type_size)  => {
    const new_cart = [...cart];
    const product = product_type_size[0]
    const type = product_type_size[1]
    const size = product_type_size[2]
    
    if(!new_cart.some(cart_item => (
        (cart_item[0].id === product.id) 
        && (cart_item[1] === type) 
        && (cart_item[2] === size)
        ))){
        product.type[type][size].number++
        new_cart.push([product, type, size]);

    }else{
        const index = new_cart.findIndex(item_cart => (
            item_cart[0].id === product.id 
            && item_cart[1] === type 
            && item_cart[2] === size
        ))
        new_cart[index][0].type[type][size].number++
    }
    
    localStorage.setItem('cart',JSON.stringify(new_cart));
    return new_cart;
}


// CARTDAGI ELEMENTLARNI HAMMASINI O'CHIRIB TASHLASH
export const clear_cart_items = (cart) => {
    const new_cart = [...cart]
    for (let i=0; i < new_cart.length; i++){
        const product = new_cart[i][0]
        const type = new_cart[i][1]
        const size = new_cart[i][2]
        product.type[type][size].number = 0
    }
    localStorage.removeItem('cart');
    return []
}


// CARTDAGI MA'LUM ELEMENTNING SONINI O'ZGARTIRISH
export const change_cart_item = (cart,item_act)  => {
    const new_cart = [...cart]
    const item = item_act[0]
    const act = item_act[1]

    const product = item[0]
    const type = item[1]
    const size = item[2]
    
    const index = new_cart.findIndex(item_cart => (
        item_cart[0].id === product.id 
        && item_cart[1] === type 
        && item_cart[2] === size
    ))
  
    if(act === "inc"){
        new_cart[index][0].type[type][size].number++

    }else if(act === "dec"){
        if(new_cart[index][0].type[type][size].number>1){
            new_cart[index][0].type[type][size].number--
        }else{
            new_cart.splice(index,1)
        }

    }else if(act === "remove"){
        new_cart[index][0].type[type][size].number = 0
        new_cart.splice(index,1)
    }

    localStorage.setItem('cart', JSON.stringify(new_cart));
    return new_cart;
}
