function myFunction(){
    // bai 1
    var i;
    for (i = 1; i <= 100; i++) {
        if(i % 3==0){
            console.log(i+"số chia hét cho 3");
        }
    }
}
function giaiBai2(){
    if(isNaN($("#myInput").val()))
        alert('please input a number');
    else{
        var  n = Number($("#myInput").val());
        // bai 1
        var i;
        for (i = 1; i <= n; i++) {
            if(IsPrime(i)){
                console.log(i+" là số nguyên tố")
            }
        }
    }    
    
}
function convertNumner(){

}
function IsPrime(n){
    var flag = true;
    if(n < 2){
        flag = false;
    }else{
        for(var i = 2; i < n-1;i++){
            if(n%i==0){
                flag  = false;
                break;
            }
        }
    }
    return flag;
}

function  callApi(){

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
            var jsonData = JSON.parse(data);
            for (var i = 0; i < jsonData.length; i++) {
                console.log(jsonData[i].country);
            }
           // document.getElementById('loading').innerHTML ="Tải dữ liệu thành công!";
            
           // document.getElementById('result').innerHTML = JSON.parse(data).value.joke;               
        },
        error => {
            console.log("Promise rejected.");
            console.log(error.message);
        }
    );



}