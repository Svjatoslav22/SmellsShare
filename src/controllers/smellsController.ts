import { error } from "console";
import Smell from "../models/Smell/Smell";
import { Request, Response } from "express";

export const getSmellById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const smell = await Smell.findById(id);
        if (!smell) {
            return res.status(404).json({ error: "Запах не знайдено" });
        }
        res.json(smell);
    } catch (err) {
        res.status(400).json({ error: "Некоректний id" });
    }
};


export const addSmell = async (req: Request, res: Response) => {
    const { smellType } = req.body;

    const newSmell = new Smell({
        smellType: smellType,
        reactions: []
    });

    const savedSmaell = await newSmell.save();
    res.status(201).json(savedSmaell);
}

export const getRandomSmell = async (req: Request, res: Response) => {
    const count = await Smell.countDocuments();
    const random = Math.floor(Math.random() * count);
    const randomSmell = await Smell.findOne().skip(random);
    res.json(randomSmell || { smellType: "пахне кодом", reactions: [] });
};

export const reactSmell = async (req: Request, res: Response) => {
    const { smellId, reaction } = req.body;

    const smell = await Smell.findById(smellId);
    if (!smell) {
        return res.status(404).json({ error: "Запах не знайдено" });
    }

    smell.reactions.push({ reaction });
    await smell.save();

    res.json({ ok: true, message: "Реакція додана" });
}


export const getPopularSmells = async (req: Request, res: Response) => {
    const smells = await Smell.find();

    const counted = smells.map(smell => ({
        smellType: smell.smellType,
        reactionCount: smell.reactions.length
    }));

    counted.sort((a, b) => b.reactionCount - a.reactionCount);
    const top10 = counted.slice(0, 10);

    res.json(top10);
};


export const getAllSmells = async (req: Request, res: Response) => {
    const smells = await Smell.find().sort({ createdAt: -1 });
    res.json(smells);
};

 export const deleteSmell = async (req: Request, res: Response) => {
    const { id } = req.params;
    await Smell.findByIdAndDelete(id);
    res.json({ ok: true, message: "Запах видалено" });
};

export const getStats = async (req: Request, res: Response) => {
    const totalSmells = await Smell.countDocuments();

    const smells = await Smell.find();
    const totalReactions = smells.reduce((acc, smell) => acc + smell.reactions.length, 0);

    res.json({
        totalSmells,
        totalReactions
    })
};