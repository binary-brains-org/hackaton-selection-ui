import { Snackbar } from "@mui/material";

const RenderError = ({ message }: { message: string }) => {
  return <Snackbar open={true} autoHideDuration={6000} message={message} />;
};

const DialogError = (error: Error) => {
  return <RenderError message={error.message} />;
};

export default DialogError;
