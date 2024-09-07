const shortid = require('shortid');
const URL = require('../models/url');

const createUrl = async (req, res) => {
    const { url } = req.body;
    const shortId = shortid(8);

    try {
        const data = await URL.create({
            shortId,
            redirectUrl: url,
            visitHistory: [],
        });

        return res.json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

async function redirectUrltoSite(req, res) {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        { shortId },
        { $inc: { visitCount: 1 } },
        { new: true }
    );

    if (!entry || !entry.redirectUrl) {
        return res.status(404).send({ error: 'URL not found' });
    }

    res.redirect(entry.redirectUrl);
}

module.exports = {
    createUrl,
    redirectUrltoSite,
};