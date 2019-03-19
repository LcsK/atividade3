const { validateStringLength, validateImage } = require('./validators');

const validateString128Length = validateStringLength(128);

module.exports = ({
  name, description, address,
}) => {
  const proto = {
    getMenu() { return [...this.menu]; },
    addMenuPhoto(menuPhoto) {
      if (validateImage(menuPhoto)) {
        this.menu.push(menuPhoto);
      }
    },
    getPhotos() { return [...this.photos]; },
    addPhoto(photo) {
      if (validateImage(photo)) {
        this.photos.push(photo);
      }
    },
  };
  const properties = {
    name: {
      configurable: false,
      get: () => this.name,
      set: (value) => {
        if (validateStringLength(64)(value)) {
          throw new Error('invalid data');
        }
        this.name = value;
      },
    },
    description: {
      configurable: false,
      get: () => this.description,
      set: (value) => {
        if (validateString128Length(value)) {
          throw new Error('invalid data');
        }
        this.description = value;
      },
    },
    address: {
      configurable: false,
      get: () => this.address,
      set: (value) => {
        if (validateString128Length(value)) {
          throw new Error('invalid data');
        }
        this.address = value;
      },
    },
    menu: {
      value: [],
      configurable: false,
      writtable: false,
    },
    photos: {
      value: [],
      configurable: false,
      writtable: false,
    },
  };

  const bar = Object.create(proto, properties);

  bar.name = name;
  bar.description = description;
  bar.address = address;

  return bar;
};
