export function RoutesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateRoute(Object.fromEntries(params), () => event.target.reset());
  };

  return (
    <div>
      <h1>New Route</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="id" type="hidden" />
        </div>
        <div>
          Reference: <input name="reference" className="form-control" type="text" />
        </div>
        <div>
          Status: <input defaultValue="Requested" className="form-control" name="status" type="text" list="statuses" />
          <datalist id="statuses">
            <option value="Requested">Requested</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
            <option value="Closed">Closed</option>
            <option value="Cancelled">Cancelled</option>
          </datalist>
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Create route
        </button>
      </form>
    </div>
  );
}
