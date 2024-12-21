import "./button.css";

export const Button = ({children}) => {
    return <button type="submit" className="button">
        {children}
    </button>
}