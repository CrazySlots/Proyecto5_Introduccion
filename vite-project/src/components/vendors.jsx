import vendor1 from "../assets/new-rock.png"
import vendor2 from "../assets/tuk.jpg"
import vendor3 from "../assets/branadit.jpg"
import './Vendors.css';
const Vendors =()=>{
    const vendorImages=[
        {img:vendor1,
            name:" New Rock ",
            description: " Calzado de alta costura orientado a respresentar la cultura del rock "
        },
        {img:vendor2,
            name:" TUK ",
            description: " Calzado de diseñador orientado a la cultura punk. "},
        {img:vendor3,
            name:" Branadit ",
            description: " Calzado de alta resistencia con orientaciones militares. "}
    
        ];
        return (
    <div className="vendor-container">
      {vendorImages.map((vendor, index) => (
        <div className="vendor-card" key={index}>
          <img src={vendor.img} alt={vendor.name} />
          <h3>{vendor.name}</h3>
          <div className="red-line" />
          <p>{vendor.description}</p>
        </div>
      ))}
    </div>
        )
}
export default Vendors ;