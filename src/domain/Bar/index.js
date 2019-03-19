module.exports = ({
  name, description, address,
}) => {
  const properties = {
    name: {
      value: name,
    },
    description: {
      value: description,
    },
    address: {
      value: address,
    },
  };

  return Object.create(null, properties);
};
