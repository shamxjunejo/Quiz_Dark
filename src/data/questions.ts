export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
}

export const questionsByCategory: Record<string, Question[]> = {
  'english': [
    {
      id: 1,
      question: "What is the synonym of 'abundant'?",
      options: ["Scarce", "Plentiful", "Limited", "Rare"],
      correctAnswer: 1,
      category: "English"
    },
    {
      id: 2,
      question: "Which sentence is grammatically correct?",
      options: ["She don't like coffee", "She doesn't likes coffee", "She doesn't like coffee", "She not like coffee"],
      correctAnswer: 2,
      category: "English"
    },
    {
      id: 3,
      question: "What is the past tense of 'bring'?",
      options: ["Brang", "Brought", "Bringed", "Brung"],
      correctAnswer: 1,
      category: "English"
    },
    {
      id: 4,
      question: "Which word is an antonym of 'optimistic'?",
      options: ["Hopeful", "Positive", "Pessimistic", "Cheerful"],
      correctAnswer: 2,
      category: "English"
    },
    {
      id: 5,
      question: "What type of word is 'quickly' in the sentence 'She ran quickly'?",
      options: ["Noun", "Verb", "Adjective", "Adverb"],
      correctAnswer: 3,
      category: "English"
    },
    {
      id: 6,
      question: "Which is the correct plural form of 'child'?",
      options: ["Childs", "Children", "Childes", "Childrens"],
      correctAnswer: 1,
      category: "English"
    },
    {
      id: 7,
      question: "What does the idiom 'break the ice' mean?",
      options: ["To be very cold", "To start a conversation", "To break something", "To be angry"],
      correctAnswer: 1,
      category: "English"
    },
    {
      id: 8,
      question: "Which sentence uses the passive voice?",
      options: ["John wrote the letter", "The letter was written by John", "John is writing", "John will write"],
      correctAnswer: 1,
      category: "English"
    },
    {
      id: 9,
      question: "What is the meaning of 'procrastinate'?",
      options: ["To hurry up", "To delay or postpone", "To complete quickly", "To organize"],
      correctAnswer: 1,
      category: "English"
    },
    {
      id: 10,
      question: "Which word is spelled correctly?",
      options: ["Recieve", "Receive", "Receve", "Receeve"],
      correctAnswer: 1,
      category: "English"
    }
  ],
  'mathematics': [
    {
      id: 11,
      question: "What is 15% of 200?",
      options: ["25", "30", "35", "40"],
      correctAnswer: 1,
      category: "Mathematics"
    },
    {
      id: 12,
      question: "If x + 5 = 12, what is the value of x?",
      options: ["5", "6", "7", "8"],
      correctAnswer: 2,
      category: "Mathematics"
    },
    {
      id: 13,
      question: "What is the area of a rectangle with length 8 and width 6?",
      options: ["14", "28", "48", "56"],
      correctAnswer: 2,
      category: "Mathematics"
    },
    {
      id: 14,
      question: "What is the square root of 144?",
      options: ["11", "12", "13", "14"],
      correctAnswer: 1,
      category: "Mathematics"
    },
    {
      id: 15,
      question: "If a triangle has angles of 60° and 70°, what is the third angle?",
      options: ["40°", "50°", "60°", "70°"],
      correctAnswer: 1,
      category: "Mathematics"
    },
    {
      id: 16,
      question: "What is 2³ + 3²?",
      options: ["13", "17", "19", "23"],
      correctAnswer: 1,
      category: "Mathematics"
    },
    {
      id: 17,
      question: "What is the circumference of a circle with radius 7? (Use π = 22/7)",
      options: ["22", "44", "66", "88"],
      correctAnswer: 1,
      category: "Mathematics"
    },
    {
      id: 18,
      question: "If 3x - 7 = 14, what is x?",
      options: ["5", "6", "7", "8"],
      correctAnswer: 2,
      category: "Mathematics"
    },
    {
      id: 19,
      question: "What is 25% of 80?",
      options: ["15", "20", "25", "30"],
      correctAnswer: 1,
      category: "Mathematics"
    },
    {
      id: 20,
      question: "What is the volume of a cube with side length 4?",
      options: ["16", "32", "48", "64"],
      correctAnswer: 3,
      category: "Mathematics"
    }
  ],
  'general-knowledge': [
    {
      id: 21,
      question: "Who is the current Prime Minister of Pakistan (as of 2024)?",
      options: ["Imran Khan", "Shehbaz Sharif", "Bilawal Bhutto", "Maryam Nawaz"],
      correctAnswer: 1,
      category: "General Knowledge"
    },
    {
      id: 22,
      question: "What is the capital of Pakistan?",
      options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
      correctAnswer: 2,
      category: "General Knowledge"
    },
    {
      id: 23,
      question: "Which river is called the lifeline of Pakistan?",
      options: ["Chenab", "Ravi", "Indus", "Jhelum"],
      correctAnswer: 2,
      category: "General Knowledge"
    },
    {
      id: 24,
      question: "When did Pakistan gain independence?",
      options: ["August 14, 1947", "August 15, 1947", "July 14, 1947", "September 14, 1947"],
      correctAnswer: 0,
      category: "General Knowledge"
    },
    {
      id: 25,
      question: "Who founded Pakistan?",
      options: ["Allama Iqbal", "Liaquat Ali Khan", "Quaid-e-Azam Muhammad Ali Jinnah", "Fatima Jinnah"],
      correctAnswer: 2,
      category: "General Knowledge"
    },
    {
      id: 26,
      question: "What is the highest mountain peak in Pakistan?",
      options: ["Nanga Parbat", "K2", "Broad Peak", "Gasherbrum"],
      correctAnswer: 1,
      category: "General Knowledge"
    },
    {
      id: 27,
      question: "Which is the largest province of Pakistan by area?",
      options: ["Punjab", "Sindh", "Balochistan", "KPK"],
      correctAnswer: 2,
      category: "General Knowledge"
    },
    {
      id: 28,
      question: "What is the national language of Pakistan?",
      options: ["Punjabi", "Sindhi", "Urdu", "Pashto"],
      correctAnswer: 2,
      category: "General Knowledge"
    },
    {
      id: 29,
      question: "Which country shares the longest border with Pakistan?",
      options: ["India", "Afghanistan", "Iran", "China"],
      correctAnswer: 0,
      category: "General Knowledge"
    },
    {
      id: 30,
      question: "What is the currency of Pakistan?",
      options: ["Rupiah", "Rupee", "Riyal", "Rand"],
      correctAnswer: 1,
      category: "General Knowledge"
    }
  ],
  'science': [
    {
      id: 51,
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correctAnswer: 2,
      category: "Science"
    },
    {
      id: 52,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1,
      category: "Science"
    },
    {
      id: 53,
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Ribosome", "Mitochondria", "Cytoplasm"],
      correctAnswer: 2,
      category: "Science"
    },
    {
      id: 54,
      question: "What gas do plants absorb from the atmosphere during photosynthesis?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correctAnswer: 2,
      category: "Science"
    },
    {
      id: 55,
      question: "What is the speed of light in vacuum?",
      options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
      correctAnswer: 0,
      category: "Science"
    },
    {
      id: 56,
      question: "Which blood type is known as the universal donor?",
      options: ["A+", "B+", "AB+", "O-"],
      correctAnswer: 3,
      category: "Science"
    },
    {
      id: 57,
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Platinum"],
      correctAnswer: 2,
      category: "Science"
    },
    {
      id: 58,
      question: "How many bones are there in an adult human body?",
      options: ["196", "206", "216", "226"],
      correctAnswer: 1,
      category: "Science"
    },
    {
      id: 59,
      question: "What is the largest organ in the human body?",
      options: ["Liver", "Brain", "Lungs", "Skin"],
      correctAnswer: 3,
      category: "Science"
    },
    {
      id: 60,
      question: "Which galaxy contains our Solar System?",
      options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
      correctAnswer: 1,
      category: "Science"
    }
  ],
  'computer-skills': [
    {
      id: 31,
      question: "What does CPU stand for?",
      options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Computer Processing Unit"],
      correctAnswer: 0,
      category: "Computer Skills"
    },
    {
      id: 32,
      question: "Which of the following is NOT an operating system?",
      options: ["Windows", "Linux", "macOS", "Microsoft Word"],
      correctAnswer: 3,
      category: "Computer Skills"
    },
    {
      id: 33,
      question: "What does RAM stand for?",
      options: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Remote Access Memory"],
      correctAnswer: 0,
      category: "Computer Skills"
    },
    {
      id: 34,
      question: "Which programming language is known as the 'language of the web'?",
      options: ["Python", "JavaScript", "Java", "C++"],
      correctAnswer: 1,
      category: "Computer Skills"
    },
    {
      id: 35,
      question: "In MS Excel, what does the function SUM() do?",
      options: ["Counts cells", "Adds up values", "Finds average", "Finds maximum"],
      correctAnswer: 1,
      category: "Computer Skills"
    },
    {
      id: 36,
      question: "What does HTML stand for?",
      options: ["High Tech Modern Language", "HyperText Markup Language", "Home Tool Markup Language", "Hyperlink Text Markup Language"],
      correctAnswer: 1,
      category: "Computer Skills"
    },
    {
      id: 37,
      question: "Which file extension is used for Microsoft Word documents?",
      options: [".txt", ".pdf", ".docx", ".xlsx"],
      correctAnswer: 2,
      category: "Computer Skills"
    },
    {
      id: 38,
      question: "What is the main function of an operating system?",
      options: ["Browse the internet", "Manage computer hardware and software", "Create documents", "Play games"],
      correctAnswer: 1,
      category: "Computer Skills"
    },
    {
      id: 39,
      question: "Which protocol is used for sending emails?",
      options: ["HTTP", "FTP", "SMTP", "TCP"],
      correctAnswer: 2,
      category: "Computer Skills"
    },
    {
      id: 40,
      question: "What does URL stand for?",
      options: ["Universal Resource Locator", "Uniform Resource Locator", "Universal Reference Link", "Uniform Reference Locator"],
      correctAnswer: 1,
      category: "Computer Skills"
    }
  ],
  'logical-reasoning': [
    {
      id: 41,
      question: "If all roses are flowers and some flowers are red, which statement is definitely true?",
      options: ["All roses are red", "Some roses are red", "No roses are red", "Some roses may be red"],
      correctAnswer: 3,
      category: "Logical Reasoning"
    },
    {
      id: 42,
      question: "What comes next in the sequence: 2, 6, 12, 20, 30, ?",
      options: ["40", "42", "44", "46"],
      correctAnswer: 1,
      category: "Logical Reasoning"
    },
    {
      id: 43,
      question: "If A = 1, B = 2, C = 3, what is the value of CAB?",
      options: ["312", "321", "123", "132"],
      correctAnswer: 0,
      category: "Logical Reasoning"
    },
    {
      id: 44,
      question: "Which number doesn't belong: 2, 3, 6, 7, 8, 14, 15?",
      options: ["2", "6", "8", "15"],
      correctAnswer: 2,
      category: "Logical Reasoning"
    },
    {
      id: 45,
      question: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
      options: ["1 minute", "5 minutes", "20 minutes", "100 minutes"],
      correctAnswer: 1,
      category: "Logical Reasoning"
    },
    {
      id: 46,
      question: "What is the missing number: 1, 4, 9, 16, ?, 36",
      options: ["20", "25", "30", "32"],
      correctAnswer: 1,
      category: "Logical Reasoning"
    },
    {
      id: 47,
      question: "If some cats are dogs and all dogs are animals, which is true?",
      options: ["All cats are animals", "Some cats are animals", "No cats are animals", "All animals are cats"],
      correctAnswer: 1,
      category: "Logical Reasoning"
    },
    {
      id: 48,
      question: "What comes next: Monday, Wednesday, Friday, ?",
      options: ["Saturday", "Sunday", "Tuesday", "Thursday"],
      correctAnswer: 1,
      category: "Logical Reasoning"
    },
    {
      id: 49,
      question: "If you rearrange the letters 'CIFAIPC', you get the name of a:",
      options: ["Country", "Animal", "Ocean", "Planet"],
      correctAnswer: 2,
      category: "Logical Reasoning"
    },
    {
      id: 50,
      question: "What is the next letter in the sequence: A, D, G, J, ?",
      options: ["K", "L", "M", "N"],
      correctAnswer: 2,
      category: "Logical Reasoning"
    }
  ]
};

// Add subcategory questions for Computer Skills
questionsByCategory['computer-fundamentals'] = [
  {
    id: 301,
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Computer Processing Unit"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 302,
    question: "Which of the following is an input device?",
    options: ["Monitor", "Printer", "Keyboard", "Speaker"],
    correctAnswer: 2,
    category: "Computer Fundamentals"
  },
  {
    id: 303,
    question: "What is the brain of the computer?",
    options: ["Hard Drive", "RAM", "CPU", "Motherboard"],
    correctAnswer: 2,
    category: "Computer Fundamentals"
  },
  {
    id: 304,
    question: "Which unit is used to measure computer memory?",
    options: ["Hertz", "Byte", "Watt", "Pixel"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 305,
    question: "What does GUI stand for?",
    options: ["General User Interface", "Graphical User Interface", "Global User Interface", "Generic User Interface"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 306,
    question: "Which is the smallest unit of data in a computer?",
    options: ["Bit", "Byte", "Nibble", "Word"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 307,
    question: "What is the full form of ROM?",
    options: ["Random Only Memory", "Read Only Memory", "Rapid Only Memory", "Real Only Memory"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 308,
    question: "Which device is used to connect a computer to the internet?",
    options: ["Printer", "Scanner", "Modem", "Speaker"],
    correctAnswer: 2,
    category: "Computer Fundamentals"
  },
  {
    id: 309,
    question: "What is the main circuit board of a computer called?",
    options: ["CPU", "RAM", "Motherboard", "Hard Drive"],
    correctAnswer: 2,
    category: "Computer Fundamentals"
  },
  {
    id: 310,
    question: "Which type of software controls the basic functions of a computer?",
    options: ["Application Software", "System Software", "Utility Software", "Programming Software"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  }
];

questionsByCategory['operating-systems'] = [
  {
    id: 311,
    question: "Which of the following is NOT an operating system?",
    options: ["Windows 11", "macOS", "Linux", "Microsoft Word"],
    correctAnswer: 3,
    category: "Operating Systems"
  },
  {
    id: 312,
    question: "What is the latest version of Windows as of 2024?",
    options: ["Windows 10", "Windows 11", "Windows 12", "Windows XP"],
    correctAnswer: 1,
    category: "Operating Systems"
  },
  {
    id: 313,
    question: "Which operating system is developed by Apple?",
    options: ["Windows", "Linux", "macOS", "Android"],
    correctAnswer: 2,
    category: "Operating Systems"
  },
  {
    id: 314,
    question: "What does OS stand for?",
    options: ["Open Source", "Operating System", "Online Service", "Office Suite"],
    correctAnswer: 1,
    category: "Operating Systems"
  },
  {
    id: 315,
    question: "Which Linux distribution is most popular for beginners?",
    options: ["Arch Linux", "Ubuntu", "Gentoo", "Slackware"],
    correctAnswer: 1,
    category: "Operating Systems"
  },
  {
    id: 316,
    question: "What is the command prompt in Windows used for?",
    options: ["Playing games", "Text-based commands", "Web browsing", "Video editing"],
    correctAnswer: 1,
    category: "Operating Systems"
  },
  {
    id: 317,
    question: "Which key combination opens Task Manager in Windows?",
    options: ["Ctrl+Alt+Del", "Alt+Tab", "Ctrl+C", "Win+R"],
    correctAnswer: 0,
    category: "Operating Systems"
  },
  {
    id: 318,
    question: "What is virtual memory?",
    options: ["RAM only", "Hard disk space used as RAM", "Cache memory", "Graphics memory"],
    correctAnswer: 1,
    category: "Operating Systems"
  },
  {
    id: 319,
    question: "Which file system is commonly used by Windows?",
    options: ["ext4", "HFS+", "NTFS", "FAT16"],
    correctAnswer: 2,
    category: "Operating Systems"
  },
  {
    id: 320,
    question: "What is multitasking in an operating system?",
    options: ["Running one program", "Running multiple programs simultaneously", "Shutting down", "Installing software"],
    correctAnswer: 1,
    category: "Operating Systems"
  }
];

questionsByCategory['networking'] = [
  {
    id: 321,
    question: "What does IP stand for in networking?",
    options: ["Internet Protocol", "Internal Program", "Information Processing", "Input Process"],
    correctAnswer: 0,
    category: "Networking"
  },
  {
    id: 322,
    question: "Which device connects multiple networks together?",
    options: ["Hub", "Switch", "Router", "Modem"],
    correctAnswer: 2,
    category: "Networking"
  },
  {
    id: 323,
    question: "What is the standard port number for HTTP?",
    options: ["21", "25", "80", "443"],
    correctAnswer: 2,
    category: "Networking"
  },
  {
    id: 324,
    question: "What does WWW stand for?",
    options: ["World Wide Web", "World Wide Work", "Web Wide World", "Wide World Web"],
    correctAnswer: 0,
    category: "Networking"
  },
  {
    id: 325,
    question: "Which protocol is used for secure web browsing?",
    options: ["HTTP", "HTTPS", "FTP", "SMTP"],
    correctAnswer: 1,
    category: "Networking"
  },
  {
    id: 326,
    question: "What is a firewall used for?",
    options: ["Speed up internet", "Network security", "Store data", "Print documents"],
    correctAnswer: 1,
    category: "Networking"
  },
  {
    id: 327,
    question: "What does LAN stand for?",
    options: ["Large Area Network", "Local Area Network", "Long Area Network", "Limited Area Network"],
    correctAnswer: 1,
    category: "Networking"
  },
  {
    id: 328,
    question: "Which of the following is a valid IP address?",
    options: ["192.168.1.256", "192.168.1.1", "999.999.999.999", "192.168.1"],
    correctAnswer: 1,
    category: "Networking"
  },
  {
    id: 329,
    question: "What is bandwidth in networking?",
    options: ["Physical cable width", "Data transfer capacity", "Network distance", "Number of users"],
    correctAnswer: 1,
    category: "Networking"
  },
  {
    id: 330,
    question: "Which wireless standard is fastest?",
    options: ["802.11g", "802.11n", "802.11ac", "802.11b"],
    correctAnswer: 2,
    category: "Networking"
  }
];

questionsByCategory['programming-languages'] = [
  {
    id: 331,
    question: "Which programming language is known as the 'language of the web'?",
    options: ["Python", "JavaScript", "Java", "C++"],
    correctAnswer: 1,
    category: "Programming Languages"
  },
  {
    id: 332,
    question: "What does HTML stand for?",
    options: ["High Tech Modern Language", "HyperText Markup Language", "Home Tool Markup Language", "Hyperlink Text Markup Language"],
    correctAnswer: 1,
    category: "Programming Languages"
  },
  {
    id: 333,
    question: "Which language is primarily used for iOS app development?",
    options: ["Java", "Swift", "Python", "C#"],
    correctAnswer: 1,
    category: "Programming Languages"
  },
  {
    id: 334,
    question: "What is Python known for?",
    options: ["Web development only", "Mobile apps only", "Simplicity and readability", "Gaming only"],
    correctAnswer: 2,
    category: "Programming Languages"
  },
  {
    id: 335,
    question: "Which symbol is used for comments in Python?",
    options: ["//", "/*", "#", "<!--"],
    correctAnswer: 2,
    category: "Programming Languages"
  },
  {
    id: 336,
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
    correctAnswer: 1,
    category: "Programming Languages"
  },
  {
    id: 337,
    question: "Which language is used for Android app development?",
    options: ["Swift", "Objective-C", "Java/Kotlin", "Ruby"],
    correctAnswer: 2,
    category: "Programming Languages"
  },
  {
    id: 338,
    question: "What is a variable in programming?",
    options: ["A constant value", "A storage location with a name", "A function", "A loop"],
    correctAnswer: 1,
    category: "Programming Languages"
  },
  {
    id: 339,
    question: "Which of the following is a loop structure?",
    options: ["if-else", "switch", "for", "function"],
    correctAnswer: 2,
    category: "Programming Languages"
  },
  {
    id: 340,
    question: "What does API stand for?",
    options: ["Application Programming Interface", "Advanced Programming Interface", "Automated Programming Interface", "Applied Programming Interface"],
    correctAnswer: 0,
    category: "Programming Languages"
  }
];

questionsByCategory['database-management'] = [
  {
    id: 341,
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"],
    correctAnswer: 0,
    category: "Database Management"
  },
  {
    id: 342,
    question: "Which of the following is a popular database management system?",
    options: ["Microsoft Word", "Adobe Photoshop", "MySQL", "Windows Media Player"],
    correctAnswer: 2,
    category: "Database Management"
  },
  {
    id: 343,
    question: "What is a primary key in a database?",
    options: ["A duplicate record", "A unique identifier for records", "A backup key", "A password"],
    correctAnswer: 1,
    category: "Database Management"
  },
  {
    id: 344,
    question: "Which SQL command is used to retrieve data?",
    options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
    correctAnswer: 2,
    category: "Database Management"
  },
  {
    id: 345,
    question: "What is normalization in databases?",
    options: ["Making data abnormal", "Organizing data to reduce redundancy", "Deleting data", "Backing up data"],
    correctAnswer: 1,
    category: "Database Management"
  },
  {
    id: 346,
    question: "Which of the following is NOT a database type?",
    options: ["Relational", "NoSQL", "Graph", "Spreadsheet"],
    correctAnswer: 3,
    category: "Database Management"
  },
  {
    id: 347,
    question: "What does CRUD stand for in database operations?",
    options: ["Create, Read, Update, Delete", "Copy, Read, Update, Delete", "Create, Remove, Update, Delete", "Create, Read, Upload, Delete"],
    correctAnswer: 0,
    category: "Database Management"
  },
  {
    id: 348,
    question: "Which company developed Oracle Database?",
    options: ["Microsoft", "Oracle Corporation", "IBM", "Google"],
    correctAnswer: 1,
    category: "Database Management"
  },
  {
    id: 349,
    question: "What is a foreign key?",
    options: ["A key from another country", "A key that links tables", "A backup key", "An encrypted key"],
    correctAnswer: 1,
    category: "Database Management"
  },
  {
    id: 350,
    question: "Which is faster for large datasets?",
    options: ["Excel spreadsheet", "Text file", "Database", "Word document"],
    correctAnswer: 2,
    category: "Database Management"
  }
];

questionsByCategory['software-development'] = [
  {
    id: 351,
    question: "What does SDLC stand for?",
    options: ["Software Development Life Cycle", "System Development Life Cycle", "Software Design Life Cycle", "System Design Life Cycle"],
    correctAnswer: 0,
    category: "Software Development"
  },
  {
    id: 352,
    question: "Which is an Agile methodology?",
    options: ["Waterfall", "Scrum", "V-Model", "Spiral"],
    correctAnswer: 1,
    category: "Software Development"
  },
  {
    id: 353,
    question: "What is version control used for?",
    options: ["Controlling software versions", "Managing code changes", "Both A and B", "Neither A nor B"],
    correctAnswer: 2,
    category: "Software Development"
  },
  {
    id: 354,
    question: "Which is a popular version control system?",
    options: ["Git", "Word", "Excel", "PowerPoint"],
    correctAnswer: 0,
    category: "Software Development"
  },
  {
    id: 355,
    question: "What is debugging?",
    options: ["Adding bugs", "Finding and fixing errors", "Testing software", "Writing code"],
    correctAnswer: 1,
    category: "Software Development"
  },
  {
    id: 356,
    question: "What does IDE stand for?",
    options: ["Integrated Development Environment", "Internet Development Environment", "Internal Development Environment", "International Development Environment"],
    correctAnswer: 0,
    category: "Software Development"
  },
  {
    id: 357,
    question: "Which is a popular IDE for Java development?",
    options: ["Notepad", "Eclipse", "Paint", "Calculator"],
    correctAnswer: 1,
    category: "Software Development"
  },
  {
    id: 358,
    question: "What is unit testing?",
    options: ["Testing individual components", "Testing the whole system", "Testing user interface", "Testing database"],
    correctAnswer: 0,
    category: "Software Development"
  },
  {
    id: 359,
    question: "What is the purpose of code review?",
    options: ["To slow down development", "To improve code quality", "To increase bugs", "To confuse developers"],
    correctAnswer: 1,
    category: "Software Development"
  },
  {
    id: 360,
    question: "Which methodology emphasizes customer collaboration?",
    options: ["Waterfall", "Agile", "V-Model", "Spiral"],
    correctAnswer: 1,
    category: "Software Development"
  }
];

questionsByCategory['ms-office'] = [
  {
    id: 361,
    question: "In MS Excel, what does the SUM() function do?",
    options: ["Counts cells", "Adds up values", "Finds average", "Finds maximum"],
    correctAnswer: 1,
    category: "MS Office"
  },
  {
    id: 362,
    question: "Which file extension is used for Microsoft Word documents?",
    options: [".txt", ".pdf", ".docx", ".xlsx"],
    correctAnswer: 2,
    category: "MS Office"
  },
  {
    id: 363,
    question: "In PowerPoint, what is a slide transition?",
    options: ["Moving slides", "Animation between slides", "Deleting slides", "Copying slides"],
    correctAnswer: 1,
    category: "MS Office"
  },
  {
    id: 364,
    question: "Which key combination saves a document in MS Office?",
    options: ["Ctrl+S", "Ctrl+P", "Ctrl+C", "Ctrl+V"],
    correctAnswer: 0,
    category: "MS Office"
  },
  {
    id: 365,
    question: "In Excel, what is a cell reference?",
    options: ["A cell's address", "A cell's value", "A cell's formula", "A cell's format"],
    correctAnswer: 0,
    category: "MS Office"
  },
  {
    id: 366,
    question: "Which MS Office application is best for creating presentations?",
    options: ["Word", "Excel", "PowerPoint", "Access"],
    correctAnswer: 2,
    category: "MS Office"
  },
  {
    id: 367,
    question: "In Word, what is Mail Merge used for?",
    options: ["Combining documents", "Sending bulk personalized documents", "Merging paragraphs", "Combining fonts"],
    correctAnswer: 1,
    category: "MS Office"
  },
  {
    id: 368,
    question: "Which Excel function finds the average of a range?",
    options: ["SUM()", "AVERAGE()", "COUNT()", "MAX()"],
    correctAnswer: 1,
    category: "MS Office"
  },
  {
    id: 369,
    question: "In PowerPoint, what is a template?",
    options: ["A blank slide", "A pre-designed presentation format", "A slide animation", "A slide transition"],
    correctAnswer: 1,
    category: "MS Office"
  },
  {
    id: 370,
    question: "Which feature in Word helps check spelling and grammar?",
    options: ["AutoCorrect", "Spell Check", "Grammar Check", "All of the above"],
    correctAnswer: 3,
    category: "MS Office"
  }
];

questionsByCategory['hardware'] = [
  {
    id: 371,
    question: "What does RAM stand for?",
    options: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Remote Access Memory"],
    correctAnswer: 0,
    category: "Hardware"
  },
  {
    id: 372,
    question: "Which component is considered the brain of the computer?",
    options: ["Hard Drive", "RAM", "CPU", "Motherboard"],
    correctAnswer: 2,
    category: "Hardware"
  },
  {
    id: 373,
    question: "What is the main circuit board of a computer called?",
    options: ["CPU", "RAM", "Motherboard", "Hard Drive"],
    correctAnswer: 2,
    category: "Hardware"
  },
  {
    id: 374,
    question: "Which storage device is fastest?",
    options: ["Hard Disk Drive (HDD)", "Solid State Drive (SSD)", "CD-ROM", "Floppy Disk"],
    correctAnswer: 1,
    category: "Hardware"
  },
  {
    id: 375,
    question: "What does GPU stand for?",
    options: ["General Processing Unit", "Graphics Processing Unit", "Global Processing Unit", "Game Processing Unit"],
    correctAnswer: 1,
    category: "Hardware"
  },
  {
    id: 376,
    question: "Which port is commonly used for connecting monitors?",
    options: ["USB", "HDMI", "Ethernet", "Audio Jack"],
    correctAnswer: 1,
    category: "Hardware"
  },
  {
    id: 377,
    question: "What is the purpose of a power supply unit (PSU)?",
    options: ["Store data", "Process information", "Convert AC to DC power", "Cool the system"],
    correctAnswer: 2,
    category: "Hardware"
  },
  {
    id: 378,
    question: "Which component is responsible for cooling the CPU?",
    options: ["RAM", "Hard Drive", "Heat Sink/Fan", "Power Supply"],
    correctAnswer: 2,
    category: "Hardware"
  },
  {
    id: 379,
    question: "What is the difference between RAM and ROM?",
    options: ["RAM is permanent, ROM is temporary", "RAM is temporary, ROM is permanent", "They are the same", "RAM is slower than ROM"],
    correctAnswer: 1,
    category: "Hardware"
  },
  {
    id: 380,
    question: "Which interface is commonly used for connecting external hard drives?",
    options: ["VGA", "HDMI", "USB", "Audio Jack"],
    correctAnswer: 2,
    category: "Hardware"
  }
];

// Add questions for Pakistan Current Affairs
questionsByCategory['pakistan-current-affairs'] = [
  {
    id: 401,
    question: "Who is the current President of Pakistan (as of 2024)?",
    options: ["Arif Alvi", "Asif Ali Zardari", "Mamnoon Hussain", "Pervez Musharraf"],
    correctAnswer: 1,
    category: "Pakistan Current Affairs"
  },
  {
    id: 402,
    question: "Which province of Pakistan has the highest population?",
    options: ["Sindh", "Punjab", "KPK", "Balochistan"],
    correctAnswer: 1,
    category: "Pakistan Current Affairs"
  },
  {
    id: 403,
    question: "What is the current inflation rate in Pakistan (approximate 2024)?",
    options: ["5-10%", "15-20%", "25-30%", "35-40%"],
    correctAnswer: 2,
    category: "Pakistan Current Affairs"
  },
  {
    id: 404,
    question: "Which country is Pakistan's largest trading partner?",
    options: ["China", "USA", "India", "Saudi Arabia"],
    correctAnswer: 0,
    category: "Pakistan Current Affairs"
  },
  {
    id: 405,
    question: "What is the name of Pakistan's space agency?",
    options: ["NASA", "ISRO", "SUPARCO", "ESA"],
    correctAnswer: 2,
    category: "Pakistan Current Affairs"
  }
];

// Add questions for World Current Affairs
questionsByCategory['world-current-affairs'] = [
  {
    id: 406,
    question: "Which country hosted the 2024 Summer Olympics?",
    options: ["Japan", "France", "USA", "China"],
    correctAnswer: 1,
    category: "World Current Affairs"
  },
  {
    id: 407,
    question: "What is the current population of the world (approximate 2024)?",
    options: ["7 billion", "8 billion", "9 billion", "10 billion"],
    correctAnswer: 1,
    category: "World Current Affairs"
  },
  {
    id: 408,
    question: "Which country has the largest economy in the world?",
    options: ["China", "USA", "Japan", "Germany"],
    correctAnswer: 0,
    category: "World Current Affairs"
  },
  {
    id: 409,
    question: "What is the main cause of climate change?",
    options: ["Volcanic eruptions", "Greenhouse gas emissions", "Solar flares", "Ocean currents"],
    correctAnswer: 1,
    category: "World Current Affairs"
  },
  {
    id: 410,
    question: "Which technology is revolutionizing AI in 2024?",
    options: ["Blockchain", "Quantum Computing", "Machine Learning", "All of the above"],
    correctAnswer: 3,
    category: "World Current Affairs"
  }
];

// Add questions for Pakistan Studies
questionsByCategory['pakistan-studies'] = [
  {
    id: 411,
    question: "When was the Pakistan Resolution passed?",
    options: ["March 23, 1940", "August 14, 1947", "March 23, 1947", "August 14, 1940"],
    correctAnswer: 0,
    category: "Pakistan Studies"
  },
  {
    id: 412,
    question: "Who wrote the national anthem of Pakistan?",
    options: ["Allama Iqbal", "Hafeez Jalandhri", "Faiz Ahmed Faiz", "Ahmed Faraz"],
    correctAnswer: 1,
    category: "Pakistan Studies"
  },
  {
    id: 413,
    question: "What is the national flower of Pakistan?",
    options: ["Rose", "Jasmine", "Tulip", "Sunflower"],
    correctAnswer: 1,
    category: "Pakistan Studies"
  },
  {
    id: 414,
    question: "Which mountain range is located in Pakistan?",
    options: ["Himalayas", "Karakoram", "Hindu Kush", "All of the above"],
    correctAnswer: 3,
    category: "Pakistan Studies"
  },
  {
    id: 415,
    question: "What is the national animal of Pakistan?",
    options: ["Snow Leopard", "Markhor", "Lion", "Tiger"],
    correctAnswer: 1,
    category: "Pakistan Studies"
  }
];

// Add questions for Islamic Studies
questionsByCategory['islamic-studies'] = [
  {
    id: 416,
    question: "How many surahs are there in the Quran?",
    options: ["110", "114", "118", "120"],
    correctAnswer: 1,
    category: "Islamic Studies"
  },
  {
    id: 417,
    question: "What is the first surah of the Quran?",
    options: ["Al-Baqarah", "Al-Fatiha", "Al-Ikhlas", "Al-Nas"],
    correctAnswer: 1,
    category: "Islamic Studies"
  },
  {
    id: 418,
    question: "How many pillars of Islam are there?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2,
    category: "Islamic Studies"
  },
  {
    id: 419,
    question: "What is the first pillar of Islam?",
    options: ["Salah", "Sawm", "Shahada", "Zakat"],
    correctAnswer: 2,
    category: "Islamic Studies"
  },
  {
    id: 420,
    question: "Which month is Ramadan?",
    options: ["9th month", "10th month", "11th month", "12th month"],
    correctAnswer: 0,
    category: "Islamic Studies"
  }
];

// Add questions for Everyday Science
questionsByCategory['everyday-science'] = [
  {
    id: 421,
    question: "What is the chemical formula for water?",
    options: ["H2O", "CO2", "O2", "N2"],
    correctAnswer: 0,
    category: "Everyday Science"
  },
  {
    id: 422,
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 2,
    category: "Everyday Science"
  },
  {
    id: 423,
    question: "What is the process by which plants make food?",
    options: ["Respiration", "Photosynthesis", "Digestion", "Excretion"],
    correctAnswer: 1,
    category: "Everyday Science"
  },
  {
    id: 424,
    question: "What is the unit of electric current?",
    options: ["Volt", "Watt", "Ampere", "Ohm"],
    correctAnswer: 2,
    category: "Everyday Science"
  },
  {
    id: 425,
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    correctAnswer: 2,
    category: "Everyday Science"
  }
];

// Add questions for Physics
questionsByCategory['physics'] = [
  {
    id: 426,
    question: "What is Newton's first law about?",
    options: ["Gravity", "Inertia", "Action-Reaction", "Energy"],
    correctAnswer: 1,
    category: "Physics"
  },
  {
    id: 427,
    question: "What is the SI unit of force?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    correctAnswer: 1,
    category: "Physics"
  },
  {
    id: 428,
    question: "What is the speed of sound in air?",
    options: ["300 m/s", "330 m/s", "340 m/s", "350 m/s"],
    correctAnswer: 2,
    category: "Physics"
  },
  {
    id: 429,
    question: "What is the law of conservation of energy?",
    options: ["Energy can be created", "Energy can be destroyed", "Energy cannot be created or destroyed", "Energy is always increasing"],
    correctAnswer: 2,
    category: "Physics"
  },
  {
    id: 430,
    question: "What is the unit of power?",
    options: ["Joule", "Newton", "Watt", "Ampere"],
    correctAnswer: 2,
    category: "Physics"
  }
];

// Add questions for Chemistry
questionsByCategory['chemistry'] = [
  {
    id: 431,
    question: "What is the atomic number of carbon?",
    options: ["4", "6", "8", "12"],
    correctAnswer: 1,
    category: "Chemistry"
  },
  {
    id: 432,
    question: "What is the chemical symbol for iron?",
    options: ["Ir", "Fe", "In", "I"],
    correctAnswer: 1,
    category: "Chemistry"
  },
  {
    id: 433,
    question: "What is the pH of a neutral solution?",
    options: ["0", "7", "14", "10"],
    correctAnswer: 1,
    category: "Chemistry"
  },
  {
    id: 434,
    question: "What is the molecular formula for glucose?",
    options: ["C6H12O6", "C12H22O11", "CH3COOH", "NaHCO3"],
    correctAnswer: 0,
    category: "Chemistry"
  },
  {
    id: 435,
    question: "What type of bond is formed between sodium and chlorine?",
    options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
    correctAnswer: 1,
    category: "Chemistry"
  }
];

// Add questions for Biology
questionsByCategory['biology'] = [
  {
    id: 436,
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Cytoplasm"],
    correctAnswer: 2,
    category: "Biology"
  },
  {
    id: 437,
    question: "How many chromosomes do humans have?",
    options: ["23", "46", "69", "92"],
    correctAnswer: 1,
    category: "Biology"
  },
  {
    id: 438,
    question: "What is the process of cell division called?",
    options: ["Mitosis", "Meiosis", "Both A and B", "Neither A nor B"],
    correctAnswer: 2,
    category: "Biology"
  },
  {
    id: 439,
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Brain", "Lungs", "Skin"],
    correctAnswer: 3,
    category: "Biology"
  },
  {
    id: 440,
    question: "What gas do plants absorb during photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: 2,
    category: "Biology"
  }
];

// Add questions for Pedagogy
questionsByCategory['pedagogy'] = [
  {
    id: 441,
    question: "What is the main goal of education?",
    options: ["To pass exams", "To develop skills and knowledge", "To get a job", "To please parents"],
    correctAnswer: 1,
    category: "Pedagogy"
  },
  {
    id: 442,
    question: "What is the role of a teacher?",
    options: ["To give lectures", "To facilitate learning", "To discipline students", "To grade papers"],
    correctAnswer: 1,
    category: "Pedagogy"
  },
  {
    id: 443,
    question: "What is assessment in education?",
    options: ["Giving grades", "Evaluating learning", "Punishing students", "Comparing students"],
    correctAnswer: 1,
    category: "Pedagogy"
  },
  {
    id: 444,
    question: "What is the best teaching method?",
    options: ["Lecture method", "Discussion method", "Depends on the topic", "All methods are equal"],
    correctAnswer: 2,
    category: "Pedagogy"
  },
  {
    id: 445,
    question: "What is the importance of homework?",
    options: ["To keep students busy", "To reinforce learning", "To punish students", "To test parents"],
    correctAnswer: 1,
    category: "Pedagogy"
  }
];

// Add questions for Urdu
questionsByCategory['urdu'] = [
  {
    id: 446,
    question: "اردو کا قومی شاعر کون ہے؟",
    options: ["میر تقی میر", "علامہ اقبال", "فیض احمد فیض", "احمد فراز"],
    correctAnswer: 1,
    category: "Urdu"
  },
  {
    id: 447,
    question: "اردو میں 'شعر' کا مطلب کیا ہے؟",
    options: ["نظم", "غزل", "مثنوی", "سب"],
    correctAnswer: 3,
    category: "Urdu"
  },
  {
    id: 448,
    question: "اردو کا پہلا اخبار کون سا تھا؟",
    options: ["جام جہاں نما", "اردو اخبار", "پنجاب اخبار", "ہندوستانی اخبار"],
    correctAnswer: 0,
    category: "Urdu"
  },
  {
    id: 449,
    question: "اردو میں 'مثنوی' کا مطلب کیا ہے؟",
    options: ["دو مصرعوں کی نظم", "طویل نظم", "قصیدہ", "غزل"],
    correctAnswer: 1,
    category: "Urdu"
  },
  {
    id: 450,
    question: "اردو کا قومی دن کب منایا جاتا ہے؟",
    options: ["14 اگست", "23 مارچ", "9 نومبر", "25 دسمبر"],
    correctAnswer: 2,
    category: "Urdu"
  }
];

// Add more questions for English
questionsByCategory['english'].push(
  {
    id: 11,
    question: "What is the comparative form of 'good'?",
    options: ["Gooder", "Better", "Best", "More good"],
    correctAnswer: 1,
    category: "English"
  },
  {
    id: 12,
    question: "Which word is a conjunction?",
    options: ["Quickly", "Beautiful", "And", "Happy"],
    correctAnswer: 2,
    category: "English"
  },
  {
    id: 13,
    question: "What is the plural of 'person'?",
    options: ["Persons", "People", "Persones", "Person"],
    correctAnswer: 1,
    category: "English"
  },
  {
    id: 14,
    question: "Which sentence uses the present perfect tense?",
    options: ["I go to school", "I went to school", "I have gone to school", "I will go to school"],
    correctAnswer: 2,
    category: "English"
  },
  {
    id: 15,
    question: "What is the meaning of 'ubiquitous'?",
    options: ["Rare", "Present everywhere", "Expensive", "Beautiful"],
    correctAnswer: 1,
    category: "English"
  }
);

// Add more questions for Mathematics
questionsByCategory['mathematics'].push(
  {
    id: 21,
    question: "What is the value of π (pi) to two decimal places?",
    options: ["3.12", "3.14", "3.16", "3.18"],
    correctAnswer: 1,
    category: "Mathematics"
  },
  {
    id: 22,
    question: "What is the formula for the area of a circle?",
    options: ["πr²", "2πr", "πd", "2πd"],
    correctAnswer: 0,
    category: "Mathematics"
  },
  {
    id: 23,
    question: "What is the next number in the sequence: 2, 4, 8, 16, ?",
    options: ["24", "32", "30", "28"],
    correctAnswer: 1,
    category: "Mathematics"
  },
  {
    id: 24,
    question: "What is the square of 12?",
    options: ["144", "124", "134", "154"],
    correctAnswer: 0,
    category: "Mathematics"
  },
  {
    id: 25,
    question: "What is 20% of 150?",
    options: ["25", "30", "35", "40"],
    correctAnswer: 1,
    category: "Mathematics"
  }
);

// Add questions for Past Papers
questionsByCategory['past-papers'] = [
  {
    id: 451,
    question: "Which exam is conducted by FPSC for civil service positions?",
    options: ["CSS", "PMS", "FPSC", "PPSC"],
    correctAnswer: 0,
    category: "Past Papers"
  },
  {
    id: 452,
    question: "What is the full form of CSS?",
    options: ["Central Superior Services", "Civil Service Selection", "Central Service System", "Civil Superior Services"],
    correctAnswer: 0,
    category: "Past Papers"
  },
  {
    id: 453,
    question: "Which exam is for provincial civil services?",
    options: ["CSS", "PMS", "NTS", "FPSC"],
    correctAnswer: 1,
    category: "Past Papers"
  },
  {
    id: 454,
    question: "What is the full form of PPSC?",
    options: ["Pakistan Public Service Commission", "Punjab Public Service Commission", "Provincial Public Service Commission", "Public Service Commission"],
    correctAnswer: 1,
    category: "Past Papers"
  },
  {
    id: 455,
    question: "Which exam is conducted by NTS?",
    options: ["CSS", "PMS", "Entry Tests", "Provincial Services"],
    correctAnswer: 2,
    category: "Past Papers"
  },
  {
    id: 456,
    question: "What is the full form of KPSC?",
    options: ["Khyber Pakhtunkhwa Service Commission", "Khyber Public Service Commission", "Khyber Pakhtunkhwa Public Service Commission", "Khyber Service Commission"],
    correctAnswer: 2,
    category: "Past Papers"
  },
  {
    id: 457,
    question: "Which exam is for Balochistan province?",
    options: ["PPSC", "KPSC", "BPSC", "SPSC"],
    correctAnswer: 2,
    category: "Past Papers"
  },
  {
    id: 458,
    question: "What is the full form of SPSC?",
    options: ["Sindh Public Service Commission", "Sindh Provincial Service Commission", "Sindh Service Commission", "Sindh Public Service"],
    correctAnswer: 0,
    category: "Past Papers"
  },
  {
    id: 459,
    question: "Which exam is for AJK region?",
    options: ["AJKPSC", "PPSC", "KPSC", "BPSC"],
    correctAnswer: 0,
    category: "Past Papers"
  },
  {
    id: 460,
    question: "What is the full form of NTS?",
    options: ["National Testing Service", "National Test System", "National Testing System", "National Test Service"],
    correctAnswer: 0,
    category: "Past Papers"
  }
];