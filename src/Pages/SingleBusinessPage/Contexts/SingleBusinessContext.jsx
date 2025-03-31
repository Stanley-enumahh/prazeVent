import { createContext, useContext, useState } from "react";

const BusinessContext = createContext();

function BusinessProvider({ children }) {
  const [openWriteReview, setOpenWriteReview] = useState(false);
  const [openResponsive, setOpenResponsive] = useState(false);

  const handleModalOpen = () => {
    setOpenWriteReview(true);
    setOpenResponsive(true);
  };

  const handleCloseModal = (value) => {
    setOpenWriteReview(false);
    // setSelectedValue(value);
  };

  return (
    <BusinessContext.Provider
      value={{ openWriteReview, handleModalOpen, handleCloseModal }}
    >
      {children}
    </BusinessContext.Provider>
  );
}

function UseBusiness() {
  const context = useContext(BusinessContext);
  if (context === undefined) {
    console.error("context is being used outside the provider");
  }

  return context;
}

export { BusinessProvider, UseBusiness };
