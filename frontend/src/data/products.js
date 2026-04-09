export const CATEGORIES = [
  {
    id: "guest-room",
    title: "Guest Room Essentials",
    icon: "Bed",
    tagline: "Where comfort meets elegance",
    image: "https://images.unsplash.com/photo-1774175927628-40e82ee8fe13?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBpbnRlcmlvciUyMGRhcmt8ZW58MHx8fHwxNzc1NzI4ODY0fDA&ixlib=rb-4.1.0&q=85",
    subcategories: [
      {
        name: "Beds & Bedding",
        items: ["Beds (King / Queen / Twin)", "Mattresses", "Mattress Protectors", "Bedsheets (min 3 sets per bed)", "Pillow & Pillow Covers", "Duvet / Blanket & Covers"]
      },
      {
        name: "Furniture",
        items: ["Bedside Tables", "Wardrobe with Hangers", "Study Table & Chair", "Luggage Rack"]
      },
      {
        name: "Room Decor",
        items: ["Curtains + Blackout Curtains", "Dustbin"]
      },
      {
        name: "Appliances & Utilities",
        items: ["TV", "AC / Fan", "Electric Kettle", "Hair Dryer", "Mini Fridge", "Telephone / Intercom"]
      },
      {
        name: "Guest Amenities",
        items: ["Toiletries (Soap, Shampoo, Body Wash)", "Dental Kit, Shaving Kit", "Slippers", "Tea / Coffee Sachets", "Water Bottles", "Laundry Bags"]
      }
    ]
  },
  {
    id: "housekeeping",
    title: "Housekeeping & Cleaning",
    icon: "SprayCan",
    tagline: "Pristine spaces, every time",
    image: "https://images.pexels.com/photos/9462745/pexels-photo-9462745.jpeg",
    subcategories: [
      {
        name: "Cleaning Equipment",
        items: ["Housekeeping Trolley", "Vacuum Cleaner", "Mops, Buckets, Wipers", "Floor Scrubber", "Microfiber Cloths", "Gloves"]
      },
      {
        name: "Cleaning Chemicals",
        items: ["Floor Cleaner", "Toilet Cleaner", "Glass Cleaner", "Disinfectant", "Air Freshener", "Laundry Detergent"]
      },
      {
        name: "Laundry Setup",
        items: ["Washing Machine (Commercial / Domestic)", "Dryer", "Iron & Ironing Board", "Linen Storage Racks"]
      }
    ]
  },
  {
    id: "kitchen",
    title: "Kitchen & F&B",
    icon: "ChefHat",
    tagline: "From kitchen to table, perfected",
    image: "https://images.unsplash.com/photo-1755300880638-76b7a3027e1a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHw0fHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMHN0YWZmfGVufDB8fHx8MTc3NTcyODg3M3ww&ixlib=rb-4.1.0&q=85",
    subcategories: [
      {
        name: "Equipment",
        items: ["Gas Stove / Induction", "Refrigerator", "Deep Freezer", "Microwave / Oven", "Exhaust System / Chimney"]
      },
      {
        name: "Cooking Items",
        items: ["Stainless Steel Vessels", "Frying Pans", "Knives & Chopping Boards", "Ladles & Spatulas", "Storage Containers"]
      },
      {
        name: "Service Items",
        items: ["Plates (Full / Half)", "Bowls", "Glasses", "Cups & Saucers", "Cutlery (Spoons, Forks, Knives)", "Serving Trays", "Buffet Chafing Dishes"]
      }
    ]
  },
  {
    id: "front-office",
    title: "Front Office & Operations",
    icon: "BellRing",
    tagline: "First impressions, lasting impact",
    image: "https://images.unsplash.com/photo-1759038085950-1234ca8f5fed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxob3RlbCUyMGxvYmJ5JTIwZGVza3xlbnwwfHx8fDE3NzU3Mjg4ODB8MA&ixlib=rb-4.1.0&q=85",
    subcategories: [
      {
        name: "Office Setup",
        items: ["Reception Desk", "Computer / Laptop", "Printer & Scanner", "Billing Software / POS", "Property Management System (PMS)", "Telephone System"]
      },
      {
        name: "Guest Handling",
        items: ["Key Cards / Keys", "Check-in Forms", "Guest Registers"]
      }
    ]
  },
  {
    id: "safety",
    title: "Safety & Compliance",
    icon: "ShieldCheck",
    tagline: "Protection meets peace of mind",
    image: "https://images.pexels.com/photos/11285437/pexels-photo-11285437.png",
    subcategories: [
      {
        name: "Safety Equipment",
        items: ["Fire Extinguishers", "Smoke Detectors", "CCTV Cameras", "Emergency Exit Signs", "First Aid Kit", "Generator / Inverter Backup"]
      }
    ]
  },
  {
    id: "outdoor",
    title: "Outdoor & Maintenance",
    icon: "TreePine",
    tagline: "Curating beautiful exteriors",
    image: "https://images.unsplash.com/photo-1678913308053-316cee77afe9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBob3RlbCUyMHBvb2x8ZW58MHx8fHwxNzc1NzI4ODgwfDA&ixlib=rb-4.1.0&q=85",
    subcategories: [
      {
        name: "Outdoor Essentials",
        items: ["Outdoor Furniture", "Garden Tools", "Pool Cleaning Equipment", "Outdoor Lighting", "Signage Boards"]
      }
    ]
  },
  {
    id: "consumables",
    title: "Consumables & Vendors",
    icon: "Package",
    tagline: "Reliable supply, always",
    image: "https://images.unsplash.com/photo-1750271336429-8b0a507785c0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGFtZW5pdGllcyUyMHNvYXB8ZW58MHx8fHwxNzc1NzI4ODgwfDA&ixlib=rb-4.1.0&q=85",
    subcategories: [
      {
        name: "Supply Chain",
        items: ["Water Supply", "Toiletry Supplier", "Linen Supplier", "Cleaning Chemical Supplier", "Food & Grocery Vendors", "Laundry Vendor"]
      }
    ]
  }
];

export const STATS = [
  { value: "500+", label: "Hotels Served" },
  { value: "10K+", label: "Products Delivered" },
  { value: "50+", label: "Cities Covered" },
  { value: "98%", label: "Client Satisfaction" }
];

export const WHY_CHOOSE_US = [
  {
    title: "Wholesale Pricing",
    description: "Direct manufacturer partnerships ensure you receive the most competitive pricing on every product category.",
    icon: "BadgePercent"
  },
  {
    title: "Premium Quality",
    description: "Every item is vetted for durability and guest satisfaction, meeting international hospitality standards.",
    icon: "Award"
  },
  {
    title: "One-Stop Solution",
    description: "From bedsheets to CCTV cameras, furnish your entire property through a single, trusted supplier.",
    icon: "Store"
  },
  {
    title: "Pan-India Delivery",
    description: "Timely logistics across India with dedicated account managers for your property.",
    icon: "Truck"
  }
];
