import * as React from 'react';
import { useDropzone } from 'react-dropzone';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';

interface Props extends ButtonProps {
  image: ArrayBuffer | string | null;
  setImage: React.Dispatch<React.SetStateAction<ArrayBuffer | string | null>>;
}

const MyImage = styled('img')(({ theme }) => ({
  height: 192,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  border: `1px solid ${theme.palette.divider}`,
}));

const ImageForm: React.FC<Props> = ({ image, setImage, ...rest }: Props) => {
  const onDrop = React.useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64data = reader.result;
        setImage(base64data);
      };
    },
    [setImage]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/*',
  });

  return (
    <div>
      {image && (
        <Box display="flex" justifyContent="center" mb={2}>
          <MyImage src={image.toString()} alt="background of post" />
        </Box>
      )}
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <Button {...rest}>Image upload</Button>
      </div>
    </div>
  );
};

export default ImageForm;
