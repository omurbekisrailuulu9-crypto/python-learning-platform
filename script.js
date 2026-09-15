// ===== ГЛОБАЛДЫК ПЕРЕМЕННЫЛЕР =====
let completedLevels = [];
let userScores = {};
let totalTimeSpent = 0;
let currentLevel = null;

// Саруу өндөөндө локалдык сактоо
function saveProgress() {
    localStorage.setItem('completedLevels', JSON.stringify(completedLevels));
    localStorage.setItem('userScores', JSON.stringify(userScores));
    localStorage.setItem('totalTimeSpent', totalTimeSpent);
}

function loadProgress() {
    const saved = localStorage.getItem('completedLevels');
    if (saved) {
        completedLevels = JSON.parse(saved);
    }
    const scores = localStorage.getItem('userScores');
    if (scores) {
        userScores = JSON.parse(scores);
    }
    const time = localStorage.getItem('totalTimeSpent');
    if (time) {
        totalTimeSpent = parseInt(time);
    }
}

// ===== ДЕҢГЭЭЛДЕРДИН МАТЕРИАЛДАРЫ =====
const levelContent = {
    1: {
        title: "1️⃣ БИЛҮҮ (Remember)",
        subtitle: "Негизги терминдер жана синтаксисти эстеп калуу",
        duration: "10 минута",
        content: `
            <div class="theory-section">
                <h4>Теориялык материал</h4>
                <p><strong>Python</strong> — интерпретацияланган, жогорку деңгээлдеги программалоо тили</p>
                <p><strong>Өзгөрмө (variable)</strong> — маалыматты сактоо үчүн аталышы бар "кутуча"</p>
                <p><strong>Функция (function)</strong> — белгилүү бир иш-аракетти аткарган код блогу</p>
                <p><strong>print()</strong> — экранга маалымат чыгаруу функциясы</p>
                <p><strong>input()</strong> — колдонуучудан маалымат алуу функциясы</p>
            </div>

            <div class="theory-section">
                <h4>Типде�� (Types)</h4>
                <ul style="margin-left: 20px;">
                    <li><code>int</code> — бүтүн сан (мис: 5, -10, 0)</li>
                    <li><code>float</code> — ондук сан (мис: 3.14, -0.5)</li>
                    <li><code>str</code> — текст (мис: "Салам", 'Дүйнө')</li>
                    <li><code>bool</code> — логикалык (True же False)</li>
                </ul>
            </div>

            <div class="test-container">
                <h3>✅ Өзүн-өзү Тестирлеш</h3>
                <div class="question">
                    <h4>1. Python кайсы деңгээлдеги тил?</h4>
                    <div class="question-options">
                        <label class="option-label">
                            <input type="radio" name="q1" value="a"> <span>Төмөнкү деңгээл (Low-level)</span>
                        </label>
                        <label class="option-label">
                            <input type="radio" name="q1" value="b"> <span>Жогорку деңгээл (High-level)</span>
                        </label>
                        <label class="option-label">
                            <input type="radio" name="q1" value="c"> <span>Машина тили</span>
                        </label>
                    </div>
                </div>

                <div class="question">
                    <h4>2. Төмөнкүдөн кайсынысы өзгөрмө түрү?</h4>
                    <div class="question-options">
                        <label class="option-label">
                            <input type="radio" name="q2" value="a"> <span>print</span>
                        </label>
                        <label class="option-label">
                            <input type="radio" name="q2" value="b"> <span>int</span>
                        </label>
                        <label class="option-label">
                            <input type="radio" name="q2" value="c"> <span>function</span>
                        </label>
                    </div>
                </div>

                <div class="question">
                    <h4>3. Кайсы функция экранга маалымат чыгарат?</h4>
                    <div class="question-options">
                        <label class="option-label">
                            <input type="radio" name="q3" value="a"> <span>input()</span>
                        </label>
                        <label class="option-label">
                            <input type="radio" name="q3" value="b"> <span>print()</span>
                        </label>
                        <label class="option-label">
                            <input type="radio" name="q3" value="c"> <span>len()</span>
                        </label>
                    </div>
                </div>

                <button class="btn btn-success" onclick="submitTest(1)">Тестти өтүңүз</button>
            </div>
        `
    },

    2: {
        title: "2️⃣ ТҮШҮНҮҮ (Understand)",
        subtitle: "Кодду окуп, эмне болорун болжолдоо",
        duration: "15 минута",
        content: `
            <div class="theory-section">
                <h4>Мисал 1: Жөнөкөй код</h4>
                <div class="code-block">print("Кыргызстан")
print(2026)
print(5 + 3)</div>
                <p><strong>Суроо:</strong> Ар бир сап эмне чыгарат?</p>
                <p><strong>Жооп:</strong> Биринчи - "Кыргызстан", Экинчи - 2026, Үчүнчү - 8</p>
            </div>

            <div class="theory-section">
                <h4>Мисал 2: Өзгөрмөлөр</h4>
                <div class="code-block">ысым = "Айгерим"
жаш = 15
print("Салам,", ысым)
print("Сиз", жаш, "жаштасыз.")</div>
                <p><strong>Суроо:</strong> Өзгөрмөлөргө эмне сакталды?</p>
                <p><strong>Жооп:</strong> ысым өзгөрмөсүнө "Айгерим" сакталды, жаш өзгөрмөсүнө 15 сакталды</p>
            </div>

            <div class="test-container">
                <h3>✅ Кодду окуу练习</h3>
                <div class="question">
                    <h4>Төмөнкү код эмне чыгарат?</h4>
                    <div class="code-block">сан = 10
жыйынтык = сан * 2
print(жыйынтык)</div>
                    <div class="question-options">
                        <label class="option-label">
                            <input type="radio" name="q1" value="a"> <span>10</span>
                        </label>
                        <label class="option-label">
                            <input type="radio" name="q1" value="b"> <span>20</span>
                        </label>
                        <label class="option-label">
                            <input type="radio" name="q1" value="c"> <span>сан</span>
                        </label>
                    </div>
                </div>

                <div class="question">
                    <h4>Ката табуу: Төмөнкүнүн проблемасы эмне?</h4>
                    <div class="code-block">жаш = "25"
жыйынтык = жаш + 5
print(жыйынтык)</div>
                    <div class="question-options">
                        <label class="option-label">
                            <input type="radio" name="q2" value="a"> <span>Синтаксис ката</span>
                        </label>
                        <label class="option-label">
                            <input type="radio" name="q2" value="b"> <span>str + int болбойт (TypeError)</span>
                        </label>
                        <label class="option-label">
                            <input type="radio" name="q2" value="c"> <span>Ката жок</span>
                        </label>
                    </div>
                </div>

                <button class="btn btn-success" onclick="submitTest(2)">Тестти өтүңүз</button>
            </div>
        `
    },

    3: {
        title: "3️⃣ КОЛДОНУУ (Apply)",
        subtitle: "Үйрөнгөн билимди колдонуу",
        duration: "20 минута",
        content: `
            <div class="theory-section">
                <h4>Практикалык Тапшырма 1: Жеке маалымат картасы</h4>
                <p>Колдонуучунун атын, шаарын жана сүйүктүү оюнун сурап, кооз форматта чыгарган программа жазыңыз.</p>
                <div class="code-block">ат = input("Атыңыз: ")
шаар = input("Кайсы шаарда жашайсыз: ")
оюн = input("Сүйүктүү оюнуңуз: ")
print(f"=== {ат} жөнүндө маалымат ===")
print(f"Шаар: {шаар}")
print(f"Сүйүктүү оюну: {оюн}")</div>
            </div>

            <div class="theory-section">
                <h4>Практикалык Тапшырма 2: Жөнөкөй калькулятор</h4>
                <div class="code-block">сан1 = int(input("Биринчи санды жазыңыз: "))
сан2 = int(input("Экинчи санды жазыңыз: "))
print("Суммасы:", сан1 + сан2)
print("Айырмасы:", сан1 - сан2)
print("Көбөйтүндүсү:", сан1 * сан2)</div>
            </div>

            <div class="theory-section">
                <h4>Практикалык Тапшырма 3: Аймакты эсептөө</h4>
                <div class="code-block">узундук = float(input("Узундук: "))
туурасы = float(input("Туурасы: "))
аянт = узундук * туурасы
print(f"Аянты: {аянт} кв.м")</div>
            </div>

            <div class="code-editor-container">
                <div class="editor-panel">
                    <div class="editor-header">
                        <span>📝 Код Редактору</span>
                        <span id="charCount">0 символ</span>
                    </div>
                    <textarea class="code-input" id="codeEditor" placeholder="Python кодуңузду бул жерге жазыңыз..."></textarea>
                </div>
                <div class="output-panel">
                    <div class="output-header">
                        📤 Натыйжа
                    </div>
                    <div class="output-content" id="outputArea">Натыйжа бул жерде көрүнөт...</div>
                    <div style="padding: 1rem; display: flex; gap: 0.5rem;">
                        <button class="btn-run" onclick="runCode()">▶ Run</button>
                        <button class="btn-clear" onclick="clearCode()">🗑 Тазалоо</button>
                    </div>
                </div>
            </div>

            <button class="btn btn-success" style="width: 100%; margin-top: 1rem;" onclick="submitPractice(3)">Тапшырманы өтүңүз</button>
        `
    },

    4: {
        title: "4️⃣ ТАЛДОО (Analyze)",
        subtitle: "Кодту бөлүктөргө ажыратып, ката табуу",
        duration: "20 минута",
        content: `
            <div class="theory-section">
                <h4>Ката табуу Тапшырмасы 1</h4>
                <div class="code-block">жаш = input("Жашыңыз канча? ")
жаш_кийин = жаш + 5
print("5 жылдан кийин жашыңыз:", жаш_кийин)</div>
                <p><strong>❌ Ката:</strong> TypeError: can only concatenate str (not "int") to str</p>
                <p><strong>✅ Себеби:</strong> input() функциясы string (текст) кайтарат, бирок сан сыяктуу иштетүү керек</p>
                <p><strong>✅ Чечими:</strong></p>
                <div class="code-block">жаш = int(input("Жашыңыз канча? "))
жаш_кийин = жаш + 5
print("5 жылдан кийин жашыңыз:", жаш_кийин)</div>
            </div>

            <div class="theory-section">
                <h4>Ката табуу Тапшырмасы 2</h4>
                <div class="code-block">def эсепте(а, б):
    натыйжа = а + б
print(эсепте(3, 4))</div>
                <p><strong>❌ Ката:</strong> None чыгат, сандар чыгпайт</p>
                <p><strong>✅ Себеби:</strong> Функция return билдирүүсүндөй, натыйжаны кайтарбайт</p>
                <p><strong>✅ Чечими:</strong></p>
                <div class="code-block">def эсепте(а, б):
    натыйжа = а + б
    return натыйжа
print(эсепте(3, 4))</div>
            </div>

            <div class="test-container">
                <h3>✅ Анализ тестилери</h3>
                <div class="question">
                    <h4>Төмөнкү коддун проблемасы кайда?</h4>
                    <div class="code-block">ысым = input("Атыңыз: ")
узундук = len(ысым)
print(ысым + узундук)</div>
                    <div class="question-options">
                        <label class="option-label">
                            <input type="radio" name="q1" value="a"> <span>input() функциясында</span>
                        </label>
                        <label class="option-label">
                            <input type="radio" name="q1" value="b"> <span>len() функциясында</span>
                        </label>
                        <label class="option-label">
                            <input type="radio" name="q1" value="c"> <span>print() функциясында (str + int)</span>
                        </label>
                    </div>
                </div>

                <button class="btn btn-success" onclick="submitTest(4)">Тестти өтүңүз</button>
            </div>
        `
    },

    5: {
        title: "5️⃣ БААЛОО (Evaluate)",
        subtitle: "Кодду баалоо жана сунуштамалар",
        duration: "15 минута",
        content: `
            <div class="theory-section">
                <h4>Код-ревью критерийлери</h4>
                <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                    <tr style="background: #f0f5ff;">
                        <th style="border: 1px solid #ddd; padding: 0.8rem;">Критерий</th>
                        <th style="border: 1px solid #ddd; padding: 0.8rem;">Жакшы код</th>
                        <th style="border: 1px solid #ddd; padding: 0.8rem;">Жаман код</th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 0.8rem;">Түшүнүктүүлүк</td>
                        <td style="border: 1px solid #ddd; padding: 0.8rem;">Өзгөрмөлөр кыргызча</td>
                        <td style="border: 1px solid #ddd; padding: 0.8rem;">var1, var2, x, y</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 0.8rem;">Ката коркунучу</td>
                        <td style="border: 1px solid #ddd; padding: 0.8rem;">Туура тип өзгөртүү</td>
                        <td style="border: 1px solid #ddd; padding: 0.8rem;">int() жок</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 0.8rem;">Комментарийлер</td>
                        <td style="border: 1px solid #ddd; padding: 0.8rem;">Комментарийлер бар</td>
                        <td style="border: 1px solid #ddd; padding: 0.8rem;">Эч нерсе жокту</td>
                    </tr>
                </table>
            </div>

            <div class="test-container">
                <h3>✅ Баалоо сынагы</h3>
                <div class="question">
                    <h4>Төмөнкүлөрдүн кайсынысы жалпысынан жакшы?</h4>
                    <p><strong>Вариант А:</strong></p>
                    <div class="code-block">x=input("x: ")
y=int(x)
print(y*2)</div>
                    <p><strong>Вариант Б:</strong></p>
                    <div class="code-block"># Санды кираалоо
сан = int(input("Санды жазыңыз: "))
жыйынтык = сан * 2
print(f"Натыйжа: {жыйынтык}")</div>
                    <div class="question-options">
                        <label class="option-label">
                            <input type="radio" name="q1" value="a"> <span>Вариант А</span>
                        </label>
                        <label class="option-label">
                            <input type="radio" name="q1" value="b"> <span>Вариант Б</span>
                        </label>
                    </div>
                </div>

                <button class="btn btn-success" onclick="submitTest(5)">Тестти өтүңүз</button>
            </div>
        `
    },

    6: {
        title: "6️⃣ ЖАРАТУУ (Create)",
        subtitle: "Өзүнчө долбоор жаратуу",
        duration: "30-45 минута",
        content: `
            <div class="theory-section">
                <h4>Долбоор: "Менин биринчи программам"</h4>
                <p>Төмөнкүлөрдүн бирин тандап, толук программа жазыңыз:</p>
            </div>

            <div class="theory-section">
                <h4>🎯 Вариант А: Жеке тааныштыруу боту</h4>
                <div class="code-block"># Талаптар:
# - Колдонуучунун атын, жашын, жактырган нерсесин сурайт
# - Жаш боюнча шарттуу билдирүү берет
# - Кооз форматта корутунду чыгарат

ат = input("Атыңыз: ")
жаш = int(input("Жашыңыз: "))
жактырган = input("Сүйүктүү нерсеңиз: ")
print(f"=== {ат} жөнүндө ===")
print(f"Жаш: {жаш}")
print(f"Жактырган нерсе: {жактырган}")</div>
            </div>

            <div class="theory-section">
                <h4>🎯 Вариант Б: Мини-калькулятор</h4>
                <div class="code-block"># Талаптар:
# - 2 сан сурайт
# - Операция сурайт (+, -, *, /)
# - Натыйжаны чыгарат

сан1 = float(input("Биринчи сан: "))
сан2 = float(input("Экинчи сан: "))
операция = input("Операция (+, -, *, /): ")

if операция == "+":
    print(f"Натыйжа: {сан1 + сан2}")
elif операция == "-":
    print(f"Натыйжа: {сан1 - сан2}")</div>
            </div>

            <div class="theory-section">
                <h4>🎯 Вариант В: Викторина программасы</h4>
                <div class="code-block"># Талаптар:
# - Кеминде 3 суроо берет
# - Ар бир жоопту текшерет
# - Аягында балл чыгарат

туура = 0
жообу = input("1-суроо: Python кайсы жылы түзүлдү? ")
if жообу == "1991":
    туура += 1

print(f"Сиз {туура}/3 туура жооп бердиңиз")</div>
            </div>

            <div class="code-editor-container">
                <div class="editor-panel">
                    <div class="editor-header">
                        <span>📝 Жеке Долбоор</span>
                    </div>
                    <textarea class="code-input" id="projectCode" placeholder="Бул жерге жеке программаңызды жазыңыз..."></textarea>
                </div>
                <div class="output-panel">
                    <div class="output-header">
                        📤 Натыйжа
                    </div>
                    <div class="output-content" id="projectOutput">Натыйжа бул жерде көрүнөт...</div>
                    <div style="padding: 1rem; display: flex; gap: 0.5rem;">
                        <button class="btn-run" onclick="runProjectCode()">▶ Run</button>
                        <button class="btn-clear" onclick="clearProjectCode()">🗑 Тазалоо</button>
                    </div>
                </div>
            </div>

            <div class="theory-section" style="margin-top: 2rem;">
                <h4>📋 Баалоо Рубрикасы</h4>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background: #f0f5ff;">
                        <th style="border: 1px solid #ddd; padding: 0.8rem;">Критерий</th>
                        <th style="border: 1px solid #ddd; padding: 0.8rem;">Балл</th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 0.8rem;">Код иштейт (катасыз)</td>
                        <td style="border: 1px solid #ddd; padding: 0.8rem; text-align: center;">40%</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 0.8rem;">Талаптардын баары аткарылган</td>
                        <td style="border: 1px solid #ddd; padding: 0.8rem; text-align: center;">30%</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 0.8rem;">Түшүнүктүү, өзгөрмөлөрү кыргызча</td>
                        <td style="border: 1px solid #ddd; padding: 0.8rem; text-align: center;">20%</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 0.8rem;">Презентация/түшүндүрмө</td>
                        <td style="border: 1px solid #ddd; padding: 0.8rem; text-align: center;">10%</td>
                    </tr>
                </table>
            </div>

            <button class="btn btn-success" style="width: 100%; margin-top: 1rem;" onclick="submitProject()">✅ Долбоорду тапшыруу</button>
        `
    }
};

// ===== МОДАЛДЫК ОКНО ФУНКЦИЯЛАРЫ =====
function openLevel(levelNum) {
    currentLevel = levelNum;
    const modal = document.getElementById('levelModal');
    const levelData = levelContent[levelNum];
    
    let content = `
        <h2>${levelData.title}</h2>
        <p style="color: #666; font-size: 1.1rem; margin-bottom: 1rem;">${levelData.subtitle}</p>
        <p style="color: #999; margin-bottom: 2rem;"><i class="fas fa-clock"></i> ${levelData.duration}</p>
        ${levelData.content}
    `;
    
    document.getElementById('levelContent').innerHTML = content;
    modal.style.display = 'block';
    
    // Экранда иштетүү функциясы жуңгөдөй ишке салу
    if (levelNum === 3) {
        document.getElementById('codeEditor').addEventListener('input', function() {
            document.getElementById('charCount').textContent = this.value.length + ' символ';
        });
    }
}

function closeModal() {
    document.getElementById('levelModal').style.display = 'none';
}

// ===== КОД ИШТЕТУ ФУНКЦИЯЛАРЫ =====
function runCode() {
    const code = document.getElementById('codeEditor').value;
    const output = document.getElementById('outputArea');
    
    if (!code.trim()) {
        output.textContent = 'Эч нерсе жок. Код жазыңыз!';
        output.className = 'error';
        return;
    }
    
    try {
        // Python кодун жөнөктүүлөштүрүп иштету (демо режими)
        output.textContent = 'Код иштетилүүдө...\n\n';
        
        // Демонстрация үчүн жөнөкөй имитация
        if (code.includes('print')) {
            let lines = code.split('\n');
            let result = '';
            
            lines.forEach(line => {
                if (line.includes('print')) {
                    let printContent = line.match(/print\((.*)\)/);
                    if (printContent) {
                        result += '> ' + printContent[1] + '\n';
                    }
                }
            });
            
            output.textContent = result || 'Натыйжа жокту. Кодуңузду текшериңиз.';
            output.className = 'success';
        }
    } catch (error) {
        output.textContent = 'КАТА: ' + error.message;
        output.className = 'error';
    }
}

function clearCode() {
    document.getElementById('codeEditor').value = '';
    document.getElementById('outputArea').textContent = 'Натыйжа бул жерде көрүнөт...';
    document.getElementById('outputArea').className = '';
    document.getElementById('charCount').textContent = '0 символ';
}

function runProjectCode() {
    const code = document.getElementById('projectCode').value;
    const output = document.getElementById('projectOutput');
    
    if (!code.trim()) {
        output.textContent = 'Эч нерсе жок. Код жазыңыз!';
        output.className = 'error';
        return;
    }
    
    try {
        output.textContent = 'Код иштетилүүдө...\n\n';
        
        if (code.includes('print')) {
            let lines = code.split('\n');
            let result = '';
            
            lines.forEach(line => {
                if (line.includes('print')) {
                    let printContent = line.match(/print\((.*)\)/);
                    if (printContent) {
                        result += '> ' + printContent[1] + '\n';
                    }
                }
            });
            
            output.textContent = result || 'Натыйжа жокту. Кодуңузду текшериңиз.';
            output.className = 'success';
        }
    } catch (error) {
        output.textContent = 'КАТА: ' + error.message;
        output.className = 'error';
    }
}

function clearProjectCode() {
    document.getElementById('projectCode').value = '';
    document.getElementById('projectOutput').textContent = 'Натыйжа бул жерде көрүнөт...';
    document.getElementById('projectOutput').className = '';
}

// ===== ТЕСТ ФУНКЦИЯЛАРЫ =====
function submitTest(levelNum) {
    let score = 0;
    let totalQuestions = 0;
    const answers = {
        1: { q1: 'b', q2: 'b', q3: 'b' },
        2: { q1: 'b', q2: 'b' },
        4: { q1: 'c' },
        5: { q1: 'b' }
    };
    
    if (answers[levelNum]) {
        for (let question in answers[levelNum]) {
            const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
            if (selectedOption && selectedOption.value === answers[levelNum][question]) {
                score++;
            }
            totalQuestions++;
        }
    }
    
    const percentage = (score / totalQuestions) * 100;
    const points = Math.round(percentage);
    
    userScores[levelNum] = points;
    
    if (!completedLevels.includes(levelNum)) {
        completedLevels.push(levelNum);
    }
    
    saveProgress();
    updateDashboard();
    
    alert(`✅ Тесттеңиз өтүлдү!\n\nТуура жооптор: ${score}/${totalQuestions}\nБалл: ${points}/100`);
}

function submitPractice(levelNum) {
    const code = document.getElementById('codeEditor').value;
    
    if (!code.trim()) {
        alert('❌ Код жазыңыз!');
        return;
    }
    
    if (!completedLevels.includes(levelNum)) {
        completedLevels.push(levelNum);
    }
    
    userScores[levelNum] = 100;
    saveProgress();
    updateDashboard();
    
    alert(`✅ Практикалык тапшырма өтүлдү!\n\nБалл: 100/100`);
}

function submitProject() {
    const code = document.getElementById('projectCode').value;
    
    if (!code.trim()) {
        alert('❌ Долбоор код жазыңыз!');
        return;
    }
    
    if (!completedLevels.includes(6)) {
        completedLevels.push(6);
    }
    
    userScores[6] = 100;
    saveProgress();
    updateDashboard();
    
    alert(`🎉 Долбоор өтүлдү!\n\nБалл: 100/100\n\nBirine'! Сабакты аяктадыңыз!`);
}

// ===== ПРОГРЕСС ТАБЛО =====
function updateDashboard() {
    const progressPercent = (completedLevels.length / 6) * 100;
    document.getElementById('progressFill').style.width = progressPercent + '%';
    document.getElementById('progressText').textContent = `${completedLevels.length}/6 деңгээл аякталды`;
    
    const totalScore = Object.values(userScores).reduce((a, b) => a + b, 0);
    document.getElementById('totalScore').textContent = totalScore;
    
    const passedTests = Object.keys(userScores).length;
    document.getElementById('testsPassed').textContent = passedTests;
    
    totalTimeSpent += 1;
    document.getElementById('timeSpent').textContent = totalTimeSpent;
}

// ===== НАВИГАЦИЯ =====
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
window.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    updateDashboard();
    
    // Модалдык окноду жабуу
    window.onclick = function(event) {
        const modal = document.getElementById('levelModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});

// ===== САЛЫШТЫРУУ ТАБЛИЦАСЫ =====
function showComparisonTable() {
    const table = `
        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
            <tr style="background: #f0f5ff;">
                <th style="border: 1px solid #ddd; padding: 0.8rem;">Критерий</th>
                <th style="border: 1px solid #ddd; padding: 0.8rem;">Код А</th>
                <th style="border: 1px solid #ddd; padding: 0.8rem;">Код Б</th>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 0.8rem;">Сап саны</td>
                <td style="border: 1px solid #ddd; padding: 0.8rem;">3 саап</td>
                <td style="border: 1px solid #ddd; padding: 0.8rem;">5 сап</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 0.8rem;">Түшүнүктүүлүк</td>
                <td style="border: 1px solid #ddd; padding: 0.8rem;">Орточо</td>
                <td style="border: 1px solid #ddd; padding: 0.8rem;">Жакшы</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 0.8rem;">Ката коркунучу</td>
                <td style="border: 1px solid #ddd; padding: 0.8rem;">Жогору</td>
                <td style="border: 1px solid #ddd; padding: 0.8rem;">Төмөн</td>
            </tr>
        </table>
    `;
    return table;
}
