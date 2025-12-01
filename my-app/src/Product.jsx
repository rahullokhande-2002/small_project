const Product = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-header fw-bold">{props.name}</div>

        <div className="card-body">
          <img src={props.image} alt="iPhone 16" />
        </div>

        <div className="card-footer">
          <button className="btn btn-danger me-3 fw-2">{props.btn}</button>
          <button className="btn btn-primary">{props.btn2}</button>
        </div>
      </div>
    </>
  );
};

export default Product;
