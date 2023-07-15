import React from "react";

type Props = {
  validationMessage: string,
}

export const ValidationMessage: React.FC<Props> = ({ validationMessage }) => {
  return (
    <div>
      {validationMessage}
    </div>
  )
}