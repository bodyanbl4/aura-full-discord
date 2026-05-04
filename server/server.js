const express = require('express');
const cors = require('cors');
const { AccessToken } = require('livekit-server-sdk');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Генерация LiveKit токена
app.post('/token', async (req, res) => {
  try {
    const { room, identity } = req.body;
    
    if (!room || !identity) {
      return res.status(400).json({ error: 'room and identity are required' });
    }

    const apiKey = process.env.LIVEKIT_API_KEY;
    const apiSecret = process.env.LIVEKIT_API_SECRET;

    if (!apiKey || !apiSecret) {
      return res.status(500).json({ error: 'LiveKit credentials not configured' });
    }

    const at = new AccessToken(apiKey, apiSecret, {
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

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'aura-livekit-server' });
});

app.listen(PORT, () => {
  console.log(`🚀 LiveKit Token Server running on port ${PORT}`);
  console.log(`📡 LiveKit URL: ${process.env.LIVEKIT_URL}`);
});