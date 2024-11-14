import { Alert } from "react-bootstrap";

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaltProps = {
  variant: "info", // Default variant is info
};

export default Message;
