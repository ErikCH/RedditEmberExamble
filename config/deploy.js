module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'image',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
