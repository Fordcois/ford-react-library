import Banner from "../components/Banner/Banner";


const ViewComponentPage = ({passedComponent}) => {

  return (
    <div>
      <Banner />
      <div>
        Let us have a look at this component<br/>
        {passedComponent}
      </div>
    </div>
  );
};

export default ViewComponentPage;
