export const bookRoute = {
  path: '/api/book',
  method: 'get',
  handler: (req, res) => {
    res.status(200).json({ it: 'It works' });
  },
};
