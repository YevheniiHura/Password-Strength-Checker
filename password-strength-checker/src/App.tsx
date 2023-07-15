import React, { useState } from 'react';
import { SectionColor } from './types/SectionColor';
import { PasswordInput } from './components/PasswordInput';
import { PasswordStrengthChecker } from './components/PasswordStrengthChecker';
import { ValidationMessage } from './components/ValidationMessage';

export const App: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [validationMessage, setValidationMessage] = useState<string>('');

  const getSectionColors = (password: string): SectionColor[] => {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSymbol = /[^a-zA-Z0-9]/.test(password);


    if (password.length === 0) {
      return [SectionColor.Gray, SectionColor.Gray, SectionColor.Gray];
    } else if (password.length < 8) {
      return [SectionColor.Red, SectionColor.Red, SectionColor.Red];
    } else if (hasLetter && hasDigit && hasSymbol) {
      return [SectionColor.Green, SectionColor.Green, SectionColor.Green];
    } else if (
      (hasLetter && hasDigit && !hasSymbol) ||
      (hasLetter && !hasDigit && hasSymbol) ||
      (!hasLetter && hasDigit && hasSymbol)
    ) {
      return [SectionColor.Yellow, SectionColor.Yellow, SectionColor.Gray];
    } else {
      return [SectionColor.Red, SectionColor.Gray, SectionColor.Gray]
    }
  };

  const renderPasswordStrength = (password: string): JSX.Element[] => {
    const colors = getSectionColors(password);

    return colors.map((color, index) => (
      <div key={index} className={`password-strength-section ${color}`} />
    ));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setValidationMessage(getValidationMessage(newPassword));
  };

  const getValidationMessage = (password: string): string => {
    if (password.length === 0) {
      return '';
    } else if (password.length < 8) {
      return 'Password should be at least 8 characters long.';
    } else if (!/[a-zA-Z]/.test(password)) {
      return 'Password should contain at least one letter.';
    } else if (!/[0-9]/.test(password)) {
      return 'Password should contain at least one digit.';
    } else if (!/[^a-zA-Z0-9]/.test(password)) {
      return 'Password should contain at least one symbol.';
    } else {
      return 'Strong password';
    }
  };

  return (
    <section className="password-section">
      <div className='password-section__container'>
        <PasswordInput
          password= {password}
          onPasswordChanging= {handlePasswordChange} 
        />

        <PasswordStrengthChecker
          password= {password}
          onSectionsRendering= {renderPasswordStrength}
        />

        {password &&
          <ValidationMessage
            validationMessage= {validationMessage}
          />
        }
      </div>
    </section>
  );
};
