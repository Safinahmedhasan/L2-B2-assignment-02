import  express  from "express";
import { UserControllers } from "./user.controller";

const router = express.Router()

// user create route
router.post('/create-user', UserControllers.createUser)

// get all user route
router.get('/', UserControllers.getAllUsers);

// get single user route
router.get('/:userId', UserControllers.getSingleUsers);

// deleted user route
router.delete('/:userId', UserControllers.deleteUser);

// update user route
router.put('/:userId', UserControllers.updateUser);

// user order create route
router.put('/:userId/orders', UserControllers.addOrderToUser);

// single user order show route
router.get('/:userId/orders', UserControllers.getAllOrdersForUser);

// single order calculate route
router.get(
  '/:userId/orders/total-price',
  UserControllers.calculateTotalPriceForUser
);

  




export const UserRouter = router;