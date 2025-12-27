export interface StorageFacility {
    id: string;
    name: string;
    type: "Warehouse" | "Cold Storage" | "Godown";
    capacity: string;
    location: string;
    district: string;
    contact: string;
    status: "Available" | "Full" | "Maintenance";
    image: string;
}

export const STORAGE_FACILITIES: StorageFacility[] = [
    {
        id: "S001",
        name: "Tamil Nadu Civil Supplies Corporation",
        type: "Warehouse",
        capacity: "5000 MT",
        location: "Cuttack Industrial Estate",
        district: "Cuttack",
        contact: "+91-671-2345678",
        status: "Available",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S002",
        name: "Bhubaneswar Cold Chain",
        type: "Cold Storage",
        capacity: "2000 MT",
        location: "Mancheswar",
        district: "Khordha",
        contact: "+91-674-2580123",
        status: "Available",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: "S003",
        name: "Rural Godown Angul",
        type: "Godown",
        capacity: "500 MT",
        location: "Near Railway Station",
        district: "Angul",
        contact: "+91-9437012345",
        status: "Available",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S004",
        name: "Ganjam Agro Storage",
        type: "Warehouse",
        capacity: "3500 MT",
        location: "Berhampur Highway",
        district: "Ganjam",
        contact: "+91-680-2223344",
        status: "Available",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S005",
        name: "Sambalpur Cold Storage",
        type: "Cold Storage",
        capacity: "1500 MT",
        location: "Ainthapali",
        district: "Sambalpur",
        contact: "+91-663-2405678",
        status: "Full",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: "S006",
        name: "Balasore Port Warehouse",
        type: "Warehouse",
        capacity: "8000 MT",
        location: "Port Area",
        district: "Balasore",
        contact: "+91-6782-262111",
        status: "Available",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S007",
        name: "Koraput Tribal Coop Godown",
        type: "Godown",
        capacity: "300 MT",
        location: "Jeypore Road",
        district: "Koraput",
        contact: "+91-9437198765",
        status: "Available",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S008",
        name: "Puri Marine Storage",
        type: "Cold Storage",
        capacity: "1200 MT",
        location: "Sea Beach Road",
        district: "Puri",
        contact: "+91-6752-223344",
        status: "Maintenance",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: "S009",
        name: "Rourkela Steel City Depot",
        type: "Warehouse",
        capacity: "6000 MT",
        location: "Civil Township",
        district: "Sundargarh",
        contact: "+91-661-2501234",
        status: "Available",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S010",
        name: "Bargarh Grain Silos",
        type: "Warehouse",
        capacity: "10000 MT",
        location: "Attabira",
        district: "Bargarh",
        contact: "+91-6646-234567",
        status: "Available",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S011",
        name: "Bhadrak Agro Godown",
        type: "Godown",
        capacity: "600 MT",
        location: "Charampa",
        district: "Bhadrak",
        contact: "+91-6784-240111",
        status: "Available",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S012",
        name: "Bolangir Cotton Storage",
        type: "Warehouse",
        capacity: "4500 MT",
        location: "Titlagarh Road",
        district: "Bolangir",
        contact: "+91-6652-232123",
        status: "Available",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S013",
        name: "Keonjhar Mineral Logistics",
        type: "Warehouse",
        capacity: "5500 MT",
        location: "Mining Road",
        district: "Keonjhar",
        contact: "+91-6766-255444",
        status: "Full",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S014",
        name: "Mayurbhanj Forest Produce",
        type: "Godown",
        capacity: "400 MT",
        location: "Baripada",
        district: "Mayurbhanj",
        contact: "+91-6792-252678",
        status: "Available",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S015",
        name: "Kandhamal Spices Depot",
        type: "Cold Storage",
        capacity: "1000 MT",
        location: "Phulbani",
        district: "Kandhamal",
        contact: "+91-6842-253456",
        status: "Available",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: "S016",
        name: "Dhenkanal Central Warehouse",
        type: "Warehouse",
        capacity: "4000 MT",
        location: "Industrial Estate",
        district: "Dhenkanal",
        contact: "+91-6762-224567",
        status: "Available",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S017",
        name: "Jagatsinghpur Paradeep Storage",
        type: "Warehouse",
        capacity: "9000 MT",
        location: "Paradeep Port",
        district: "Jagatsinghpur",
        contact: "+91-6722-222111",
        status: "Available",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S018",
        name: "Jajpur Road Godown",
        type: "Godown",
        capacity: "700 MT",
        location: "Byasanagar",
        district: "Jajpur",
        contact: "+91-6726-220123",
        status: "Available",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S019",
        name: "Jharsuguda Logistic Park",
        type: "Warehouse",
        capacity: "5200 MT",
        location: "Airport Road",
        district: "Jharsuguda",
        contact: "+91-6645-272222",
        status: "Available",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S020",
        name: "Kalahandi Cotton Godown",
        type: "Godown",
        capacity: "800 MT",
        location: "Bhawanipatna",
        district: "Kalahandi",
        contact: "+91-6670-230456",
        status: "Available",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S021",
        name: "Kendrapara Cyclone Shelter Storage",
        type: "Warehouse",
        capacity: "2500 MT",
        location: "Coastal Belt",
        district: "Kendrapara",
        contact: "+91-6727-232323",
        status: "Available",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S022",
        name: "Malkangiri Tribal Depot",
        type: "Godown",
        capacity: "350 MT",
        location: "District HQ",
        district: "Malkangiri",
        contact: "+91-6861-230123",
        status: "Available",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S023",
        name: "Nabarangpur Maize Storage",
        type: "Warehouse",
        capacity: "4200 MT",
        location: "Umerkote",
        district: "Nabarangpur",
        contact: "+91-6858-222345",
        status: "Available",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S024",
        name: "Nayagarh Sugar Warehouse",
        type: "Warehouse",
        capacity: "3800 MT",
        location: "Sugar Mill Area",
        district: "Nayagarh",
        contact: "+91-6753-252111",
        status: "Available",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S025",
        name: "Nuapada Rice Depot",
        type: "Godown",
        capacity: "650 MT",
        location: "Khariar Road",
        district: "Nuapada",
        contact: "+91-6678-223456",
        status: "Available",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S026",
        name: "Rayagada Industrial Store",
        type: "Warehouse",
        capacity: "4800 MT",
        location: "JK Pur",
        district: "Rayagada",
        contact: "+91-6856-222123",
        status: "Available",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    }
    ,
    // Additional facilities to ensure at least 15 per type
    {
        id: "S027",
        name: "Khordha Mega Cold Hub",
        type: "Cold Storage",
        capacity: "2200 MT",
        location: "Patia",
        district: "Khordha",
        contact: "+91-674-2250011",
        status: "Available",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: "S028",
        name: "Cuttack Fresh Chain",
        type: "Cold Storage",
        capacity: "1800 MT",
        location: "Jagatpur",
        district: "Cuttack",
        contact: "+91-671-2324001",
        status: "Available",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: "S029",
        name: "Balasore Chilled Logistics",
        type: "Cold Storage",
        capacity: "1600 MT",
        location: "Soro",
        district: "Balasore",
        contact: "+91-6782-261777",
        status: "Available",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: "S030",
        name: "Berhampur Cold Link",
        type: "Cold Storage",
        capacity: "1400 MT",
        location: "Gopalpur",
        district: "Ganjam",
        contact: "+91-680-2256789",
        status: "Available",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: "S031",
        name: "Sundargarh Frost Park",
        type: "Cold Storage",
        capacity: "2000 MT",
        location: "Rourkela Sector 6",
        district: "Sundargarh",
        contact: "+91-661-2511234",
        status: "Available",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: "S032",
        name: "Puri Marine Chill",
        type: "Cold Storage",
        capacity: "1300 MT",
        location: "Chandrabhaga Road",
        district: "Puri",
        contact: "+91-6752-221234",
        status: "Available",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: "S033",
        name: "Rayagada Chill Depot",
        type: "Cold Storage",
        capacity: "1100 MT",
        location: "Gunupur",
        district: "Rayagada",
        contact: "+91-6856-221001",
        status: "Maintenance",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: "S034",
        name: "Bargarh Fresh Vault",
        type: "Cold Storage",
        capacity: "1700 MT",
        location: "Barpali",
        district: "Bargarh",
        contact: "+91-6646-238888",
        status: "Available",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: "S035",
        name: "Kalahandi Chill Center",
        type: "Cold Storage",
        capacity: "1500 MT",
        location: "Kesinga",
        district: "Kalahandi",
        contact: "+91-6670-238765",
        status: "Available",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: "S036",
        name: "Jajpur Cold Corridor",
        type: "Cold Storage",
        capacity: "1900 MT",
        location: "Kalinga Nagar",
        district: "Jajpur",
        contact: "+91-6726-221111",
        status: "Available",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: "S037",
        name: "Mayurbhanj Chill Block",
        type: "Cold Storage",
        capacity: "1250 MT",
        location: "Rairangpur",
        district: "Mayurbhanj",
        contact: "+91-6792-250321",
        status: "Available",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: "S038",
        name: "Kendrapara Fresh Hub",
        type: "Cold Storage",
        capacity: "1550 MT",
        location: "Marsaghai",
        district: "Kendrapara",
        contact: "+91-6727-231212",
        status: "Available",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop"
    },
    // Extra Warehouse to reach 15
    {
        id: "S039",
        name: "Boudh Central Warehouse",
        type: "Warehouse",
        capacity: "3600 MT",
        location: "Boudh Town",
        district: "Boudh",
        contact: "+91-6843-220222",
        status: "Available",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    // Godown additions to reach 15
    {
        id: "S040",
        name: "Deogarh Rural Godown",
        type: "Godown",
        capacity: "500 MT",
        location: "Reamal",
        district: "Deogarh",
        contact: "+91-7654-230111",
        status: "Available",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S041",
        name: "Gajapati Community Godown",
        type: "Godown",
        capacity: "450 MT",
        location: "Paralakhemundi",
        district: "Gajapati",
        contact: "+91-7685-251234",
        status: "Available",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S042",
        name: "Nayagarh Farmer Godown",
        type: "Godown",
        capacity: "520 MT",
        location: "Odagaon",
        district: "Nayagarh",
        contact: "+91-6753-230987",
        status: "Available",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S043",
        name: "Nuapada Cooperative Godown",
        type: "Godown",
        capacity: "600 MT",
        location: "Komna",
        district: "Nuapada",
        contact: "+91-6678-220765",
        status: "Available",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S044",
        name: "Subarnapur Agro Godown",
        type: "Godown",
        capacity: "480 MT",
        location: "Sonpur",
        district: "Subarnapur",
        contact: "+91-6654-240222",
        status: "Available",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S045",
        name: "Kandhamal Block Godown",
        type: "Godown",
        capacity: "520 MT",
        location: "Baliguda",
        district: "Kandhamal",
        contact: "+91-6842-251111",
        status: "Available",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S046",
        name: "Koraput Producer Godown",
        type: "Godown",
        capacity: "550 MT",
        location: "Kotpad",
        district: "Koraput",
        contact: "+91-94371-230222",
        status: "Available",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S047",
        name: "Malkangiri Rural Godown",
        type: "Godown",
        capacity: "500 MT",
        location: "Chitrakonda",
        district: "Malkangiri",
        contact: "+91-6861-230555",
        status: "Available",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S048",
        name: "Mayurbhanj Farmer Godown",
        type: "Godown",
        capacity: "530 MT",
        location: "Karanjia",
        district: "Mayurbhanj",
        contact: "+91-6792-252345",
        status: "Available",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S049",
        name: "Puri Coastal Godown",
        type: "Godown",
        capacity: "600 MT",
        location: "Satyabadi",
        district: "Puri",
        contact: "+91-6752-225555",
        status: "Available",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S050",
        name: "Bhadrak Community Godown",
        type: "Godown",
        capacity: "620 MT",
        location: "Basudevpur",
        district: "Bhadrak",
        contact: "+91-6784-241234",
        status: "Available",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S051",
        name: "Bolangir Rural Godown",
        type: "Godown",
        capacity: "540 MT",
        location: "Saintala",
        district: "Bolangir",
        contact: "+91-6652-233333",
        status: "Available",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "S052",
        name: "Sambalpur Block Godown",
        type: "Godown",
        capacity: "560 MT",
        location: "Burla",
        district: "Sambalpur",
        contact: "+91-663-241111",
        status: "Available",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
    }
];
