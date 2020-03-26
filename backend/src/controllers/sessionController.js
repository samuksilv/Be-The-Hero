import db from '../database/connection';

export class SessionController {

    async login(request, response) {
        const { id } = request.body;

        const ong = await db('ongs')
            .where('id', id)
            .select('name')
            .first();

        if (!ong)
            return response.status(400).json({ error: 'No ONG found with this ID.' });

        return response.json(ong);
    }
}

export default new SessionController();