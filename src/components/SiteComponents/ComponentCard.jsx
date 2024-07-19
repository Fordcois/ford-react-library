import { FaCode } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const ComponentCard = ({ name, description, url, tags }) => {
  return (
    <div className="Component-card-container">
      <a href={url}>
      <div className="Component-card">
      <div className="Header">
      {name}<FaCode />
      </div>
      <div className="Stripe" />
      {/* {tags.map((tag, index) => <span key={index}>{tag}</span>)} */}

      <div className="Description">
      {description}
      </div>
      <div className="Tags">
      {tags.map((tag, index) => 
        <span key={index} className="single-tag">{tag}
        {index < tags.length - 1 ? ' - ' : ''}
        </span>
        
      )}
      </div>
      {/* Description Should Have Max Height and then scrollable */}
      </div>
      </a>
    </div>
  );
};

export default ComponentCard;
``