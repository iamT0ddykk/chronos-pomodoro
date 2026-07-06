import React from "react";
import { Bounce, ToastContainer } from "react-toastify";

type children = {
  children : React.ReactNode
}
export function MessagesContainer({children} : children) {
  return (
    <>
    {children}

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
}
