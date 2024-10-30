import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { HiAcademicCap } from "react-icons/hi2";

interface Props {
  message: String;
  color?: "primary" | "secondary" | "danger" | "success" | "warning";
  visible: boolean;
  onClose: () => void;
}

const Alert = ({ message, color = "success", visible, onClose }: Props) => {
  return (
    visible && (
      <React.Fragment>
        <div
          className={`alert alert-${color} alert-dismissible fade show`}
          role="alert"
        >
          <HiAcademicCap />
          {message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
      </React.Fragment>
    )
  );
};

export default Alert;
