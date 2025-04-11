export const color = [
    "white",
    "Black",
    "Red",
    "Marun",
    "Being",
    "Pink",
    "Green",
    "Yellow",
];

export const filters =[
    {
        id: "color",
        name: "Color",
        Option: [
            {value:"white", label:"White"},
            {value:"being", label:"Being"},
            {value:"blue", label:"Blue"},
            {value:"brown", label:"Brown"},
            {value:"green", label:"Green"},
            {value:"purple", label:"Purple"},
            {value:"yellow", label:"Yellow"},
        ],
    },

    {
        id:"size",
        name:"Size",
        Option: [
            {value:"S", label: "S"},
            {value:"M", label: "M"},
            {value:"L", label: "L"},
        ],
    },
];

export const singleFilter=[
        {
            id:"price",
            name:"price",
            Option : [
                {value:"159-399", label:"₹159 To ₹399"},
                {value:"399-999", label:"₹399 To ₹999"},
                {value:"999-1999", label:"₹999 To ₹1999"},
                {value:"1999-2999", label:"₹1999 To ₹2999"},
                {value:"3999-4999", label:"₹3999 To ₹4999"},
            ],
        },

        {
            id:"discount",
            name:"Discounted Range",
            Option:[
                {
                    value:"10",
                    label:"10% and above",
                },
                {value:"20", label:"20% and above"},
                {value:"30", label:"30% and above"},
                {value:"40", label:"40% and above"},
                {value:"50", label:"50% and above"},
                {value:"60", label:"60% and above"},
                {value:"70", label:"70% and above"},
                {value:"80", label:"80% and above"},
            ],
        },
        {
            id:"Stock",
            name:"Availability",
            Option:[
                {value:"in_stock", label:"In Stock"},
                {value:"out_Of_stock", label:"Out Of Stock"},
            ],
        },
]