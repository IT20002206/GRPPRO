import classes from "./Details.module.css";

const Details = (props) => {
  return (
    <>
      <div className={classes.container}>
        <div>{props.data.studentName}</div>
        <div>{props.data.date_time}</div>
      </div>
    </>
  );
};
export default Details;
