import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export const GoodInput = ({
                              label,
                              name,
                              type = "text",
                              placeholder,
                              value,
                              onChange,
                              icon: Icon,
                              error
                          }) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const inputType = type === "password" && isPasswordVisible ? "text" : type;

    return (
        <div className="space-y-2">
            <label htmlFor={name} className="text-sm font-semibold text-gray-700 block">
                {label}
            </label>

            <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                    <Icon size={20} />
                </div>

                <input
                    id={name}
                    name={name}
                    type={inputType}
                    required
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={`w-full pl-10 pr-12 py-3 border rounded-xl outline-none transition-all duration-200 bg-gray-50 focus:bg-white
                        ${error
                        ? "border-red-500 focus:ring-2 focus:ring-red-200"
                        : "border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    }
                    `}
                />

                {type === "password" && (
                    <button
                        type="button"
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer transition-colors"
                    >
                        {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                )}
            </div>
        </div>
    );
};