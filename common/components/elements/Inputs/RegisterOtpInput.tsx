import { RegisterOtpInputType } from '../../../types/components/inputs/RegisterOtpInput.type';

const RegisterOtpInput: React.FC<RegisterOtpInputType> = (props) => {
  return (
    <div className='relative flex flex-col max-w-full'>
      <input
        id={props.id}
        type='text'
        name={props.name}
        dir={props.dir}
        required={props.required}
        onChange={(e) => {
          if (
            !/^[0-9]*$/.test(e.currentTarget.value) &&
            !/([۰-۹])/g.test(e.currentTarget.value)
          ) {
            e.currentTarget.value = e.currentTarget.value.slice(
              0,
              e.currentTarget.value.length - 1
            );
            return;
          }
          if (e.currentTarget.value.length > 6) {
            e.currentTarget.value = e.currentTarget.value.slice(0, 6);
            return;
          }
          if (e.currentTarget.value.length === 6) {
            e.currentTarget.blur();
          }
          props.controller.field.onChange(e.currentTarget.value);
        }}
        onBlur={(e) => {
          props.controller.field.onBlur();
        }}
        onFocus={() => {}}
        className={`max-w-full h-[30px] py-5 pr-4 pl-[50px] mt-5 border border-transparent outline-none w-[300px]  text-sm text-gray-800 tracking-[30px] bg-transparent ${
          props.errors[props.name] && props.isTouched
            ? 'border-b-red-500 caret-red-500'
            : 'border-b-cyan-500 caret-cyan-500'
        }`}
      />
      <label
        htmlFor={props.id}
        className={`absolute w-full text-center tracking-[32px] top-7 left-4 text-cyan-600 cursor-text select-none -z-10 ${
          props.errors[props.name] && props.isTouched
            ? 'text-red-600'
            : 'text-cyan-600'
        }`}
      >
        -----
      </label>
      {props.errors[props.name] && props.isTouched && (
        <span className='mt-2 text-red-500 text-2xs'>
          {props.errors[props.name]?.message}
        </span>
      )}
    </div>
  );
};

export default RegisterOtpInput;
