import { FaCode } from "react-icons/fa";
const ComponentCard = ({ name, description, url, tags,toggleInFilterList }) => {
  return (
    <div className="Component-card-container">
      
      <div className="Component-card">
        <a href={url}>
        <div className="Header">
          {name}<FaCode />
        </div>
      </a>
      <div className="Stripe" />
      {/* {tags.map((tag, index) => <span key={index}>{tag}</span>)} */}

      <div className="Description">
        {description}
      </div>
      <div className="Tags">
        {tags.map((tag, index) => 
          <span key={index} className="single-tag" onClick={()=>toggleInFilterList(tag)}>{tag}
          {index < tags.length - 1 ? ' - ' : ''}
          </span>
          
        )}
      </div>
      {/* Description Should Have Max Height and then scrollable */}
    </div>
      
    </div>
  );
};

export default ComponentCard;
``