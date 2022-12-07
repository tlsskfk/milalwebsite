
const Select = ({ className, label, options, value, onChange }) => {
    
    return (
        <label className={className}>
        {label}
        <select value={value} onChange={onChange}>
            {options.map((option) => (
            <option value={option.value}>{option.label}</option>
            ))}
            <option value='All'>All Regions</option>
        </select>
        </label>
    );
};

export default Select