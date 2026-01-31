const withCity = (WrappedComponent) => {
  const Component = (props) => {
    console.log("withCity", props);

    return <WrappedComponent {...props} city="Kumta" />;
  };

  return Component;
};

export default withCity;
