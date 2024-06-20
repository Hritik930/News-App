import image from '../assets/img.jpg'

const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card plate" style={{width: "345px"}}>
      <img style={{height: "200px", width:"360px"}} src={src ? src:image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,90):"Custon description"} </p>
        <a href={url} className="btn btn-primary"> Read More </a>
      </div>
    </div>
  );
};

export default NewsItem;
