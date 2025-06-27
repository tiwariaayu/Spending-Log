import React from 'react';
import {
    LuUtensils,
    LuTrendingUp,
    LuTrash2,
    LuTrendingDown,
} from "react-icons/lu";

const TransactionInfoCard = ({
    title,
    icon,
    date,
    amount,
    type,
    hideDeleteBtn,
    onDelete,
}) => {
    const getAmountStyles =() => 
        type=== "income" ? "bg-green-100 text-green-500" : "bg-red-50 text-red-500";
    
    return (
        <div className="group relative flex items-center gap-4 mt-3 p-4 rounded-lg hover:bg-gray-100/60 transition-colors duration-200">
            <div className="w-14 h-14 flex items-center justify-center text-2xl text-gray-800 bg-gray-100 rounded-full">
                {icon ? (
                    <img src={icon} alt={title} className="w-8 h-8" />
                ) : (
                    <LuUtensils />
                )}
            </div>

            <div className="flex-1 flex items-center justify-between">
                <div>
                    <p className="text-base text-gray-700 font-medium">{title}</p>
                    <p className="text-sm text-gray-500 mt-1">{date}</p>
                </div>
                <div className="flex items-center gap-3">
                    {!hideDeleteBtn && (
                        <button className="text-gray-400 hover:text-red-500 opacity-0  group-hover:opacity-100 transition-opacity cursor-pointer"
                            onClick={onDelete}>
                            <LuTrash2 size={20} />
                        </button>
                    )}

                    <div
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${getAmountStyles()}`}>
                        <h6 className="text-sm font-medium">
                            {type == "income" ? "+" : "-"} ₹{amount}
                        </h6>
                        {type === "income" ? <LuTrendingUp /> : <LuTrendingDown/>}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransactionInfoCard