const locationArr = [];
console.log(locationArr);


document.addEventListener('DOMContentLoaded', () => {
  let startPos;
  const geoSuccess = function (position) {
    startPos = position;
    const lat = startPos.coords.latitude;
    const long = startPos.coords.longitude;
    locationArr.push(lat, long);
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);
});


const foodSearch = () => {
  const searchInput = document.getElementById('fSearch').value;


  fetch(`https://api.foursquare.com/v2/venues/explore?client_id=TGMXNAUY4K0MC5ABSBR04QI3C11QTAWQAZ13QWSQB1YO2WOA&client_secret=ZJTJNNX45BCUJRSWAZDKXC4C5Y2FYVSJJ4CBM1T2OIF1MDQF&v=20180323&limit=10&ll=${locationArr[0]},${locationArr[1]}&query=${searchInput}`)
    .then(
    // Code for handling API response
      (response) => {
        if (response.status !== 200) {
          console.log(`Looks like there was a problem. Status Code: ${
            response.status}`);
          return;
        }

        // Examine the text in the response
        response.json().then((data) => {
          const dataStr = JSON.stringify(data);
          const dataObj = JSON.parse(dataStr);
          // console.log(dataStr);
          // console.log(dataObj);
          // const bizTable = document.createElement('TABLE');
          // document.body.appendChild(table);

          dataObj.response.groups[0].items.forEach((el,i) => {
            const business = el.venue.name;
            const addy = el.venue.location.address;

            const bRow = document.createElement('TR');
            bRow.setAttribute("id", `${bRow}${i}`);
            document.getElementById('bizTable').appendChild(bRow);
            const bCell = document.createElement('TD');
            document.getElementById(`${bRow}${i}`).appendChild(bCell);
            bCell.innerText = `${business}`;
            // let bizStr = business.replace(' ','%20');
            // bCell.innerHTML = <a href="https://foursquare.com/explore?&mode=url&q=" + "bizStr" ;

            const aRow = document.createElement('TR');
            aRow.setAttribute("id", `${aRow}${i}`);
            document.getElementById('bizTable').appendChild(aRow);
            const aCell = document.createElement('TD');
            document.getElementById(`${aRow}${i}`).appendChild(aCell);
            aCell.innerText = `Address:${addy}`;
          // console.log(el.venue.name);
          // console.log(el.venue.location.address);
          });

        // the chatObj is an array of over 500 indeces
        // iterate through the array, each index holds an object
        // append <p> to the chatwindow div ?
        // chatWindow.innerText = `${chatObj[1].message}`;
        });
      },
    )
    .catch((err) => {
      // Code for handling errors
      console.log('Fetch Error :-S', err);
    });
};

document.getElementById('findfood').onclick = foodSearch;


// document.getElementById('fSearch').addEventListener('click', () => {
//
// }
