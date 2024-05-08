// window.onload = () => {

// const { response } = require("express");

//     const xhr = new XMLHttpRequest();
//     const url = 'data.json';
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             if (xhr.status === 200) {
//                 console.log(JSON.parse(xhr.responseText));
//             } else {
//                 console.error('Error:', xhr.status);
//             }
//         }
//     };
//     xhr.open('GET', url);
//     xhr.send();
// }
window.onload = async () => {
    try {
        const req = await fetch("data.json");
        const data = await req.json();
        console.log(data);

        const canvas = document.querySelector('canvas');

        const ctx = canvas.getContext("2d");

        const vector = {
            y: data.btc_prices[0]/1000,
            x: 0
        }
        console.log(vector)
        for (let i = 0; i < data.btc_prices.length; i++) {
            ctx.strokeStyle = "black"
            ctx.beginPath();
            ctx.moveTo(vector.x, vector.y);
            vector.y = data.btc_prices[i]/1000
            vector.x = vector.x + 10
            ctx.lineTo(vector.x, vector.y);
            ctx.stroke();
            console.log(vector.x, " & ", vector.y)    
        }

    } catch (error) {
        throw new Error(error.message);
    }

 


}

// const serverURL = 'http://localhost:3000'

// const getData = async () => {
//     try {
//         const response = await fetch(`${serverURL}/data`);
//         const data = await response.json();
//         displayData(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// const postData = async () => {
//     try {
//         const newData = { message: 'New message'};
//         const response = await fetch(`${serverURL}/data`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newData)
//         });
//         const result = await response.json();
//         console.log('Server response:', result);
//     } catch (error) {
//         console.error('Error posting data:', error);
//     }
// }

// const displayData = (data) => {
//     const dataContainer = document.querySelector('#data-container');
//     dataContainer.innerHTML = `${JSON.stringify(data, null, 2)}`;
// }