const withAge = (WrappedComponent) => {
  const Component = (props) => {
    console.log("withAge", props);

    return <WrappedComponent {...props} age="25" />;
  };

  return Component;
};

export default withAge;
