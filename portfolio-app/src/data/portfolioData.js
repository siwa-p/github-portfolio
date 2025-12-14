export const personalInfo = {
  name: "Prahlad Siwakoti",
  location: "Pennsylvania, USA",
  phone: "+1(225)210-0199",
  email: "prasiwakoti@gmail.com",
  resumeUrl: "/pdf/resume_prahlad.pdf",
  linkedinUrl: "https://www.linkedin.com/in/prahlad-siwakoti/",
  githubUrl: "https://github.com/siwa-p",
  googleScholarUrl: "https://scholar.google.com/citations?user=ZUcAvcsAAAAJ&hl=en&oi=ao",
  bio: [
    "I am a data scientist who enjoys finding patterns in the data and solving problems.",
    "I have graduated with a Master's Degree in Data Science at University of Texas at Austin, where I received training in data science fundamentals.",
    "I am currently enrolled in Data Engineering Apprenticeship at Nashville Software School learning the fundamental of data engineering and good coding practices.",
    "I have a PhD in physics from Louisiana State University.",
    "I consider myself a hardworking, and inquisitive person. Details matter to me. I am easy to work with."
  ]
};

export const projects = [
  {
    id: 1,
    title: "International Trade Insights for United States",
    githubUrl: "https://github.com/siwa-p/Trends-in-International-Trades",
    skills: "Data Engineering, API Integration, Python, dbt, Dremio, MinIO, FastAPI, Streamlit, Prefect, Data Visualization",
    description: "This capstone project delivers a comprehensive analytics platform for exploring international trade data related to the United States. The solution integrates multiple data sources—including the U.S. Census Bureau and World Bank WITS APIs—to aggregate, clean, and analyze import/export flows, commodity trends, and the impact of tariff policies.\n\nThe architecture leverages modern data engineering tools: raw data is ingested and stored in a scalable MinIO data lake, transformed into Iceberg tables using Dremio and dbt, and orchestrated with Prefect for automation and reproducibility. The processed data powers a RESTful FastAPI backend and interactive Streamlit dashboards, enabling stakeholders to access reliable insights and flexible analytics.\n\nThis project demonstrates skills in building production-grade data pipelines, and real-time analytics, supporting policymakers, businesses, and researchers with actionable insights.",
    image: "/images/trade_architecture.png"
  },
  {
    id: 2,
    title: "Marvan Think Tank Covid-19 Multinational Data Catalog",
    githubUrl: "https://github.com/siwa-p/marvan_research_data_pipeline",
    additionalLinks: [
      { label: "Exploratory Data Analysis", url: "https://github.com/siwa-p/marvan_project_eda" },
      { label: "API for User Access", url: "https://github.com/siwa-p/marvan_research_covid_api" }
    ],
    skills: "Data Engineering, ELT Pipelines, Python, SQL, API Development, Cloud Storage, Unit Testing, Static Code Analysis",
    description: "This comprehensive group project for the NSS Data Engineering Bootcamp involved building a production-ready multinational Covid-19 open data catalog for Marvan, a strategic think tank. The primary objective was to aggregate and standardize national-level datasets from the United States, United Kingdom, and Canada, focusing on Covid-19, SARS-CoV-2, and Coronavirus data.",
    keyAchievements: [
      "Data Discovery & Schema Design: Surveyed government open data portals and designed a standardized metadata schema for cross-national dataset cataloging.",
      "Orchestrated ELT Pipeline: Built a robust ELT pipeline with Apache Airflow orchestration to automate data ingestion, cleaning, and storage in cloud environments.",
      "Enterprise Data Architecture: Implemented a Snowflake data warehouse using the Medallion architecture (bronze, silver, gold layers) with dbt transformations for data modeling and quality assurance.",
      "Automated Quality Testing: Deployed comprehensive data quality testing and automated checks using dbt and GitHub Actions CI/CD.",
      "Production API Development: Developed a FastAPI-based Python API with Swagger documentation, enabling users to filter and retrieve datasets by country, keyword, and update date.",
      "Code Quality & Testing: Implemented unit testing and static code analysis (Black) with full documentation and results tracking."
    ],
    conclusionText: "This project demonstrates enterprise-level data engineering skills including cloud-based pipeline orchestration, collaborative development practices, and building production-ready, scalable data infrastructure for real-world analytics applications.",
    image: "/images/marvan_data_architecture.png"
  },
  {
    id: 3,
    title: "Air Quality: Machine learning models applied to air quality data",
    githubUrl: "https://github.com/siwa-p/Air-quality-monitoring-and-prediction-using-PurpleAir-data",
    skills: "APIs, Python (PyTorch, scikit-learn, Pandas), Regression, Machine Learning",
    description: "This project explores predictive modeling for air-quality monitoring using low-cost PurpleAir sensors (PM2.5) in the Dallas area (2022–2024) and meteorological data from NOAA. The motivation is to leverage the dense network of affordable sensors, which, despite lower accuracy, provide valuable, accessible data for research and public awareness—especially when corrected using recent EPA schemes.\n\nThe main questions addressed are: Can machine learning models predict air quality using sensor and weather data? Can neural networks further improve predictions?\n\nData was collected via the PurpleAir API and processed alongside NOAA weather data. Exploratory analysis showed noisy, highly variable time series. Statistical tests (ADF) confirmed stationarity, supporting ARIMA modeling. However, ARIMA ignores spatial dependencies, so tree-based regressions (XGBoost) were used for both temporal and spatial features, with an ensemble approach yielding improved accuracy.\n\nTo capture both spatial and temporal patterns, a 3D convolutional neural network was implemented, using kriging interpolation to generate input images from sparse sensor locations. The neural network demonstrated promising results in predicting future air quality patterns.",
    image: "/images/ensemble_predictions.png"
  },
  {
    id: 4,
    title: "NPPES Healthcare Analytics: ETL pipeline for healthcare provider distribution analysis across US counties",
    githubUrl: "https://github.com/siwa-p/NPPES-Project",
    skills: "ETL Pipelines, Python (Polars, Pandas), PostgreSQL, Azure Functions, API Integration, Data Engineering",
    description: "This project builds a comprehensive data engineering solution to analyze healthcare provider distribution across US counties using the National Plan and Provider Enumeration System (NPPES) dataset.\n\nThe main questions addressed are: How are healthcare providers distributed geographically across US counties? Can we efficiently process and analyze 8M+ provider records to enable real-time healthcare analytics?\n\nData processing involved handling a 10GB+ NPPES dataset through a multi-stage ETL pipeline. The solution leverages Polars for high-performance data processing with lazy loading from Parquet files, PostgreSQL for robust data storage with optimized stored procedures, and Azure Functions for cloud automation. Multiple data sources were integrated including ZIP-county crosswalks, FIPS codes, NUCC taxonomy classifications, and US Census population data via API calls.\n\nThe pipeline successfully processed 8M+ healthcare provider records, creating automated county-level aggregations across US counties. A dedicated stakeholder view was implemented to simplify access to provider data enriched with county demographics, enabling easy access without complex joins.",
    image: "/images/NPPES-ARCHITECTURE.png"
  },
  {
    id: 5,
    title: "Wildland Fires and their effects on US National Parks visitation",
    githubUrl: "https://github.com/siwa-p/Wildland-fires-and-their-effects-on-visitation-data-in-US-National-Parks/tree/main",
    skills: "R (Shiny, tidyverse), time-series forecasting, geospatial data visualization",
    description: "Forest fires are a natural process that can benefit ecosystems, but climate change has made wildfires larger and harder to control, causing greater damage to forests and human settlements.\n\nThis Shiny app visualizes wildfire incidents in US national parks. Users can select a park and date range to highlight events on the map and view related data. Two time series plots show visitor data and fire events: the left plot displays overall visitation with fire events marked, while the right plot focuses on a selected event and applies a seasonal ARIMA forecast to visitor data after the incident, including a p-value for the fit.",
    runCommand: 'shiny::runGitHub("National-parks-Midcourse", "siwa-p")'
  },
  {
    id: 6,
    title: "Forecasting time-series data: A python implementation",
    githubUrl: "https://github.com/siwa-p/Time-Series-Forecasting",
    documentUrl: "/pdf/TSForecasting.pdf",
    skills: "Python (PyTorch, LSTM), Time-series forecasting (ARIMA, Regression-based forecasting)",
    description: "This work is a walkthrough for time-series forecasting in Python. Time series data are unique due to their serial dependence, requiring specialized analysis methods and leveraging domain knowledge for effective modeling. The project demonstrates practical steps for handling time series, including data preprocessing, exploratory analysis, feature engineering, and the application of various forecasting models. Emphasis is placed on comparing traditional statistical approaches with machine learning and deep learning techniques to highlight their strengths and limitations in real-world forecasting scenarios.\n\nThe work covers three main forecasting approaches:\n• Time series models (Seasonal ARIMA with exogenous variables)\n• Decision-tree-based regression (XGBoost)\n• Neural network models (LSTM)\n\nEach method is implemented in Python and evaluated using a sample revenue dataset. The project compares model performance and visualizes results with matplotlib and seaborn, demonstrating practical forecasting techniques for time-dependent data."
  },
  {
    id: 7,
    title: "Question-Answering with vector database",
    githubUrl: "https://github.com/siwa-p/Question_Answer_Vector_database/tree/main",
    skills: "Webscraping, chromadb, NLP, HuggingFace",
    description: "This project is an effort to build a simple question-answering model using scraped texts from Wikipedia. This involved scraping Wikipedia articles for each film and extracting the main content, which I then processed and stored in a vector database (ChromaDB). I paired this unstructured text data with a curated set of questions and answers, enabling contextual queries about each movie's details.\n\nTo enable intelligent information retrieval, I used sentence-transformers for semantic search, allowing the system to find relevant context for each question. Leveraging HuggingFace's question-answering pipeline, the model generated automated answers, which I compared against ground-truth responses to evaluate accuracy. This project demonstrates my skills in web scraping, natural language processing, vector search, and the practical evaluation of AI-generated outputs."
  },
  {
    id: 8,
    title: "Using pagination in Python",
    githubUrl: "https://github.com/siwa-p/Using-Pagination-in-Python",
    skills: "Python, APIs, Pagination",
    description: "This project demonstrates how to access and process paginated data from an API using Python, as part of coursework for the Data Engineering Bootcamp at Nashville Software School.\n\nKey steps include authenticating with the API, using query parameters (offset and limit) to retrieve data in batches, and saving the results to a .json file 10 records at a time. The project also covers reformatting and writing the data to a .csv file, ensuring proper formatting for tabular data and handling special characters within values."
  },
  {
    id: 9,
    title: "Janells Car Sales",
    githubUrl: "https://github.com/siwa-p/Jannells-Car-Sales",
    documentUrl: "/pdf/jannels_car_sales.pdf",
    skills: "Data Engineering, Database Schema design, PostgreSQL stored procedures, sqlalchemy, Python, APIs, Pagination, Data Validation",
    description: "This project showcases a complete data engineering pipeline for Jannell's Car Sales. It involved integrating API and CSV data, designing a normalized PostgreSQL database schema, and generating actionable insights for stakeholders.\n\nKey tasks included API integration with pagination, data ingestion using Python and SQLAlchemy, schema design with referential integrity, and data validation using SQL and Python scripts. A consolidated view was created for business reporting, with results exported to CSV and Excel for stakeholders.",
    image: "/images/erd_jannels_car_sales.png"
  }
];
