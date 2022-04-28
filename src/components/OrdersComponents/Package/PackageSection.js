import React from "react";
import PackageInputGroups from "./PackageInputGroups";
import PackageImage from "../../../assets/ordersIcons/package.svg";
import { useTranslation } from "react-i18next";

const PackageSection = ({ middle,Active_button}) => {
  const {t}=useTranslation(["orders","orders/manorder"])

  return (
    <div
      className={middle ? "package-section middle-package" : "package-section"}
    >
      <div className="package-head">
        <div className="package-head-top">
          <img src={PackageImage} alt="packagePlus" />
          <h4>{t("orders/manorder:package")}</h4>
        </div>
        <div onClick={Active_button}>          
        <i className="far fa-angle-up"></i>
        </div>
      </div>
      {/* packageInputs */}
      <PackageInputGroups />
    </div>
  );
};

export default PackageSection;
