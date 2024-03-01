export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={`block  text-sm text-blue-500 font-bold  ` + className}
        >
            {value ? value : children}
        </label>
    );
}
