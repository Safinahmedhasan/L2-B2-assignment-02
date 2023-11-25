"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
// user create route
router.post('/', user_controller_1.UserControllers.createUser);
// get all user route
router.get('/', user_controller_1.UserControllers.getAllUsers);
// get single user route
router.get('/:userId', user_controller_1.UserControllers.getSingleUsers);
// deleted user route
router.delete('/:userId', user_controller_1.UserControllers.deleteUser);
// update user route
router.put('/:userId', user_controller_1.UserControllers.updateUser);
// user order create route
router.put('/:userId/orders', user_controller_1.UserControllers.addOrderToUser);
// single user order show route
router.get('/:userId/orders', user_controller_1.UserControllers.getAllOrdersForUser);
// single order calculate route
router.get('/:userId/orders/total-price', user_controller_1.UserControllers.calculateTotalPriceForUser);
exports.UserRouter = router;
