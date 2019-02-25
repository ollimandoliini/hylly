exports.up = pgm => {
  pgm.addColumns('collections', { description: { type: 'text' } });
};
