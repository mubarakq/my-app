import PropTypes from "prop-types";
// instead of props latest version of react pass an
//  arguement directly to the function
function Student({name="Guest", age=0, isStudent=false}) {
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
// if build was install prop-types won't work
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};


export default Student;
