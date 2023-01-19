import { RoutesIndex } from "./RoutesIndex";
import { RoutesNew } from "./RoutesNew";
import { RoutesShow } from "./RoutesShow";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";

export function Home() {
  const [routes, setRoutes] = useState(JSON.parse(localStorage.getItem("routes")) || []);
  const [isRoutesShowVisible, setIsRoutesShowVisible] = useState(false);
  const [currentRoute, setCurrentRoute] = useState({});

  const [isRoutesNewVisible, setIsRoutesNewVisible] = useState(false);

  // const routes = [
  //   { id: 1, reference: "01", status: "Requested" },
  //   { id: 2, reference: "02", status: "Scheduled" },
  //   { id: 3, reference: "03", status: "Active" },
  //   { id: 4, reference: "04", status: "Completed" },
  //   { id: 5, reference: "05", status: "Closed" },
  //   { id: 6, reference: "06", status: "Cancelled" },
  // ];

  const handleCreateRoute = (params, successCallback) => {
    console.log("handleCreateRoute", params);
    setRoutes([...routes, { id: Date.now(), reference: params.reference, status: params.status }]);
    successCallback();
    handleCloseNew();
  };

  const handleShowRoute = (route) => {
    console.log("handleShowRoute", route);
    setIsRoutesShowVisible(true);
    setCurrentRoute(route);
  };

  var handleClose = () => {
    console.log("handleClose");
    setIsRoutesShowVisible(false);
  };

  var handleCloseNew = () => {
    console.log("handleCloseNew");
    setIsRoutesNewVisible(false);
  };

  // button is not updating the route
  const handleUpdateRoute = (params, successCallback) => {
    console.log("handleUpdateRoute", params);
    setRoutes(
      routes.map((route) => {
        if (route.id === params.id) {
          return params;
        } else {
          return route;
        }
      })
    );
    successCallback();
    handleClose();
  };

  // this saves the routes to local storage everytime the routes react State changes
  useEffect(() => {
    localStorage.setItem("routes", JSON.stringify(routes));
  }, [routes]);

  return (
    <div>
      <Modal show={isRoutesNewVisible} onClose={handleCloseNew}>
        <RoutesNew onCreateRoute={handleCreateRoute} />
      </Modal>
      <RoutesIndex routes={routes} onShowRoute={handleShowRoute} onShowRouteNew={() => setIsRoutesNewVisible(true)} />
      <Modal show={isRoutesShowVisible} onClose={handleClose}>
        <RoutesShow route={currentRoute} onUpdateRoute={handleUpdateRoute} />
      </Modal>
    </div>
  );
}
