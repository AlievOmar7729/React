import "./input.css";
import { Field, ErrorMessage as Error } from "formik";

export const Input = ({ id, label, name, placeholder, type = "text", options = [] }) => {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            {type === "select" ? (
                <Field as="select" name={name} id={id}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </Field>
            ) : type === "checkbox" ? (
                <Field type="checkbox" name={name} id={id} />
            ) : (
                <Field type={type} name={name} id={id} placeholder={placeholder} />
            )}
            <Error name={name}>{(error) => <span>{error}</span>}</Error>
        </div>
    );
};
