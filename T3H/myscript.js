const promise = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.open("GET", "https://corona.lmao.ninja/v2/countries?fbclid=IwAR2KASM_pswRnSvWwVmeGElFgHgOx7VaNVUcX5ZXapINzVlbsdo08l86QX4");
    request.onload = () => {
        if (request.status === 200) {
            resolve(request.response);
        } else {
            reject(Error(request.statusText));
        }
    };

    request.onerror = () => {
        reject(Error("Error fetching data."));
    };

    request.send();
});

console.log("Asynchronous request made.");

promise.then(
    data => {
        console.log("Got data! Promise fulfilled.");
       
        document.getElementById('loading').innerHTML ="Tải dữ liệu thành công!";
        
        document.getElementById('result').innerHTML = JSON.parse(data).value.joke;               
    },
    error => {
        console.log("Promise rejected.");
        console.log(error.message);
    }
);