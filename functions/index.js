const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { AccessToken } = require('livekit-server-sdk');
const cors = require('cors')({ origin: true });

admin.initializeApp();

// LiveKit credentials
const LIVEKIT_API_KEY = 'APIpwGekiRj6WSd';
const LIVEKIT_API_SECRET = 'IXB2f9Qw3Ie8u2AA74rR4idWRMjVj2YPeIB3lveiUwID';

// Generate LiveKit token
exports.getLiveKitToken = functions.https.onRequest((req, res) => {
  return cors(req, res, async () => {
    try {
      const { room, identity } = req.body;

      if (!room || !identity) {
        return res.status(400).json({ error: 'room and identity are required' });
      }

      const at = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, {
        identity: identity,
      });

      at.addGrant({
        roomJoin: true,
        room: room,
        canPublish: true,
        canSubscribe: true,
        canPublishData: true,
      });

      const token = await at.toJwt();

      res.json({ token });
    } catch (error) {
      console.error('Token generation error:', error);
      res.status(500).json({ error: 'Failed to generate token' });
    }
  });
});