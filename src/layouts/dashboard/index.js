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

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Card, LinearProgress, Stack } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Dashboard layout components
import WelcomeMark from "layouts/dashboard/components/WelcomeMark";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import SatisfactionRate from "layouts/dashboard/components/SatisfactionRate";
import ReferralTracking from "layouts/dashboard/components/ReferralTracking";

// React icons
import { IoMdAddCircle } from "react-icons/io";
import { IoCloudCircleOutline } from "react-icons/io5";
import { IoNuclearSharp } from "react-icons/io5";
import { IoIosThermometer } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";
import { IoIosDisc } from "react-icons/io";
import {IoMaleFemaleSharp } from "react-icons/io5";
import {IoEyedrop } from "react-icons/io5";
import {IoGlobe } from "react-icons/io5";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboardCo2 } from "layouts/dashboard/data/lineChartData";
import { lineChartDataDashboardRawVOC } from "layouts/dashboard/data/lineChartData";
import { lineChartDataDashboardVOCIndex } from "layouts/dashboard/data/lineChartData";
import { lineChartDataDashboardPM2 } from "layouts/dashboard/data/lineChartData";
import { lineChartDataDashboardPM10 } from "layouts/dashboard/data/lineChartData";
import { lineChartDataDashboardTemperature } from "layouts/dashboard/data/lineChartData";
import { lineChartDataDashboardHumidity } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";
import { stringify } from "stylis";

//EXTRA CODE
function Get(yourUrl) {
  var Httpreq = new XMLHttpRequest();
  Httpreq.open("GET", yourUrl, false);
  Httpreq.send(null);
  return Httpreq.responseText;
}

var json_obj = JSON.parse(
  Get("https://api.thingspeak.com/channels/1945266/feeds.json?api_key=QY1ORDCIQV50A5RJ&results=2")
);

var a = json_obj.feeds[1];
var b = json_obj.feeds[0];
var c1, c2, c3, c4, c5, c6, c7;
var n1, n2, n3, n4, n5, n6, n7;
var p1 = parseInt(a.field1);
var q1 = parseInt(b.field1);
//console.log(p, q);
if (p1 > q1) {
  c1 = "success";
  n1 = "+" + ((p1 / q1 - 1) * 100).toFixed(3) + "%";
} else {
  c1 = "error";
  n1 = "-" + ((1 - p1 / q1) * 100).toFixed(3) + "%";
}
var p2 = parseInt(a.field2);
var q2 = parseInt(b.field2);
//console.log(p, q);
if (p2 > q2) {
  c2 = "success";
  n2 = "+" + ((p2 / q2 - 1) * 100).toFixed(3) + "%";
} else {
  c2 = "error";
  n2 = "-" + ((1 - p2 / q2) * 100).toFixed(3) + "%";
}
var p3 = parseInt(a.field3);
var q3 = parseInt(b.field3);
//console.log(p, q);
if (p3 > q3) {
  c3 = "success";
  n3 = "+" + ((p3 / q3 - 1) * 100).toFixed(3) + "%";
} else {
  c3 = "error";
  n3 = "-" + ((1 - p3 / q3) * 100).toFixed(3) + "%";
}
var p4 = parseInt(a.field4);
var q4 = parseInt(b.field4);
//console.log(p, q);
if (p4 > q4) {
  c4 = "success";
  n4 = "+" + ((p4 / q4 - 1) * 100).toFixed(3) + "%";
} else {
  c4 = "error";
  n4 = "-" + ((1 - p4 / q4) * 100).toFixed(3) + "%";
}
var p5 = parseInt(a.field5);
var q5 = parseInt(b.field5);
//console.log(p, q);
if (p5 > q5) {
  c5 = "success";
  n5 = "+" + ((p5 / q5 - 1) * 100).toFixed(3) + "%";
} else {
  c5 = "error";
  n5 = "-" + ((1 - p5 / q5) * 100).toFixed(3) + "%";
}
var p6 = parseInt(a.field6);
var q6 = parseInt(b.field6);
//console.log(p, q);
if (p6 > q6) {
  c6 = "success";
  n6 = "+" + ((p6 / q6 - 1) * 100).toFixed(3) + "%";
} else {
  c6 = "error";
  n6 = "-" + ((1 - p6 / q6) * 100).toFixed(3) + "%";
}
var p7 = parseInt(a.field7);
var q7 = parseInt(b.field7);
//console.log(p, q);
if (p7 > q7) {
  c7 = "success";
  n7 = "+" + ((p7 / q7 - 1) * 100).toFixed(3) + "%";
} else {
  c7 = "error";
  n7 = "-" + ((1 - p7 / q7) * 100).toFixed(3) + "%";
}
var va = 0;
if (400 <= p5 < 500) va = "1";
else if (500 <= p5 < 650) va = "~2";
else if (650 <= p5 < 800) va = "2 - 3";
else if (800 <= p5 < 1100) va = "4 - 5";
else if (1100 <= p5 < 1250) va = "2 - 3";

//EXTRA CODE

function Dashboard() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={20}>
        <VuiBox mb={20}>
          <Grid container spacing={10}>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Temperature", fontWeight: "bold" }}
                count={a.field1}
                percentage={{ color: c1, text: n1 }}
                icon={{ color: "info", component: <IoIosThermometer size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Humidity", fontWeight: "bold" }}
                count={a.field2}
                percentage={{ color: c2, text: n2 }}
                icon={{ color: "info", component: <IoCloudCircleOutline size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Raw VOC", fontWeight: "bold" }}
                count={a.field3}
                percentage={{ color: c3, text: n3 }}
                icon={{ color: "info", component: <IoNuclearSharp size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "VOC Index", fontWeight: "bold" }}
                count={json_obj.feeds[0].field4}
                percentage={{ color: c4, text: n4 }}
                icon={{ color: "info", component: <IoInformationCircle size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <MiniStatisticsCard
                title={{ text: "CO2", fontWeight: "bold" }}
                count={a.field5}
                percentage={{ color: c5, text: n5 }}
                icon={{ color: "info", component: <IoGlobe size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <MiniStatisticsCard
                title={{ text: "PM2.5", fontWeight: "bold" }}
                count={a.field6}
                percentage={{ color: c6, text: n6 }}
                icon={{ color: "info", component: <IoIosDisc size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <MiniStatisticsCard
                title={{ text: "PM10", fontWeight: "bold" }}
                count={a.field7}
                percentage={{ color: c7, text: n7 }}
                icon={{ color: "info", component: <IoMdAddCircle size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <MiniStatisticsCard
                title={{ text: "Estimated People", fontWeight: "bold" }}
                count={va}
                // percentage={{ color: c8, text: n8 }}
                icon={{ color: "info", component: <IoMaleFemaleSharp size="22px" color="white" /> }}
              />
            </Grid>
          </Grid>
        </VuiBox>
        {/* <VuiBox mb={3}>
          <Grid container spacing="18px">
            <Grid item xs={12} lg={12} xl={5}>
              <WelcomeMark />
            </Grid>
            <Grid item xs={12} lg={6} xl={3}>
              <SatisfactionRate />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
              <ReferralTracking />
            </Grid>
          </Grid>
        </VuiBox> */}
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6} xl={6}>
              <Card>
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Temperature
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    {/* <VuiTypography variant="button" color="success" fontWeight="bold">
                      +5% more{" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        in 2021
                      </VuiTypography>
                    </VuiTypography> */}
                  </VuiBox>
                  <VuiBox sx={{ height: "310px" }}>
                    <LineChart
                      lineChartData={lineChartDataDashboardTemperature}
                      lineChartOptions={lineChartOptionsDashboard}
                    />
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6} xl={6}>
              <Card>
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Humidity
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    {/* <VuiTypography variant="button" color="success" fontWeight="bold">
                      +5% more{" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        in 2021
                      </VuiTypography>
                    </VuiTypography> */}
                  </VuiBox>
                  <VuiBox sx={{ height: "310px" }}>
                    <LineChart
                      lineChartData={lineChartDataDashboardHumidity}
                      lineChartOptions={lineChartOptionsDashboard}
                    />
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6} xl={6}>
              <Card>
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Raw VOC
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    {/* <VuiTypography variant="button" color="success" fontWeight="bold">
                      +5% more{" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        in 2021
                      </VuiTypography>
                    </VuiTypography> */}
                  </VuiBox>
                  <VuiBox sx={{ height: "310px" }}>
                    <LineChart
                      lineChartData={lineChartDataDashboardRawVOC}
                      lineChartOptions={lineChartOptionsDashboard}
                    />
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6} xl={6}>
              <Card>
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    VOC Index
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    {/* <VuiTypography variant="button" color="success" fontWeight="bold">
                      +5% more{" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        in 2021
                      </VuiTypography>
                    </VuiTypography> */}
                  </VuiBox>
                  <VuiBox sx={{ height: "310px" }}>
                    <LineChart
                      lineChartData={lineChartDataDashboardVOCIndex}
                      lineChartOptions={lineChartOptionsDashboard}
                    />
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6} xl={6}>
              <Card>
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    CO2
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    {/* <VuiTypography variant="button" color="success" fontWeight="bold">
                      +5% more{" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        in 2021
                      </VuiTypography>
                    </VuiTypography> */}
                  </VuiBox>
                  <VuiBox sx={{ height: "310px" }}>
                    <LineChart
                      lineChartData={lineChartDataDashboardCo2}
                      lineChartOptions={lineChartOptionsDashboard}
                    />
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6} xl={6}>
              <Card>
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    PM2.5
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    {/* <VuiTypography variant="button" color="success" fontWeight="bold">
                      +5% more{" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        in 2021
                      </VuiTypography>
                    </VuiTypography> */}
                  </VuiBox>
                  <VuiBox sx={{ height: "310px" }}>
                    <LineChart
                      lineChartData={lineChartDataDashboardPM2}
                      lineChartOptions={lineChartOptionsDashboard}
                    />
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6} xl={6}>
              <Card>
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    PM10
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    {/* <VuiTypography variant="button" color="success" fontWeight="bold">
                      +5% more{" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        in 2021
                      </VuiTypography>
                    </VuiTypography> */}
                  </VuiBox>
                  <VuiBox sx={{ height: "310px" }}>
                    <LineChart
                      lineChartData={lineChartDataDashboardPM10}
                      lineChartOptions={lineChartOptionsDashboard}
                    />
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>
            {/* <Grid item xs={12} lg={6} xl={5}>
              <Card>
                <VuiBox>
                  <VuiBox
                    mb="24px"
                    height="220px"
                    sx={{
                      background: linearGradient(
                        cardContent.main,
                        cardContent.state,
                        cardContent.deg
                      ),
                      borderRadius: "20px",
                    }}
                  >
                    <BarChart
                      barChartData={barChartDataDashboard}
                      barChartOptions={barChartOptionsDashboard}
                    />
                  </VuiBox>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Active Users
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    <VuiTypography variant="button" color="success" fontWeight="bold">
                      (+23){" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        than last week
                      </VuiTypography>
                    </VuiTypography>
                  </VuiBox>
                  <Grid container spacing="50px">
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoWallet color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Users
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        32,984
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoIosRocket color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Clicks
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        2,42M
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <FaShoppingCart color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Sales
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        2,400$
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoBuild color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Items
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        320
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                  </Grid>
                </VuiBox>
              </Card>
                  </Grid>*/}
          </Grid>
        </VuiBox>
        {/* <Grid container spacing={3} direction="row" justifyContent="center" alignItems="stretch">
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid> */}
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
