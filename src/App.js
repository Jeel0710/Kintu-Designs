import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Class from "./pages/classes/Class";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Client from "./pages/client/Client";
import Employee from "./pages/employee/Employee";
import Notification from "./pages/notification/Notification";
import Supplier from "./pages/supplier/Supplier";
import AddSupplier from "./pages/supplier/AddSupplier";
import Plan from "./pages/plan/Plan";
import Createprogram from "./pages/createprogram/Createprogram";
import Phototracking from "./pages/phototracking/Phototracking";
import Diet from "./pages/diet/Diet";
import Water from "./pages/schedule/Water";
import Sleep from "./pages/schedule/Sleep";
import Dietplan from "./pages/schedule/Dietplan";
import Exercise from "./pages/schedule/Exercise";
import Inventory from "./pages/Inventory/Inventory";
import Membership from "./pages/Membership/Membership";
import Shifts from "./pages/shifts/Shifts";
import Reports from "./pages/reports/Reports";
import Bodyreport from "./pages/bodyreport/Bodyreport";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="login" index element={<Login/>} />
            <Route path="class" index element={<Class/>} />
            <Route path="client" index element={<Client />} />
            <Route path="employee" index element={<Employee /> } />
            <Route path="notification" index element={<Notification />} />
            <Route path="plan" index element={<Plan />} />
            <Route path="program" index element={<Createprogram />} />
            <Route path="tracking" index element={<Phototracking />} />
            <Route path="diet" index element={<Diet />} />
            <Route path="water" index element={<Water />} />
            <Route path="sleep" index element={<Sleep />} />
            <Route path="diet-plan" index element={<Dietplan />} />
            <Route path="exercise" index element={<Exercise />} />
            <Route path="inventory" index element={<Inventory />} />
            <Route path="membership" index element={<Membership />} />
            <Route path="shifts" index element={<Shifts />} />
            <Route path="reports" index element={<Reports />} />
            <Route path="bodyreports" index element={<Bodyreport />} />
            <Route path="supplier">
              <Route index element={<Supplier/>}/>
              <Route path=":add" index element={<AddSupplier/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
