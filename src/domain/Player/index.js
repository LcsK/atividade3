const Player = (name) => {
  const proto = {
    getMatches() { return [...this.matches]; },
    addMatch(match) {
      this.matches.push(match);
    },
  };

  const properties = {
    name: {
      configurable: false,
      get: () => this.name,
      set: (value) => {
        this.name = value;
      },
    },
    matches: {
      configurable: false,
      enumerable: false,
      writable: false,
      value: [],
    },
  };

  const player = Object.create(proto, properties);

  player.name = name;

  return player;
};

module.exports = Player;
