import * as React from 'react';
import { DropzoneOptions, FileRejection, useDropzone } from 'react-dropzone';

import { styled } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

interface Props {
  image: ArrayBuffer | string | null;
  setFieldValue: (
    field: string,
    value: ArrayBuffer | string | null,
    shouldValidate?: boolean
  ) => void;
  name: string;
  id?: string;
  error?: boolean;
  helperText?: string;
  imageAlt?: string;
  optionsImage?: Omit<DropzoneOptions, 'onDrop'>;
  boxProps?: BoxProps;
  buttonProps?: ButtonProps;
}

const MyImage = styled('img')(({ theme }) => ({
  height: 192,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  border: `1px solid ${theme.palette.divider}`,
}));

const ImageForm: React.FC<Props> = ({
  image,
  setFieldValue,
  error,
  helperText,
  boxProps,
  buttonProps,
  optionsImage,
  imageAlt,
  name,
  id,
}: Props) => {
  const [errorMessage, setErrorMessage] = React.useState<Array<string>>([]);

  const onDrop = React.useCallback(
    (acceptedFiles: any, rejectedFiles: FileRejection[]) => {
      try {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onloadend = () => {
          const base64data = reader.result;
          setFieldValue('image', base64data);
        };
      } catch (error: any) {
        const listErrorMessage: Array<string> = [];

        rejectedFiles.forEach((files) => {
          files.errors.forEach((error) => {
            listErrorMessage.push(error.message);
          });
        });

        setErrorMessage(listErrorMessage);
      }
    },
    [setFieldValue]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    ...optionsImage,
  });

  return (
    <Box {...boxProps}>
      {image && (
        <Box display="flex" justifyContent="center" mb={2}>
          <MyImage src={image.toString()} alt={imageAlt} />
        </Box>
      )}
      <div {...getRootProps()}>
        <input {...getInputProps()} id={id} name={name} />
        {error || errorMessage.length > 0 ? (
          <Button {...buttonProps} color="error">
            Image upload
          </Button>
        ) : (
          <Button {...buttonProps}>Image upload</Button>
        )}
      </div>
      {error && <FormHelperText error={error}>{helperText}</FormHelperText>}
      {errorMessage && (
        <List disablePadding>
          {errorMessage.map((message, idx) => (
            <ListItem key={idx}>
              <FormHelperText error>- {message}</FormHelperText>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default ImageForm;
