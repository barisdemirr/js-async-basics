// document.querySelector("#button").addEventListener("click", async ()=>{
//     const  responsePost  = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     console.log(responsePost);
// })



// async keyword'u function'a verilir. içinde await kullanarak asenkron problemi yaratan yerlerde
// kullanılır. asenkron problemi yoksa await kullanma! 
// yukarıda response post'u console'a yazdırmışız. eğer fetch işlemi bitmeden yazdırılsaydı
// (await kullanmasaydık) asenkron problemi ortaya çıkardı. bu yüzden onun bitmesini beklemek için
// await kullandık.