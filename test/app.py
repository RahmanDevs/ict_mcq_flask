from flask import Flask, render_template, request, jsonify
import sqlite3
import os
from datetime import datetime

app = Flask(__name__, template_folder=os.path.join(os.path.dirname(os.path.abspath(__file__)), 'templates'))
DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'scores.db')

def init_db():
    with sqlite3.connect(DB_PATH) as con:
        con.execute('''
            CREATE TABLE IF NOT EXISTS scores (
                id         INTEGER PRIMARY KEY AUTOINCREMENT,
                name       TEXT    NOT NULL,
                score      INTEGER NOT NULL,
                total      INTEGER NOT NULL,
                correct    INTEGER NOT NULL,
                wrong      INTEGER NOT NULL,
                skipped    INTEGER NOT NULL,
                grade      TEXT    NOT NULL,
                time_taken TEXT,
                created_at TEXT    NOT NULL
            )
        ''')
        con.commit()

init_db()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/save-score', methods=['POST'])
def save_score():
    data      = request.get_json()
    name      = data.get('name', '').strip()
    score     = int(data.get('score', 0))
    total     = int(data.get('total', 40))
    correct   = int(data.get('correct', 0))
    wrong     = int(data.get('wrong', 0))
    skipped   = int(data.get('skipped', 0))
    grade     = data.get('grade', '')
    time_taken= data.get('time_taken', '')
    if not name:
        return jsonify({'success': False, 'error': 'নাম প্রয়োজন'}), 400
    created_at = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    with sqlite3.connect(DB_PATH) as con:
        con.execute(
            'INSERT INTO scores (name,score,total,correct,wrong,skipped,grade,time_taken,created_at) VALUES (?,?,?,?,?,?,?,?,?)',
            (name, score, total, correct, wrong, skipped, grade, time_taken, created_at)
        )
        con.commit()
    return jsonify({'success': True})

@app.route('/leaderboard')
def leaderboard():
    with sqlite3.connect(DB_PATH) as con:
        con.row_factory = sqlite3.Row
        rows = con.execute('SELECT * FROM scores ORDER BY score DESC, created_at ASC').fetchall()
    return render_template('leaderboard.html', scores=rows)

@app.route('/api/leaderboard')
def api_leaderboard():
    with sqlite3.connect(DB_PATH) as con:
        con.row_factory = sqlite3.Row
        rows = con.execute('SELECT * FROM scores ORDER BY score DESC, created_at ASC LIMIT 100').fetchall()
    return jsonify([dict(r) for r in rows])

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)