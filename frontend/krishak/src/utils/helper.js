import moment from "moment";

export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export const getInitials = (name) => {
    if (!name) return "";

    const words = name.split(" ");
    let initials = "";

    for ( let i = 0 ; i<Math.min(words.length, 2);i++){
        initials += words[i][0];
    }

    return initials.toUpperCase();
};

export const addThousandSeparator = (num) => {
    if(num == null || isNaN(num)) return "";

    const [integerPart, fractionalPart] = num.toString().split(".");
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return fractionalPart 
     ? `${formattedIntegerPart}.${fractionalPart}`
     : formattedIntegerPart;
};

export const prepareExpenseBarChartData = (data =[])=> {
    const chartData= data.map((item)=> ({
        category: item?.category,
        amount:item?.amount,
    }));

    return chartData;
}

export const prepareIncomeBarChart =(data = []) => {
    const sortedData = [...data].sort((a,b) => new Date(a.date) - new Date(b.date));

    const chartData = sortedData.map((item) => ({
        month: moment(item?.date).format('Do MMM'),
        amount : item?.amount,
        source: item?.source,
    }))

    return chartData;
}

export const prepareExpenseLineChartdata = (data =[]) => {
    const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));

    const chartData = sortedData.map((item) =>( {
        month: moment(item?.date).format('Do MMMM'),
        amount: item?.amount,
        category: item?.category
    }))
     return chartData;
}

export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(amount);
};