module.exports = bar => menuItem => date => player1 => (player2) => {
  if (player1.getCurrentMatch() || player2.getCurrentMatch()) {
    throw new Error('both players should not be in match');
  }

  return {
    bar,
    menuItem,
    date,
    player1,
    player2,
  };
};
