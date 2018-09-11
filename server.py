from os import environ, urandom
from flask import Flask, redirect, render_template, request, session
from session_cache import SessionCache

SESSION_ID = 'SESSION_ID'
PASSWORD_ENV_VAR = 'AMYJLEE_PASSWORD'
AUTH_REDIRECT_PROJECT_ID = 'AUTH_REDIRECT_PROJECT_ID'
AUTH_REDIRECT_PROJECT_SLUG = 'AUTH_REDIRECT_PROJECT_SLUG'

PASSWORD = environ[PASSWORD_ENV_VAR]

app = Flask(__name__)
session_cache = SessionCache()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/projects')
def projects():
    session_id = session.get(SESSION_ID)
    if session_id is None or not session_cache.has(session_id):
        return redirect('/auth')
    return render_template('projects.html')

@app.route('/projects/<project_id>/<project_slug>')
def project_detail(project_id, project_slug):
    session_id = session.get(SESSION_ID)
    if session_id is None or not session_cache.has(session_id):
        session[AUTH_REDIRECT_PROJECT_ID] = project_id
        session[AUTH_REDIRECT_PROJECT_SLUG] = project_slug
        return redirect('/auth')
    return render_template('projects.html')

@app.route('/auth', methods=['GET', 'POST'])
def auth():
    error = None
    if request.method == 'POST':
        password = request.form.get('password')

        if password is None or password != PASSWORD:
            error = 'Invalid password'
        else:
            session_id = session_cache.add()
            session[SESSION_ID] = session_id
            project_id = session.get(AUTH_REDIRECT_PROJECT_ID)
            project_slug = session.get(AUTH_REDIRECT_PROJECT_SLUG)

            if project_id is None or project_slug is None:
                return redirect('/projects')
            else:
                session[AUTH_REDIRECT_PROJECT_ID] = None
                session[AUTH_REDIRECT_PROJECT_SLUG] = None
                return redirect('/projects/{0}/{1}'.format(project_id, project_slug))

    return render_template('auth.html', error=error)

@app.route('/about')
def about():
    return render_template('index.html')

if __name__ == '__main__':
    print 'Server running'
    app.secret_key = urandom(24)
    app.debug = True
    app.run()
