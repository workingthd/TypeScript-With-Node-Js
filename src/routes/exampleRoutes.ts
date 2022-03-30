import { Router } from "express";
import { allUser, UserCreate,  UserOne, UserUpdate, UserDelete} from "../controllers/exampleControllers";
import { getExampleDataValidation } from "../validation/exampleValidation/exampleValidation";

const router = Router();

router.get("/allUser", allUser);
router.get("/UserOne/:id", UserOne);
router.put("/UserUpdate/:id", UserUpdate);
router.delete("/UserDelete/:id", UserDelete);
router.post("/UserCreate", getExampleDataValidation, UserCreate);

export default router;