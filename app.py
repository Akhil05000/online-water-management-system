from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Dummy data for demonstration
usage_data = [
    {"date": "2024-06-20", "usage": 150},
    {"date": "2024-06-21", "usage": 200},
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/usage')
def usage():
    return render_template('usage.html', data=usage_data)

@app.route('/reports')
def reports():
    return render_template('reports.html')

@app.route('/admin')
def admin():
    return render_template('admin.html')

@app.route('/api/usage')
def api_usage():
    return jsonify(usage_data)

if __name__ == '__main__':
    app.run(debug=True)
