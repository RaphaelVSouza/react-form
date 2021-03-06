import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const ButtonBack: React.FC<ButtonProps> = ({ label, ...rest }) => (
  <S.Button {...rest}>
    {label}
  </S.Button>
)

export default ButtonBack
