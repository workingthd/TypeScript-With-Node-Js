"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreate = exports.UserDelete = exports.UserOne = exports.UserUpdate = exports.allUser = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const Example_1 = __importDefault(require("../model/Example"));
const allUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const example = yield Example_1.default.find();
        res.json(example);
    }
    catch (error) {
        return next(http_errors_1.default.InternalServerError);
    }
});
exports.allUser = allUser;
const UserUpdate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const example = req.params.id;
        const updates = req.body;
        console.log(updates);
        const data = yield Example_1.default.findByIdAndUpdate(example, updates, { new: true });
        res.json(data);
    }
    catch (error) {
        return next(http_errors_1.default.InternalServerError);
    }
});
exports.UserUpdate = UserUpdate;
const UserOne = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const data = yield Example_1.default.findOne({ userId });
        res.json(data);
    }
    catch (error) {
        return next(http_errors_1.default.InternalServerError);
    }
});
exports.UserOne = UserOne;
const UserDelete = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const data = yield Example_1.default.findByIdAndDelete(userId);
        res.json("User Deleted!");
    }
    catch (error) {
        return next(http_errors_1.default.InternalServerError);
    }
});
exports.UserDelete = UserDelete;
const UserCreate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, id } = req.body;
    try {
        const example = yield Example_1.default.findOne({ name });
        if (example)
            return next((0, http_errors_1.default)(406, "example already exists"));
        const newExample = new Example_1.default({ name, id });
        yield newExample.save();
        res.json({ name, id });
    }
    catch (error) {
        return next(http_errors_1.default.InternalServerError);
    }
});
exports.UserCreate = UserCreate;
