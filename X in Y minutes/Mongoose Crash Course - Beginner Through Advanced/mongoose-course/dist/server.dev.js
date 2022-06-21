"use strict";

var mongoose = require('mongoose');

var User = require('./User');

mongoose.connect('mongodb://localhost/testdb');
run();

function run() {
  var user;
  return regeneratorRuntime.async(function run$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.find({
            name: 'Kyle'
          }));

        case 3:
          user = _context.sent;
          console.log(user);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0.message);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}