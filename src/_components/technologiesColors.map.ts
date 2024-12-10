export type TechnologyType = keyof typeof technologiesColors;

export const technologiesColors = {
    // JavaScript Libraries and Frameworks
    React: 'bg-blue-50 text-blue-700 ring-blue-700/10',
    NextJs: 'bg-blue-50 text-blue-700 ring-blue-700/10',
    Vue: 'bg-blue-50 text-blue-700 ring-blue-700/10',
    Angular: 'bg-blue-50 text-blue-700 ring-blue-700/10',
    Svelte: 'bg-blue-50 text-blue-700 ring-blue-700/10',
    JavaScript: 'bg-blue-50 text-blue-700 ring-blue-700/10',
  
    // Enhancements (Type Systems, State Management, CSS Tools)
    TypeScript: 'bg-purple-50 text-purple-700 ring-purple-700/10',
    Redux: 'bg-purple-50 text-purple-700 ring-purple-700/10',
    TailwindCSS: 'bg-purple-50 text-purple-700 ring-purple-700/10',
    StyledComponents: 'bg-purple-50 text-purple-700 ring-purple-700/10',
    MUI: 'bg-purple-50 text-purple-700 ring-purple-700/10',
  
    // Back-End Frameworks and Libraries
    NodeJs: 'bg-green-50 text-green-700 ring-green-600/20',
    Express: 'bg-green-50 text-green-700 ring-green-600/20',
    NestJs: 'bg-green-50 text-green-700 ring-green-600/20',
  
    // Python and Python Frameworks
    Python: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
    Django: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
    Flask: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
    FastAPI: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
    JupyterNotebook: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
  
    // Java and JVM Ecosystem
    Java: 'bg-red-50 text-red-700 ring-red-700/10',
    Spring: 'bg-red-50 text-red-700 ring-red-700/10',
    Kotlin: 'bg-red-50 text-red-700 ring-red-700/10',
    JetpackCompose: 'bg-red-50 text-red-700 ring-red-700/10',
    Scala: 'bg-red-50 text-red-700 ring-red-700/10',
  
    // Databases
    MySQL: 'bg-indigo-50 text-indigo-700 ring-indigo-700/10',
    PostgreSQL: 'bg-indigo-50 text-indigo-700 ring-indigo-700/10',
    MongoDB: 'bg-indigo-50 text-indigo-700 ring-indigo-700/10',
    SQLite: 'bg-indigo-50 text-indigo-700 ring-indigo-700/10',
    Redis: 'bg-indigo-50 text-indigo-700 ring-indigo-700/10',
    Firebase: 'bg-indigo-50 text-indigo-700 ring-indigo-700/10',
  
    // CI/CD Tools and Containerization
    Docker: 'bg-gray-50 text-gray-600 ring-gray-500/10',
    Kubernetes: 'bg-gray-50 text-gray-600 ring-gray-500/10',
    Jenkins: 'bg-gray-50 text-gray-600 ring-gray-500/10',
    GitHubActions: 'bg-gray-50 text-gray-600 ring-gray-500/10',
    CircleCI: 'bg-gray-50 text-gray-600 ring-gray-500/10',
    AzurePipelines: 'bg-gray-50 text-gray-600 ring-gray-500/10',
  
    // Other Programming Languages
    CSharp: 'bg-pink-50 text-pink-700 ring-pink-700/10',
    CPlusPlus: 'bg-pink-50 text-pink-700 ring-pink-700/10',
    Go: 'bg-pink-50 text-pink-700 ring-pink-700/10',
    Rust: 'bg-pink-50 text-pink-700 ring-pink-700/10',
    Ruby: 'bg-pink-50 text-pink-700 ring-pink-700/10',
  
    // Cloud Platforms and DevOps Tools
    AWS: 'bg-orange-50 text-orange-700 ring-orange-700/10',
    GCP: 'bg-orange-50 text-orange-700 ring-orange-700/10',
    Azure: 'bg-orange-50 text-orange-700 ring-orange-700/10',
    Terraform: 'bg-orange-50 text-orange-700 ring-orange-700/10',
    Ansible: 'bg-orange-50 text-orange-700 ring-orange-700/10',
  
    // Testing Tools
    Jest: 'bg-teal-50 text-teal-700 ring-teal-700/10',
    Mocha: 'bg-teal-50 text-teal-700 ring-teal-700/10',
    Cypress: 'bg-teal-50 text-teal-700 ring-teal-700/10',
    Playwright: 'bg-teal-50 text-teal-700 ring-teal-700/10',
  
    // Miscellaneous
    GraphQL: 'bg-cyan-50 text-cyan-700 ring-cyan-700/10',
    REST: 'bg-cyan-50 text-cyan-700 ring-cyan-700/10',
    WebSockets: 'bg-cyan-50 text-cyan-700 ring-cyan-700/10',

    // Business tools
    FBPixel: 'bg-black text-white ring-white-700/10',
    GoogleAds: 'bg-black text-white ring-white-700/10',

    // IoT
    Arduino: 'bg-lime-50 text-lime-700 ring-lime-700/10',
    MQTT: 'bg-lime-50 text-lime-700 ring-lime-700/10',
  } as const;
  