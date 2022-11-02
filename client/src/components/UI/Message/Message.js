import { useContext, useEffect, useState } from "react";
import AppContext from "../../../context/app-context";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";

// there are two ways to send message in my application
// the first is by using router state (flash message on the next route)
// the second is by using context (if you are on the same page)

function Message() {
  const { message, clearMessage } = useContext(AppContext);
  const [firstRender, setFirstRender] = useState(true);
  const flashMessage = useLocation()["state"]?.["flashMessage"];

  useEffect(() => {
    if (flashMessage && firstRender) {
      toast[flashMessage["type"]](flashMessage["text"]);
    }
    setFirstRender(false);

    if (message) {
      toast[message["type"]](message["text"]);
    }
    clearMessage();
  }, [message, clearMessage, flashMessage, firstRender]);

  return <ToastContainer />;
}

export default Message;
