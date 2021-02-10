import React, { useState } from 'react';
import classNames from 'classnames';
import Input from 'antd/lib/input';
import './input-button.scss';

type TProps = {
  [prop: string]: any,
  className?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
};

export default function InputButton({ className, ...props }: TProps) {

  const [inputType, setInputType] = useState('button');

  return <Input
    type={inputType}
    {...props}
    className={classNames('input-button', className)}
    onFocus={() => setInputType('text')}
    onBlur={() => setInputType('button')}
  />
};