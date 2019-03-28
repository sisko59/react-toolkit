export default overRideProps => BaseComponent => props => (
  <BaseComponent {...props} {...overRideProps} />
);
