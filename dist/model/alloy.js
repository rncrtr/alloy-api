'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var AlloySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ratio: {
    type: Number
  }
});

module.exports = _mongoose2.default.model('Alloy', AlloySchema);
//# sourceMappingURL=alloy.js.map