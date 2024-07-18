// eslint-disable-next-line react/prop-types
const ComponentCard = ({ name, description, url, tags }) => {
  return (
    // Drop Shadow for the Card
    <div className="Component-card-container">
      <div className="Header">
        <a href={url} className="title">{name}</a></div>
        <div className="Description">{description}</div>
        {/* Description Should Have Max Height and then scrollable */}
      
    </div>
  );
};

export default ComponentCard;
``