import admin from "../firebase/firebase.js";

export async function auth(req, res, next) {
    try {
        const sessionCookie = req.cookies.__session;
        if (!sessionCookie) return res.status(401).json({ error: 'Unauthenticated' });

        const decodedClaims = await admin.auth().verifySessionCookie(sessionCookie, true);
        req.user = decodedClaims;
        next();
    } catch (e) {
        return res.status(401).json({ error: 'Invalid or expired session' });
    }
}
