type GeneralPropsKeyType = 'id' | 'personalInfo';

// type GeneralProps = {
//   [key: GeneralPropsKeyType]: string | number | boolean | Function | undefined;
// }

type GeneralPropsRecord = Record<GeneralPropsKeyType, string | number | boolean | Function | undefined>

type ButtonProps = {
  label: string;
  onClick: () => void;
  style?: object;
  type: 'button' | 'submit' | 'reset';
}

type SubmitButtonProps = ButtonProps & {
  type: 'submit';
}

type ResetButtonProps = Omit<ButtonProps, 'type'>;

type CommonButtonProps = Pick<ButtonProps, 'label' | 'onClick' | 'style'>;

const props: ResetButtonProps = {
  label: 'Submit',
  onClick: () => {},
}

// ---------

const buttonTypes = {
  primary: { color: 'blue' },
  error: { color: 'red' },
  warn: { color: 'yellow' },
  cancel: { color: 'pink' }
}

type ButtonType = keyof typeof buttonTypes;

type ButtonPropsWithType = ButtonProps & {
  type: ButtonType;
}

// ---------

type RequiredCustomizationButtonProps = Required<ButtonProps>;

type DefaultButtonProps = Partial<ButtonProps>;

type ReadonlyButtonProps = Readonly<ButtonProps>;

const readonlyProps: ReadonlyButtonProps = {
  label: 'Submit',
  onClick: () => {},
  style: {},
  type: 'button',
}
// readonlyProps.label = 'New label';