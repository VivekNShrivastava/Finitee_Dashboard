export function getDetails() {
    return fetch('https://dummyjson.com/carts/1').then(res => res.json());

  
}

export function getbusinesDetails(){
    return fetch('https://dummyjson.com/users').then(res => res.json())
}