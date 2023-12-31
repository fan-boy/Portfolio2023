import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
	'flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80',
	{
		variants: {
			intent: {
                navbar:'',
				primary: 'bg-gray-300 text-white',
				secondary:
					'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 focus:ring-gray-500',
				danger: 'bg-red-500 text-white focus:ring-red-500',
			},
			fullWidth: {
				true: 'w-full',
			},
		},
		defaultVariants: {
			intent: 'primary',
		},
	},
);

interface TextFieldProps{
    value:string,
    onChange: (val: string) => void;
	placeholder:string,
	type:string

}

const TextField = (props:TextFieldProps) =>{
    return(
        <input 
        className="bg-gray-200 p-5 font-sans rounded-full text-gray-900 focus:ring-gray-500"
        value={props.value}
        onChange={({ target: { value } }) => props.onChange(value)}
		placeholder={props.placeholder}
		type={props.type}
        />
    )
}

export default TextField;