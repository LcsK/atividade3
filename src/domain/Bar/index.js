module.exports = ({
  name, description, address,
}) => {
  const proto = {
    getMenu() { return [...this.menu]; },
    addMenuPhoto(menuPhoto) {
      if (Buffer.isBuffer(menuPhoto)) {
        this.menu.push(menuPhoto);
      }
    },
    getPhotos() { return [...this.photos]; },
    addPhoto(photo) {
      if (Buffer.isBuffer(photo)) {
        this.photos.push(photo);
      }
    },
  };
  const properties = {
    name: {
      configurable: false,
      get: () => this.name,
      set: (value) => {
        if (typeof value !== 'string' || value.length > 64) {
          throw new Error('invalid data');
        }
        this.name = value;
      },
    },
    description: {
      configurable: false,
      get: () => this.description,
      set: (value) => {
        if (typeof value !== 'string' || value.length > 128) {
          throw new Error('invalid data');
        }
        this.description = value;
      },
    },
    address: {
      configurable: false,
      get: () => this.address,
      set: (value) => {
        if (typeof value !== 'string' || value.length > 128) {
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
