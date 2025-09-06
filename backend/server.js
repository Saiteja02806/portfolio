const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // allow all origins (for testing)
app.use(express.json());

app.get('/health', (req, res) => res.json({ ok: true }));
app.get('/api/hello', (req, res) => {
  res.json({ msg: 'Hello from backend!', time: new Date().toISOString() });
});

// fallback for unknown routes
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Backend listening on ${port}`));
