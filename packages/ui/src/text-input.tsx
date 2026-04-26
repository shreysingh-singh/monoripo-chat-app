
interface InputProps {
    placeholder: string,
    size: "Big" | "Small",
    
}

export const TextInput = ({placeholder , size } : InputProps) => {
    return (
      <input 
        placeholder={placeholder}
        style={{
          padding: size === "Big" ? 20 : 10,
          margin: size === "Big" ? 20 : 10,
          borderColor: "black",
          borderRadius: 2,
          background: "white",
          color: "black",
        }}
      />
    );
}