const validateStringLength = length => value => typeof value !== 'string' || value.length > length;
const validateImage = data => Buffer.isBuffer(data);

module.exports = {
  validateStringLength,
  validateImage,
};
