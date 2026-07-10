const get = (url, id) => {
    const xhr = new XMLHttpRequest;

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let array = JSON.parse(xhr.responseText);

            array.forEach(element => {
                if (element.postId == id){
                    console.log(element);
                }
            });
        }
    }

    xhr.open("GET", url);
    xhr.send();
}

let url = "https://jsonplaceholder.typicode.com/comments";
let id = Number(prompt());
get(url, id); 