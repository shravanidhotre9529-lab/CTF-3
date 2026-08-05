export default function handler(req, res) {
  // Ensure we always return valid JSON
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'POST') {
    // Next.js automatically parses JSON request bodies for API routes
    const { theme } = req.body || {};

    // Return the same theme object and a message
    return res.status(200).json({ theme: theme ?? null, message: 'Theme saved successfully' });
  }

  // Method not allowed for anything other than POST
  res.setHeader('Allow', 'POST');
  return res.status(405).json({ message: 'Method not allowed' });
}
