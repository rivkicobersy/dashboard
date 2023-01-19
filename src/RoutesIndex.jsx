export function RoutesIndex(props) {
  return (
    <div className="container">
      <div className="float-end pt-5 ">
        <button onClick={() => props.onShowRouteNew()} className="rounded-circle text-white bg-info">
          +
        </button>
      </div>
      <h2 className="pt-5">Routes Dashboard</h2>
      <div className="row pt-5">
        <div className="col">
          <div className="p-1 bg-secondary ">
            <h3>🟧 Requested</h3>
          </div>
          <div className="p-1 bg-light ">
            <h5>Reference</h5>
          </div>

          {props.routes
            .filter((r) => r.status === "Requested")
            .map((route) => (
              <div key={route.id}>
                <div className="border pg-4 ">
                  <p>
                    {route.reference}
                    <button onClick={() => props.onShowRoute(route)} className="float-end">
                      🖊️
                    </button>
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="col">
          <div className="p-1 bg-secondary">
            <h3>🟦 Scheduled</h3>
          </div>

          <div className="p-1 bg-light ">
            <h5>Reference</h5>
          </div>

          {props.routes
            .filter((r) => r.status === "Scheduled")
            .map((route) => (
              <div key={route.id}>
                <div className="border">
                  <p>
                    {route.reference}
                    <button onClick={() => props.onShowRoute(route)} className="float-end">
                      🖊️
                    </button>
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="col">
          <div className="p-1 bg-secondary ">
            <h3>🟨 Active</h3>
          </div>

          <div className="p-1 bg-light ">
            <h5>Reference</h5>
          </div>

          {props.routes
            .filter((r) => r.status === "Active")
            .map((route) => (
              <div key={route.id}>
                <div className="border">
                  <p>
                    {route.reference}
                    <button onClick={() => props.onShowRoute(route)} className="float-end">
                      🖊️
                    </button>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="row pt-5">
        <div className="col">
          <div className="p-1 bg-secondary text-dark ">
            <h3>🟪 Completed</h3>
          </div>

          <div className="p-1 bg-light ">
            <h5>Reference</h5>
          </div>

          {props.routes
            .filter((r) => r.status === "Completed")
            .map((route) => (
              <div key={route.id}>
                <div className="border">
                  <p>
                    {route.reference}
                    <button onClick={() => props.onShowRoute(route)} className="float-end">
                      🖊️
                    </button>
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="col">
          <div className="p-1 bg-secondary">
            <h3>🟩 Closed</h3>
          </div>

          <div className="p-1 bg-light ">
            <h5>Reference</h5>
          </div>

          {props.routes
            .filter((r) => r.status === "Closed")
            .map((route) => (
              <div key={route.id}>
                <div className="border">
                  <p>
                    {route.reference}
                    <button onClick={() => props.onShowRoute(route)} className="float-end">
                      🖊️
                    </button>
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="col">
          <div className="p-1 bg-secondary">
            <h3>🟥 Cancelled</h3>
          </div>

          <div className="p-1 bg-light ">
            <h5>Reference</h5>
          </div>

          {props.routes
            .filter((r) => r.status === "Cancelled")
            .map((route) => (
              <div key={route.id}>
                <div className="border">
                  <p>
                    {route.reference}
                    <button onClick={() => props.onShowRoute(route)} className="float-end">
                      🖊️
                    </button>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
