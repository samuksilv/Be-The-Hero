import crypto from "crypto";
import db from '../database/connection';

export class OngController {

    async save(req, res) {

        const { name, email, whatsapp, city, uf } = req.body;

        const id = crypto.randomBytes(4).toString("HEX");

        await db("ongs").insert({
            id, name, email, whatsapp, city, uf
        });


        return res.json({ id });
    }
}

export default new OngController();