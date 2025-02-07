import Home from "../pages/Buyer/Home"
import { useRoutes } from "react-router-dom";
function RoutesComponent() {
  const routesElement = useRoutes([
      { path: "/", element: <Home /> },
      
  ]);

  return (
      <>
          {routesElement}
      </>
  )
}
export default RoutesComponent