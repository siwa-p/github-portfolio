# Portfolio
---

## Projects

### <ins>Air Quality</ins>: *"Machine learning models applied to air quality data"* <br>

[![View on GitHub](https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub)](https://github.com/siwa-p/Air-quality-monitoring-and-prediction-using-PurpleAir-data)

_Key Skills: APIs, Python (PyTorch, scikit-learn, Pandas), Regression, Machine Learning_
<div style="text-align: justify">
This project explores predictive modeling for air-quality monitoring using low-cost PurpleAir sensors (PM2.5) in the Dallas area (2022–2024) and meteorological data from [NOAA](https://www.noaa.gov). The motivation is to leverage the dense network of affordable sensors, which, despite lower accuracy, provide valuable, accessible data for research and public awareness—especially when corrected using recent EPA schemes.

The main questions addressed are: Can machine learning models predict air quality using sensor and weather data? Can neural networks further improve predictions?

Data was collected via the [PurpleAir API](https://api.purpleair.com/) and processed alongside NOAA weather data. Exploratory analysis showed noisy, highly variable time series. Statistical tests (ADF) confirmed stationarity, supporting ARIMA modeling. However, ARIMA ignores spatial dependencies, so tree-based regressions (XGBoost) were used for both temporal and spatial features, with an ensemble approach yielding improved accuracy.

To capture both spatial and temporal patterns, a 3D convolutional neural network was implemented, using kriging interpolation to generate input images from sparse sensor locations. The neural network demonstrated promising results in predicting future air quality patterns.

</div>
<br>
<center><img src="images/ensemble_predictions.png"/></center>
<br>

---

### Wildland Fires and their effects on US National Parks visitation

[![View on GitHub](https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub)](https://github.com/siwa-p/Wildland-fires-and-their-effects-on-visitation-data-in-US-National-Parks/tree/main)

_Key Skills: R (Shiny, tidyverse), time-series forecasting, geospatial data visualization_

<div style="text-align: justify">
<b>Motivation</b><br>
Forest fires are a natural process that can benefit ecosystems, but climate change has made wildfires larger and harder to control, causing greater damage to forests and human settlements.

<b>About the app</b><br>
This Shiny app visualizes wildfire incidents in US national parks. Users can select a park and date range to highlight events on the map and view related data. Two time series plots show visitor data and fire events: the left plot displays overall visitation with fire events marked, while the right plot focuses on a selected event and applies a seasonal ARIMA forecast to visitor data after the incident, including a p-value for the fit.

To run the app, use the following R command:
```r
shiny::runGitHub("National-parks-Midcourse", "siwa-p")
```

</div>
---

### Forecasting time-series data: A python implementation

[![View on GitHub](https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub)](https://github.com/siwa-p/Time-Series-Forecasting)
_Key Skills: Python (PyTorch, LSTM), Time-series forecasting (ARIMA, Regression-based forecasting)_
<div style="text-align: justify">

This work is a walkthrough for time-series forecasting in Python. Time series data are unique due to their serial dependence, requiring specialized analysis methods and leveraging domain knowledge for effective modeling. The project demonstrates practical steps for handling time series, including data preprocessing, exploratory analysis, feature engineering, and the application of various forecasting models. Emphasis is placed on comparing traditional statistical approaches with machine learning and deep learning techniques to highlight their strengths and limitations in real-world forecasting scenarios.

The work covers three main forecasting approaches:  
• Time series models (Seasonal ARIMA with exogenous variables)  
• Decision-tree-based regression (XGBoost)  
• Neural network models (LSTM)

Each method is implemented in Python and evaluated using a sample revenue dataset. The project compares model performance and visualizes results with matplotlib and seaborn, demonstrating practical forecasting techniques for time-dependent data.
</div>

---

### Question-Answering with vector database

[![View on GitHub](https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub)](https://github.com/siwa-p/Question_Answer_Vector_database/tree/main)

_Key Skills: Webscraping, chromadb, NLP, HuggingFace_

<div style="text-align: justify">
I developed a question-answering system centered on Oscar Best Picture winners since 2000. This involved scraping Wikipedia articles for each film and extracting the main content, which I then processed and stored in a vector database (ChromaDB). I paired this unstructured text data with a curated set of questions and answers, enabling contextual queries about each movie’s details.

To enable intelligent information retrieval, I used sentence-transformers for semantic search, allowing the system to find relevant context for each question. Leveraging HuggingFace’s question-answering pipeline, the model generated automated answers, which I compared against ground-truth responses to evaluate accuracy. This project demonstrates my skills in web scraping, natural language processing, vector search, and the practical evaluation of AI-generated outputs.
</div>

---

### Using pagination in Python

[![View on GitHub](https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub)](https://github.com/siwa-p/Using-Pagination-in-Python)

_Key Skills: Python, APIs, Pagination_

<div style="text-align: justify">
This project demonstrates how to access and process paginated data from an API using Python, as part of coursework for the Data Engineering Bootcamp at Nashville Software School.

Key steps include authenticating with the API, using query parameters (`offset` and `limit`) to retrieve data in batches, and saving the results to a `.json` file 10 records at a time. The project also covers reformatting and writing the data to a `.csv` file, ensuring proper formatting for tabular data and handling special characters within values.

</div>