module.exports = function(message, callback) {
  switch (message.id) {
    case 'dmm_forcecookies':
      callback({ value: true })
      break
    default: callback(false)
  }
}
