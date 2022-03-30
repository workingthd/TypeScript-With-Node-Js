"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const exampleControllers_1 = require("../controllers/exampleControllers");
const exampleValidation_1 = require("../validation/exampleValidation/exampleValidation");
const router = (0, express_1.Router)();
router.get("/allUser", exampleControllers_1.allUser);
router.get("/UserOne/:id", exampleControllers_1.UserOne);
router.put("/UserUpdate/:id", exampleControllers_1.UserUpdate);
router.delete("/UserDelete/:id", exampleControllers_1.UserDelete);
router.post("/UserCreate", exampleValidation_1.getExampleDataValidation, exampleControllers_1.UserCreate);
exports.default = router;