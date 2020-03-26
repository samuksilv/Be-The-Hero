import crypto from "crypto";
import db from '../database/connection';

export class OngController {

    async create(request, response) {

        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString("HEX");

        await db("ongs").insert({
            id, name, email, whatsapp, city, uf
        });


        return response.status(201).json({ id });
    }

    async list(request, response) {
        
        const ongs = await db("ongs").select("*");

        return response.json(ongs);
    }
}

export default new OngController();