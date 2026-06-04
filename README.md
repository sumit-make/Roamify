<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Recommendation Engine</title>
</head>
<body>

<h1 align="center">🎬 Movie Recommendation Engine</h1>

<p align="center">
  <strong>An Intelligent Movie Recommendation System Powered by Machine Learning</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.9+-blue?style=for-the-badge&logo=python" />
  <img src="https://img.shields.io/badge/Machine%20Learning-Recommendation%20System-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Dataset-5000%20Movies-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/TMDB-API-blueviolet?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Similarity-Cosine%20Similarity-red?style=for-the-badge" />
</p>

<hr>

<h2>📌 Project Overview</h2>

<p>
The <strong>Movie Recommendation Engine</strong> is a Machine Learning-based web application that recommends the <strong>Top 5 most similar movies</strong> based on the movie selected by the user.
</p>

<p>
Using <strong>Content-Based Filtering</strong> and <strong>Cosine Similarity</strong>, the system analyzes various movie attributes such as genres, keywords, cast, crew, and movie descriptions to find movies with similar characteristics.
</p>

<p>
To enhance the user experience, the application integrates the <strong>TMDB API</strong> to dynamically fetch movie posters and additional movie information.
</p>

<hr>

<h2>✨ Features</h2>

<ul>
    <li>🎥 Recommend Top 5 Similar Movies Instantly</li>
    <li>🧠 Machine Learning-Based Recommendation System</li>
    <li>📊 Uses Cosine Similarity for Accurate Recommendations</li>
    <li>🖼️ Fetches Movie Posters Using TMDB API</li>
    <li>⚡ Fast and Interactive User Interface</li>
    <li>📚 Trained on a Dataset of 5,000 Movies</li>
    <li>🔍 Content-Based Filtering Approach</li>
    <li>📱 Responsive and User-Friendly Design</li>
</ul>

<hr>

<h2>🛠️ Tech Stack</h2>

<table>
    <tr>
        <th>Technology</th>
        <th>Purpose</th>
    </tr>
    <tr>
        <td>Python</td>
        <td>Core Programming Language</td>
    </tr>
    <tr>
        <td>Pandas</td>
        <td>Data Processing & Analysis</td>
    </tr>
    <tr>
        <td>NumPy</td>
        <td>Numerical Computations</td>
    </tr>
    <tr>
        <td>Scikit-Learn</td>
        <td>Cosine Similarity & Vectorization</td>
    </tr>
    <tr>
        <td>TMDB API</td>
        <td>Movie Posters & Details</td>
    </tr>
    <tr>
        <td>Streamlit</td>
        <td>Frontend Web Interface</td>
    </tr>
</table>

<hr>

<h2>📂 Dataset Information</h2>

<ul>
    <li>📌 Source: Kaggle Movie Dataset</li>
    <li>🎬 Total Movies: 5,000+</li>
    <li>📈 Data Includes:
        <ul>
            <li>Movie Titles</li>
            <li>Genres</li>
            <li>Keywords</li>
            <li>Cast Members</li>
            <li>Directors</li>
            <li>Movie Overview</li>
        </ul>
    </li>
</ul>

<hr>

<h2>⚙️ How It Works</h2>

<h3>1️⃣ Data Preprocessing</h3>

<ul>
    <li>Cleaned and merged movie datasets.</li>
    <li>Handled missing values.</li>
    <li>Combined important movie features into a single text column.</li>
</ul>

<h3>2️⃣ Feature Engineering</h3>

<ul>
    <li>Extracted relevant movie attributes.</li>
    <li>Created a "tags" feature representing each movie.</li>
</ul>

<h3>3️⃣ Vectorization</h3>

<ul>
    <li>Converted textual data into numerical vectors using Count Vectorizer.</li>
</ul>

<h3>4️⃣ Similarity Calculation</h3>

<ul>
    <li>Applied <strong>Cosine Similarity</strong> to calculate similarity scores between movies.</li>
</ul>

<h3>5️⃣ Recommendation Generation</h3>

<ul>
    <li>When a user selects a movie, the system finds the most similar movies and recommends the top 5 matches.</li>
</ul>

<hr>

<h2>🧮 Recommendation Formula</h2>

<p>Cosine Similarity measures the angle between two movie vectors:</p>

<pre>
Cosine Similarity(A,B) =

        A · B
----------------------
||A|| × ||B||
</pre>

<p>
A higher cosine similarity score indicates that two movies share more similar characteristics.
</p>

<hr>

<h2>🖼️ Application Workflow</h2>

<pre>
User Selects Movie
        ↓
Movie Features Extracted
        ↓
Vector Representation
        ↓
Cosine Similarity Calculation
        ↓
Top 5 Similar Movies Identified
        ↓
TMDB API Fetches Posters
        ↓
Recommendations Displayed
</pre>

<hr>

<h2>🚀 Installation & Setup</h2>

<h3>Clone Repository</h3>

<pre>
git clone https://github.com/your-username/movie-recommendation-engine.git

cd movie-recommendation-engine
</pre>

<h3>Install Dependencies</h3>

<pre>
pip install -r requirements.txt
</pre>

<h3>Run Application</h3>

<pre>
streamlit run app.py
</pre>

<hr>

<h2>📸 Screenshots</h2>

<p align="center">
Add your project screenshots here.
</p>

<pre>
screenshots/
│
├── home.png
├── recommendations.png
└── movie-posters.png
</pre>

<hr>

<h2>🎯 Learning Outcomes</h2>

<ul>
    <li>Understanding Recommendation Systems</li>
    <li>Content-Based Filtering Techniques</li>
    <li>Feature Engineering for ML Applications</li>
    <li>Vectorization of Text Data</li>
    <li>Cosine Similarity Implementation</li>
    <li>Working with Real-World APIs</li>
    <li>Deploying ML Projects</li>
</ul>

<hr>

<h2>🔮 Future Improvements</h2>

<ul>
    <li>⭐ Hybrid Recommendation System</li>
    <li>⭐ User-Based Collaborative Filtering</li>
    <li>⭐ Deep Learning Recommendations</li>
    <li>⭐ Personalized User Profiles</li>
    <li>⭐ Watchlist Feature</li>
    <li>⭐ Movie Ratings & Reviews Integration</li>
</ul>

<hr>

<h2>🏆 Project Highlights</h2>

<ul>
    <li>📊 Trained on 5,000+ Movies Dataset</li>
    <li>⚡ Real-Time Recommendations</li>
    <li>🎯 Top 5 Similar Movie Suggestions</li>
    <li>🧠 Machine Learning Powered</li>
    <li>🎬 Integrated TMDB API</li>
    <li>🚀 Practical Industry-Level Recommendation Logic</li>
</ul>

<hr>

<h2>👨‍💻 Author</h2>

<p>
<strong>Sumit Kumar</strong><br>
B.Tech, National Institute of Technology Kurukshetra<br>
Machine Learning | Web Development | Open Source Enthusiast
</p>

<hr>

<p align="center">
⭐ If you like this project, don't forget to give it a Star on GitHub! ⭐
</p>

</body>
</html>
