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
const express_1 = require("express");
const Manga_js_1 = __importDefault(require("../../../models/Mangas/Manga.js"));
const router = (0, express_1.Router)();
router.delete('/deletecomments/comments/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, mangaId } = req.query;
    try {
        const manga = yield Manga_js_1.default.findById(mangaId);
        const deleted = yield manga.comments.filter((c) => c._id.toString() !== id);
        yield Manga_js_1.default.findByIdAndUpdate({ _id: mangaId }, { comments: deleted });
        const update = yield Manga_js_1.default.findById(mangaId);
        res.status(200).json(update);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
