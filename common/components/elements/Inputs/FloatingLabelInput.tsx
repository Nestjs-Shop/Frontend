import React from 'react';
import { FloatingLabelInputType } from '../../../types/components/inputs/FloatingLabelInput.type';

const FloatingLabelInput: React.FC<FloatingLabelInputType> = (props) => {
  const [focused, setFocused] = React.useState<boolean>(false);

  return (
    <div className='relative flex flex-col max-w-full'>
      <label
        htmlFor={props.id}
        className={`absolute z-10 right-3 cursor-text ${
          focused
            ? '-top-5 text-2xs text-gray-800 right-1'
            : 'top-0 text-sm text-gray-500'
        } transition-all duration-300`}
      >
        {props.label}
        {props.required && (
          <span
            className={`mx-1 text-red-500 transition ${
              focused ? 'opacity-0' : 'opacity-100'
            }`}
          >
            *
          </span>
        )}
      </label>
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        dir={props.dir}
        required={props.required}
        onChange={(e) => {
          props.controller.field.onChange(e.currentTarget.value);
        }}
        onBlur={(e) => {
          props.controller.field.onBlur();
          e.currentTarget.value.trim() === ''
            ? setFocused(false)
            : setFocused(true);
        }}
        onFocus={() => {
          setFocused(true);
        }}
        className={`max-w-full h-[30px] py-2 px-4 border ${
          focused
            ? props.errors[props.name] && props.isTouched
              ? 'border-b-red-500 caret-red-500'
              : 'border-b-cyan-500 caret-cyan-500'
            : 'border-b-gray-200'
        }  border-transparent outline-none w-[300px]  text-sm text-gray-800`}
      />
      {props.errors[props.name] && props.isTouched && (
        <span className='mt-2 text-red-500 text-2xs'>
          {props.errors[props.name]?.message}
        </span>
      )}
    </div>
  );
};

export default FloatingLabelInput;
