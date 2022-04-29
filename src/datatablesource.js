export const userColums = [
    { field: 'id', headerName: 'No', width: 70 },
    { field: 'classname', headerName: 'Class Name', width: 110 },
    { field: 'date', headerName: 'Date', width: 120 },
    { field: 'days', headerName: 'Days', width: 245 },
    { field: 'time', headerName: 'Time', width: 140 },
    { field: 'trainer', headerName: 'Trainer', width: 120 },
    { field: 'proxy', headerName: 'Proxy Trainer', width: 180 },
    { field: 'participants', headerName: 'Participants', width: 120 },
    { 
        field: 'status', 
        headerName: 'Status', 
        width: 130,
        renderCell:(params)=>{
            return(
                <div className={`cellWidthStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },
]

export const userRows = [
    {
        id: 1,
        classname: "Group-Ex",
        date: "Daily",
        days: "Mon, Tue, Wed, Thur, Fri, Sat",
        time: "4:00 to 5:00",
        trainer: "Adan brown",
        proxy: " ",
        participants: "1/25",
        status: "Inactive",
    },
    {
        id: 2,
        classname: "Swimming",
        date: "Daily",
        days: "Mon, Tue, Wed, Thur, Fri, Sat",
        time: "8:00 to 9:00",
        trainer: "Adan brown",
        proxy: "Hitesh J Patel",
        participants: "0/20",
        status: "Active",
    },
    {
        id: 3,
        classname: "HIIT",
        date: "Daily",
        days: "Fri, Sat",
        time: "12:00 to 00:00",
        trainer: "Harsh Patel",
        proxy: " ",
        participants: "0/5",
        status: "Pending",
    },
    {
        id: 4,
        classname: "Boxing",
        date: "Daily",
        days: "Mon, Tue, Wed, Thur, Fri",
        time: "4:00 to 6:00",
        trainer: "Dustin Porior",
        proxy: " ",
        participants: "1/25",
        status: "Active",
    },
    {
        id: 5,
        classname: "Kickboxing",
        date: "Daily",
        days: "Mon, Tue, Wed, Thur, Fri, Sat",
        time: "6:00 to 9:00",
        trainer: "Adan brown",
        proxy: " ",
        participants: "1/25",
        status: "Pending",
    },
    {
        id: 6,
        classname: "Group-Ex",
        date: "Daily",
        days: "Mon, Tue, Wed, Thur, Fri, Sat",
        time: "4:00 to 5:00",
        trainer: "Adan brown",
        proxy: " ",
        participants: "1/25",
        status: "Active",
    },
]