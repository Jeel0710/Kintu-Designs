import "./home.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import Featured1 from "../../components/featured/Featured1";
import Chart from "../../components/chart/Chart";
import Table1 from "../../components/table/Table1";
import Button1 from "../../components/buttoncomponent/Button1";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="p-24">
          <h1 className="hometitle">CBPatel Dashboard</h1>
        </div>
        <br />
        <div className="buttoncomponent">
          <Button1 />
        </div>
        <br /><br /><br />
        <div className="charts1">
          <Chart />
        </div>
        <br />
        <div className="charts">
          <Featured type="members"/>
          <Featured1 type="inquiry"/>
          <Featured1 type="app-users"/>
        </div>
        <br />
        <div className="charts">
          <Featured1 type="month-results"/>
          <Featured1 type="inquiry"/>
          <Featured1 type="membership-expired"/>
        </div>
        <br />
        <div className="charts">
          <Featured1 type="consultants-sales"/>
          <Featured type="member-age-group"/>
          <Featured1 type="payments-efficiency"/>
        </div>
        <br />
        <div className="listContainer">
          <div className="listTitle">RECENTLY REGISTERED USERS</div>
          <Table1 />
        </div>
      </div>
    </div>
  )
}

export default Home