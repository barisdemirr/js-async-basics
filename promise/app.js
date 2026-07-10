// // promise = pending, reject, fullfilled/resolved
// // es6
// // then, catch , final

// function FetchData(url){
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest;

//         try {
//             xhr.addEventListener("readystatechange", ()=>{
//                 if (xhr.status === 200 && xhr.readyState ===4){
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//             })
//         } catch (error) {
//             reject(error);
//         }

//         xhr.open("get",url);
//         xhr.send();
//     })
// }


// FetchData("students.json")
// .then(data => console.log(data))
// .catch(err => console.log(err))
// .finally(()=> console.log("Bu her türlü çalışır."))








// -------------2---------------

// function GetUsers(url, fname){
//     return new Promise((resolve,reject)=>{
//         let xhr = new XMLHttpRequest;

//         xhr.addEventListener("readystatechange", ()=>{
//             try {
//                 if (xhr.status===200 && xhr.readyState===4){
//                     let list = JSON.parse(xhr.responseText);

//                     list.forEach(user => {
//                         if (user.name.toLowerCase().includes(fname.toLowerCase())){
//                             resolve(user.id);
//                         }
//                     });
                    
//                 }
//             } catch (error) {
//                 resolve(error);
//             }
//         })

//         xhr.open("get",url);
//         xhr.send();
//     })
// }


// function GetPostByUserId(url){
//     return new Promise((resolve,reject)=>{
//         let xhr = new XMLHttpRequest;

//         xhr.addEventListener("readystatechange", ()=>{
//             try {
//                 if (xhr.status===200 && xhr.readyState===4){
//                     resolve(xhr.responseText);
//                 }
//             } catch (error) {
                
//             }
//         })

//         xhr.open("get", url);
//         xhr.send();
//     })
    
// }


// let url = "https://jsonplaceholder.typicode.com/users";
// let fname = prompt();

// GetUsers(url,fname)
// .then(res=> {
//     console.log(res);

//     return GetPostByUserId(`https://jsonplaceholder.typicode.com/posts/${res}`);  generic denir 
// })
// .then(res=>{
    
//     console.log(res);
// })









// -----------------3------------------

//promise.resolve ya da promise.reject yazarak direkt promise objesi oluşturabilirsin
// p1 ile p3 ün hiçbir farkı yok

const p1 = Promise.resolve("başarılı");
const p2 = Promise.resolve("başarılı2");
const p3 = new Promise((resolve)=> resolve("başarılı3"));
const p4 = Promise.reject("iptal knk");


// promise.all? parametre olarak array alır, arraydeki tüm promisler resolved ise then,
//  biri bile rejected ise catch çalışır

Promise.all([p1,p2,p3,p4])
.then(res=>console.log(res))
.catch(err=> console.log(err));

// p4 rejected olduğundan p4 ün hata mesajını yazdıracak, biri daha rejected olsaydı ikisininkini de yazardı

// tamamı resolved olsaydı hepsinin resolve mesajını yazdırırdı.