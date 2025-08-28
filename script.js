function getById(id){
    return document.getElementById(id);
}

let hotlineP = getById("hotline");
let hotlineList = [
    {
        icon: "emergency",
        bgColor: "bg-[#ffe3e2]",
        title: "National Emergency Service",
        subtitle: "National Emergency",
        number: "999",
        category: "All",
    },
    {
        icon: "police",
        bgColor: "bg-[#dfefff]",
        title: "Police Helpline Service",
        subtitle: "Police",
        number: "999",
        category: "Police",
    },
    {
        icon: "fire-service",
        bgColor: "bg-[#ffe3e2]",
        title: "Fire Service Number",
        subtitle: "Fire Service",
        number: "999",
        category: "Fire",
    },
    {
        icon: "ambulance",
        bgColor: "bg-[#ffe3e2]",
        title: "Ambulance Service",
        subtitle: "Ambulance",
        number: "1994-999999",
        category: "Health",
    },
    {
        icon: "emergency",
        bgColor: "bg-[#ffe3e2]",
        title: "Women & Child Helpline",
        subtitle: "Women & Child Helpline",
        number: "109",
        category: "Help",
    },
    {
        icon: "emergency",
        bgColor: "bg-[#ffe3e2]",
        title: "Anti-Corruption Helpline",
        subtitle: "Anti-Corruption",
        number: "106",
        category: "Govt.",
    },
    {
        icon: "emergency",
        bgColor: "bg-[#ffe3e2]",
        title: "Electricity Helpline",
        subtitle: "Electricity Outage",
        number: "16216",
        category: "Electricity",
    },
    {
        icon: "brac",
        bgColor: "bg-pink-100",
        title: "Brac Helpline",
        subtitle: "Brac",
        number: "16445",
        category: "NGO",
    },
    {
        icon: "Bangladesh-Railway",
        bgColor: "bg-amber-100",
        title: "Bangladesh Railway Helpline ",
        subtitle: "Bangladesh Railway",
        number: "163",
        category: "Travel",
    },
];

