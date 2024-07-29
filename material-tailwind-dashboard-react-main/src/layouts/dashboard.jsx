import { Routes, Route, Navigate } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
  Header,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";

import { Cost, Emission, FuelHistory, OverView, ServiceHistory, WorkOrders } from "@/pages/dashboard";

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      />
      <div className="p-2 xl:ml-80">
        <DashboardNavbar />
        <Configurator />
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>
        <Routes>
          {routes.map(({ layout, pages }) =>
            layout === "dashboard" &&
            pages.map(({ path, element, children }) => (
              <Route key={path} path={path} element={element}>
                {children &&
                  children.map(({ path: subPath, element: subElement }) => (
                    <Route key={subPath} path={subPath} element={subElement} />
                  ))}
              </Route>
            ))
          )}
          <Route path="header/*" element={<Header />}>
            <Route index element={<Navigate to="overview" />} />
            <Route path="overview" element={<OverView />} />
            <Route path="serviceHistory" element={<ServiceHistory />} />
            <Route path="fuelHistory" element={<FuelHistory />} />
            <Route path="workOrders" element={<WorkOrders />} />
            <Route path="Emission" element={<Emission/>} />
            <Route path= "cost" element={<Cost/>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;