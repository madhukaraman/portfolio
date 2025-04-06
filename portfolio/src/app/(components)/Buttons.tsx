
export interface ButtonProps {
    text: string;
}

const Buttons = ({text}:ButtonProps) => {
    return (
        <div className="p-4 bg-white rounded">
            {text}
        </div>
    )
}

export default Buttons;