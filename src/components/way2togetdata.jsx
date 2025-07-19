// Here we get data by api and store that in an array and get info. from array and display tha on out website.

//step1 : create a dataset.js file and the add api by link in this file and make a loop and store all news in array one by one in loop.
//here we mainly save api and store news in array and display it in 
// import React, { useState, useEffect } from 'react';

// function NewsComponent() {
//   const [arr, setArr] = useState([]);

//   useEffect(() => {
//     async function show() {
//       let url =
//         "https://newsapi.org/v2/everything?q=apple&from=2024-08-11&to=2024-08-15&sortBy=popularity&apiKey=42e230b914bf4e0a8ee13747c8b13584";
//       let response = await fetch(url);
//       let parseData = await response.json();
//       setArr(parseData.articles);
//     }
//     show();
//   }, []);

//   return (
//     <div>
//       <center><h2>NEWS TITLE</h2></center>
//       <div>
//         {arr.map((article, index) => (
//           <div key={index}>
//             <h3>{article.title}</h3>
//             <p>{article.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default NewsComponent;

//>>>>>>>>>>>>>>>>
