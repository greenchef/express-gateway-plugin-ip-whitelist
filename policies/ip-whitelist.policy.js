module.exports = {
  name: 'ip-whitelist',
  schema: {
    $id: 'N/A',
    type: 'object',
    properties: {
      ipList: {
        type: 'array',
      }
    }
  },
  policy: ({ ipList }) => {
    return async (req, res, next) => {
      try {
        const ip = req.connection.remoteAddress;
        if (ipList.includes(ip)){
          next()
          return
        }
        res.sendStatus(401);
      } catch (e) {
        console.error('Error in ip-whitelist policy:', e.error)
        res.sendStatus(500)
        return;
      }
      next();
    };
  }
};
