function Card(props) {
  return (
    <div className="card flex " style={{width:"18rem"}}>
  <img src={props.imgUrl} className="card-img-top" alt="..."  />
  <div className="card-body">
    <h5 className="card-title">Tourist places -{props.name}</h5>
    <p className="card-text">INFO:: {props.tname}</p>
    <a href={props.href} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}

export default  Card