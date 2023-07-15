import React from "react"

type Props = {
  password: string,
  onPasswordChanging: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const PasswordInput: React.FC<Props> = ({
  password,
  onPasswordChanging,
}) => {
  return (
    <input
      className="password-input"
      type="text"
      value={password}
      onChange={onPasswordChanging}
      placeholder="Enter your password"
    />
  )
}