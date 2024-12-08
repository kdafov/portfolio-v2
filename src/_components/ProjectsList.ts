import { TechnologyType } from "./technologiesColors.map";

export type ProjectType = {
    title: string;
    description: string;
    version: string;
    imageSrc: string;
    imageAlt: string;
    rating: 1 | 2 | 3 | 4 | 5;
    technologies: TechnologyType[];
    viewLink: null | string;
    buttonText: string;
}

export const projects: ProjectType[] = [
    {
        title: 'TBUI Package',
        description:
            'Tired of reinventing the wheel for every project, I decided to take control of the repetitive task of building UI components from scratch. I created my own npm package for reusable UI elements, designed to streamline development and ensure consistency across projects. This package not only saved me countless hours but also empowered others by providing a library of polished, customizable components that are easy to integrate.',
        version: 'v0.0.7 [on hold]',
        imageSrc:
            '/TBUI.png',
        imageAlt:
            'TBUI package',
        rating: 3,
        technologies: ['TypeScript', 'StyledComponents', 'JavaScript'],
        viewLink: 'https://www.npmjs.com/package/kdafov-tbui',
        buttonText: 'View on NPMjs',
    },
    {
        title: 'Budget Planner',
        description: 'Mobile app made for employees to manage their expenses by adding transactions, viewing the total amount spent, and associating receipts with each transaction. The app integrates with Firebase for storing and retrieving transaction data and uses Coil for loading images associated with transactions.',
        version: 'v2 [deprecated]',
        imageSrc: 'budget_planner.png',
        imageAlt: 'Budget Planner',
        rating: 4,
        technologies: ['Kotlin', 'JetpackCompose', 'Firebase'],
        viewLink: 'https://github.com/kdafov/budget-planner',
        buttonText: 'View on GitHub'
    },
    {
        title: 'Invoice PDF',
        description: 'This web application makes creating and managing invoices simple and efficient. Users can generate professional invoices, export them as PDFs, and save customer and company details for future use, avoiding repetitive data entry. It offers customization options, such as selecting a logo, and tracks important details like payment status, dates, and itemized lists. With automatic company detail insertion and an easy-to-use interface, the app ensures a professional invoicing experience.',
        version: '1.0a [in production]',
        imageSrc: 'invoice_app.png',
        imageAlt: 'Invoice App',
        rating: 3,
        technologies: ['React', 'NodeJs', 'MongoDB', 'MUI'],
        viewLink: null,
        buttonText: 'Private project'
    },
    {
        title: 'AllCityCleaning Ltd',
        description: 'This website is a fully custom-built solution for a carpet and upholstery cleaning business, designed to translate Figma designs into a functional and visually appealing platform. It includes key features such as a home page to showcase services, an admin page for business management, a booking page for scheduling appointments, and a quote request page to provide customers with cost estimates. The site integrates business tools like Facebook and Google Ads for marketing, along with Captcha for security.',
        version: 'v3 [in production] (v4 expected Jan 2025)',
        imageSrc: 'allcitycleaning.png',
        imageAlt: 'AllCityCleaning',
        rating: 5,
        technologies: ['React', 'NodeJs', 'GCP', 'MUI', 'TypeScript', 'FBPixel', 'GoogleAds'],
        viewLink: 'https://www.allcitycleaning.co.uk/',
        buttonText: 'View live'
    },
    {
        title: 'GCP-Map-Reduce',
        description: 'This project implements a MapReduce model using Google Cloud Platform (GCP) to identify all sets of anagrams across 500 books. It uses GCP services like Cloud Functions, Pub/Sub, and Cloud Storage for efficient parallel processing. The pipeline includes a readBucket function to initialize processing, a mapper function to clean data and generate key-value pairs, a shuffler to group anagrams by key, and a reducer to compile the final list of anagrams while minimizing computational costs using semaphores. The project also includes detailed runtime and cost analysis, demonstrating its efficiency and affordability, with an average cost of just $0.0279 per run.',
        version: 'v1 [deprecated]',
        imageSrc: 'map-reduce.png',
        imageAlt: 'Map Reduce',
        rating: 5,
        technologies: ['GCP', 'Python'],
        viewLink: 'https://github.com/kdafov/gcp-map-reduce',
        buttonText: 'View on GitHub'
    },
    {
        title: '8-Puzzle-Solver',
        description: 'The 8 Puzzle Solver is a Java program that calculates the number of possible states for two given starting configurations (S1 and S2) of the 8-puzzle game. Users provide inputs for the puzzle states, including one mandatory empty space represented by \'x\'. Using a Depth-First Search (DFS) algorithm and a stack, the program explores all unique states from a starting configuration. To efficiently manage and eliminate duplicates, a HashSet is used to store possible solutions, ensuring constant-time operations for lookups and insertions. The program also calculates the number of common states between the two input configurations.',
        version: 'v1 [deprecated]',
        imageSrc: '8_puzzle.png',
        imageAlt: '8 Puzzle Solver',
        rating: 4,
        technologies: ['Java'],
        viewLink: 'https://github.com/kdafov/8-puzzle-solver',
        buttonText: 'View on GitHub'
    },
    {
        title: 'Portfolio',
        description: 'A personal portfolio project designed to showcase my skills, experience, and client testimonials in a modern, visually appealing format. The site highlights my projects and achievements, integrating the latest technologies to ensure a seamless user experience while reflecting a professional and innovative approach.',
        version: 'v2 [in production]',
        imageSrc: 'portfolio.png',
        imageAlt: 'Portfolio',
        rating: 3,
        technologies: ['React', 'TailwindCSS', 'TypeScript'],
        viewLink: 'https://kdafov.com',
        buttonText: 'View live'
    },
    {
        title: 'Connect Recruitment',
        description: 'Connect(R) is a modern recruitment platform designed to simplify job searching and recruitment processes. Job seekers can browse and apply for jobs using advanced filters, while company administrators can manage their organization, control recruiter access, and monitor team performance. Recruiters can efficiently manage job postings, review applications in a structured format, and create job advertisements with ease. Connect(R) provides all the tools needed for effective recruitment in one platform.',
        version: 'v1 [deprecated]',
        imageSrc: 'recruit-connect.png',
        imageAlt: 'Recruit Connect',
        rating: 4,
        technologies: ['NextJs', 'MUI', 'GCP', 'MySQL'],
        viewLink: 'https://github.com/kdafov/connect-recruit',
        buttonText: 'View on GitHub'
    },
    {
        title: 'Python Table',
        description: 'This Python module allows users to create highly customizable, Excel-like tables in a graphical user interface (GUI) built with Tkinter. With just two steps, users can configure the table by defining properties such as text, background colors, fonts, padding, margins, and grid positions in a simple data.config file. The module can be used independently or integrated into other Tkinter programs.',
        version: 'v1 [deprecated]',
        imageSrc: 'python-table.png',
        imageAlt: 'Python Table',
        rating: 1,
        technologies: ['Python'],
        viewLink: 'https://github.com/kdafov/python-table-component',
        buttonText: 'View on GitHub'
    }
]