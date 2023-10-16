import { Outlet } from "react-router-dom";
import Navvar from "../Pages/Navvar/Navvar";

const Root = () => {
    return (
        <div >
            <Navvar></Navvar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;