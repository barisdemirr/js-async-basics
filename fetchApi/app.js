// fetch api kullanırken unutmamamız gerekn en önemli nokta, fetch kullanınca gelen promise
// direkt veri getirmez

//fetch("students.json")

// bu kodu çalıştırınca gelen değer  response tipindedir.
// response demek bir paket halinde gelmiş gibi düşün. içindeki şeyi(değeri) alabilmek için paketi 
// açmamız gerek. bunun için response içindeki bir function olan json kullanırız. Ancak json yine promise
// döndürür. bu yüzden yine then kullanarak response' unu alıcaz. ondan sonra istediğin gibi kullan



fetch("students.json")
.then(res=>{
    console.log(res); // response tipinde (paket)

    return res.json();  // bir promise. o zaman then catch kullanabiliriz
})
.then(res=>{
    console.log(res) // [{obje},{obje},{obje},{obje}]
})


// önemli detay 

// fetch("students.json") 
// .then(res=> res.json()) arrow functionda return yazmana gerek yok! 
