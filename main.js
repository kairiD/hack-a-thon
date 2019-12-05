// document.addEventListener('DOMContentLoaded', () => {
//   // const title = $('<h1>').text('Social Calendar');
//   // $('body').append(title);
//   // console.log(title);
// // ideas!
// // a button to do a trending search
// // have default set to search
// // Option for explore if people want something new to surprise them
// //
//
// // make AJAX request to 4Sq server
// // example will search for ice cream!
// fetch(`https://api.foursquare.com/v2/venues/explore?client_id=TGMXNAUY4K0MC5ABSBR04QI3C11QTAWQAZ13QWSQB1YO2WOA&client_secret=ZJTJNNX45BCUJRSWAZDKXC4C5Y2FYVSJJ4CBM1T2OIF1MDQF&v=20180323&limit=10&ll=33.9793867,-118.4747169&query=${searchInput}`)
// .then(
//   // Code for handling API response
//   (response) => {
//     if (response.status !== 200) {
//       console.log(`Looks like there was a problem. Status Code: ${
//         response.status}`);
//       return;
//     }
//
//     // Examine the text in the response
//     response.json().then((data) => {
//       let dataStr = JSON.stringify(data);
//       let dataObj = JSON.parse(dataStr);
//       console.log(dataStr);
//       console.log(dataObj);
//       // the chatObj is an array of over 500 indeces
//       // iterate through the array, each index holds an object
//       // append <p> to the chatwindow div ?
//       // chatWindow.innerText = `${chatObj[1].message}`;
//     });
//   },
// )
//     .catch((err) => {
//       // Code for handling errors
//       console.log('Fetch Error :-S', err);
//     });
// });
