import client from "../config/database.js";
import admin from "../firebase/firebase.js";

const userCollection = client.db("startech").collection("Users");

function setSessionCookie(res, sessionCookie) {
    res.cookie('__session', sessionCookie, {
        httpOnly: true,
        secure: false, // set true in production
        sameSite: 'lax',
        maxAge: 5 * 24 * 60 * 60 * 1000,
        path: '/'
    });
}

export const postLogin = async (req, res) => {
    try {
        const { name, phone, google, accessToken } = req.body;
        const decodedToken = await admin.auth().verifyIdToken(accessToken);
        const sessionCookie = await admin.auth().createSessionCookie(accessToken, { expiresIn: 5 * 24 * 60 * 60 * 1000 });

        await userCollection.updateOne(
            name, phone, google,
            { uid: decodedToken.uid },
            { $set: { email: decodedToken.email, lastLoginAt: new Date() } },
            { upsert: true }
        );

        setSessionCookie(res, sessionCookie);
        res.json({ ok: true });
    } catch (err) {
        res.status(401).json({ error: 'Login failed' });
    }
};

export const postLogout = (req, res) => {
    res.clearCookie('__session');
    res.json({ ok: true });
};

// GET /auth/status: returns user claims if logged in
export const status = async (req, res) => {
    try {
        const db = getDb();
        const users = db.collection('users');
        const profile = await users.findOne({ uid: req.user.uid }, { projection: { _id: 0 } });
        return res.json({ authenticated: true, user: profile || { uid: req.user.uid } });
    } catch (e) {
        return res.status(500).json({ error: 'Failed to fetch profile' });
    }
};