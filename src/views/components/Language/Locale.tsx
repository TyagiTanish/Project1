import React, { useEffect, useState } from "react";
// third-party
import { IntlProvider, MessageFormatElement } from "react-intl";
import { useSelector } from "react-redux";

// load locales files
const loadLocaleData = (locale: string) => {
  switch (locale) {
    case "fr":
      return import("../../../utils/locales/fr.json");
    default:
      return import("../../../utils/locales/en.json");
  }
};
// ==============================|| LOCALIZATION ||============================== //
export interface LocalsProps {
  children: React.ReactNode;
}
const Locales = ({ children }: LocalsProps) => {
  const [messages, setMessages] = useState<any>();
  const customization = useSelector((state: any) => {
    return state?.userReducer?.locale;
  });

  useEffect(() => {
    loadLocaleData(customization).then((d) => {
      setMessages(d.default);
    });
  }, [customization]);
  return (
    <>
      {messages && (
        <IntlProvider
          locale={customization}
          defaultLocale="en"
          messages={messages}
        >
          {children}
        </IntlProvider>
      )}
    </>
  );
};
export default Locales;
