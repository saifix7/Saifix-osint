/* eslint-disable no-new */
const { ExifImage } = require('exif');
const {
  list,
  input,
  info,
  goBack,
  currentTimeStamp,
  saveTo,
  errorMsg,
  exit,
} = require('./helper');

const exifMetadata = async (image, showHome = false, i = 1) => {
  image = image || (await input('Enter Image Path:'));

  const path = `${process.cwd()}/results/saifix_exif_${currentTimeStamp()}.txt`;
  info('Results will be saved in ', path);

  const finish = () => {
    if (showHome) goBack();
    else exit();
  };

  try {
    new ExifImage({ image }, (error, response) => {
      if (error) {
        errorMsg(error.message);
      } else {
        Object.keys(response).forEach((exifData) => {
          Object.keys(response[exifData]).forEach((key) => {
            if (typeof response[exifData][key] != 'object') {
              list(i++, key, response[exifData][key]);
              saveTo(path, key, response[exifData][key]);
            }
          });
        });
      }
      finish();
    });
  } catch (error) {
    errorMsg(error.message);
    finish();
  }
};

module.exports = exifMetadata;
