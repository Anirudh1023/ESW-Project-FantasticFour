/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

//EXTRA CODE
function Get(yourUrl) {
  var Httpreq = new XMLHttpRequest();
  Httpreq.open("GET", yourUrl, false);
  Httpreq.send(null);
  return Httpreq.responseText;
}

var json_obj = JSON.parse(
  Get("https://api.thingspeak.com/channels/1945266/feeds.json?api_key=QY1ORDCIQV50A5RJ&results=15")
);
//EXTRA CODE

var val = json_obj.feeds;

export const lineChartDataDashboardTemperature = [
  {
    name: "Temperature",
    data: [
      val[0].field1,
      val[1].field1,
      val[2].field1,
      val[3].field1,
      val[4].field1,
      val[5].field1,
      val[6].field1,
      val[7].field1,
      val[8].field1,
      val[9].field1,
      val[10].field1,
      val[11].field1,
      val[12].field1,
      val[13].field1,
      val[14].field1,
    ],
  },
];
export const lineChartDataDashboardHumidity = [
  {
    name: "Humidity",
    data: [
      val[0].field2,
      val[1].field2,
      val[2].field2,
      val[3].field2,
      val[4].field2,
      val[5].field2,
      val[6].field2,
      val[7].field2,
      val[8].field2,
      val[9].field2,
      val[10].field2,
      val[11].field2,
      val[12].field2,
      val[13].field2,
      val[14].field2,
    ],
  },
];
export const lineChartDataDashboardRawVOC = [
  {
    name: "RawVOC",
    data: [
      val[0].field3,
      val[1].field3,
      val[2].field3,
      val[3].field3,
      val[4].field3,
      val[5].field3,
      val[6].field3,
      val[7].field3,
      val[8].field3,
      val[9].field3,
      val[10].field3,
      val[11].field3,
      val[12].field3,
      val[13].field3,
      val[14].field3,
    ],
  },
];
export const lineChartDataDashboardVOCIndex = [
  {
    name: "VOCIndex",
    data: [
      val[0].field4,
      val[1].field4,
      val[2].field4,
      val[3].field4,
      val[4].field4,
      val[5].field4,
      val[6].field4,
      val[7].field4,
      val[8].field4,
      val[9].field4,
      val[10].field4,
      val[11].field4,
      val[12].field4,
      val[13].field4,
      val[14].field4,
    ],
  },
];
export const lineChartDataDashboardCo2 = [
  {
    name: "CO2",
    data: [
      val[0].field5,
      val[1].field5,
      val[2].field5,
      val[3].field5,
      val[4].field5,
      val[5].field5,
      val[6].field5,
      val[7].field5,
      val[8].field5,
      val[9].field5,
      val[10].field5,
      val[11].field5,
      val[12].field5,
      val[13].field5,
      val[14].field5,
    ],
  },
];
export const lineChartDataDashboardPM2 = [
  {
    name: "PM2.5",
    data: [
      val[0].field6,
      val[1].field6,
      val[2].field6,
      val[3].field6,
      val[4].field6,
      val[5].field6,
      val[6].field6,
      val[7].field6,
      val[8].field6,
      val[9].field6,
      val[10].field6,
      val[11].field6,
      val[12].field6,
      val[13].field6,
      val[14].field6,
    ],
  },
];
export const lineChartDataDashboardPM10 = [
  {
    name: "PM10",
    data: [
      val[0].field7,
      val[1].field7,
      val[2].field7,
      val[3].field7,
      val[4].field7,
      val[5].field7,
      val[6].field7,
      val[7].field7,
      val[8].field7,
      val[9].field7,
      val[10].field7,
      val[11].field7,
      val[12].field7,
      val[13].field7,
      val[14].field7,
    ],
  },
];



