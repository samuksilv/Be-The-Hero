import crypto from "crypto";
import db from '../database/connection';

export class OngController {

    async save(req, res) {

        const { name, email, whatsapp, city, uf } = req.body;

        const id = crypto.randomBytes(4).toString("HEX");

        await db("ongs").insert({
            id, name, email, whatsapp, city, uf
        });


        return res.status(201).json({ id });
    }

    async list(req, res) {
        const ongs = db("ongs").select("*");

        return res.json(ongs);
    }
}

export default new OngController();