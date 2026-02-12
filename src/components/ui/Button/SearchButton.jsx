import {Search} from "lucide-react";
import {useState} from "react";

export const SearchButton = ({isSearch}) => {


    return (
        <div className="flex flex-row gap-2">
            {isSearch && (
                <div onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                }}>
                    <input onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                    }} type="text" placeholder="Rechercher..." className="shadow bg-blue-700 text-white text-xs h-6 placeholder:px-2 placeholder:text-white/70"/>
                </div>
            )}
            <Search size={22}/>
        </div>
    )
}