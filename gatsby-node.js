const path = require('path');

exports.modifyWebpackConfig = ({ config, _stage }) => {
  return config.merge({
    resolve: {
      alias: {
        blocks: path.resolve(config._config.context, 'src/components/blocks')
      },
    },
  });
};
