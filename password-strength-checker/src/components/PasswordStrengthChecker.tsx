import React from "react";

type Props = {
  password: string,
  onSectionsRendering: (password: string) => JSX.Element[],
}

export const PasswordStrengthChecker: React.FC <Props> = ({
  password,
  onSectionsRendering,
}) => {
  return (
    <div className="password-strength">
      {onSectionsRendering(password)}
    </div>
  )
}