export function RoutesShow(props) {
  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    const params = Object.fromEntries(new FormData(event.target));
    params.id = parseInt(params.id);
    props.onUpdateRoute(params, () => event.target.reset());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Route information</h1>
        <input name="id" defaultValue={props.route.id} type="hidden" />
        <div>
          Reference:{" "}
          <input defaultValue={props.route.reference} name="reference" className="form-control" type="text" />
        </div>
        <div>
          Status:
          <select name="status" className="form-control" defaultValue={props.route.status}>
            <option>Requested</option>
            <option>Scheduled</option>
            <option>Active</option>
            <option>Completed</option>
            <option>Closed</option>
            <option>Cancelled</option>
          </select>
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Update route
        </button>
      </form>
    </div>
  );
}
