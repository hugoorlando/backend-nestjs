import { Request } from 'express';

export const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  // eslint-disable-next-line @typescript-eslint/ban-types
  callback: Function,
) => {
  if (!file) return callback(new Error('File is empty'), false);

  const fileExtension = file.mimetype.split('/')[1];
  const validateExtension = ['jpg', 'jpeg', 'png', 'svg', 'gif'];

  if (validateExtension.includes(fileExtension)) {
    return callback(null, true);
  }

  callback(null, false);
};
