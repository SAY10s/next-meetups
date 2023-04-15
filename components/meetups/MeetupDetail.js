import Classes from "./MeetuoDetail.module.css";

const MeetupDetail = (props) => {
  return (
    <section className={Classes.detail}>
      <img src={props.image} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetail;
