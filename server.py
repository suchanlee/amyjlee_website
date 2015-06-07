from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/projects/<int:project_id>/<project_slug>')
def project_detail(project_id, project_slug):
    return render_template('index.html')

if __name__ == '__main__':
    print 'Server running'
    app.debug = True
    app.run()