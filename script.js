'use strict';

const questionBank = {

    os: {
        label: 'Operating Systems',
        questions: [
            {
                q: 'Which CPU scheduling algorithm gives the minimum average waiting time for a given set of processes?',
                opts: ['FCFS', 'Shortest Job First (SJF)', 'Round Robin', 'Priority Scheduling'],
                a: 1
            },
            {
                q: 'Which page replacement algorithm can suffer from Bélády\'s Anomaly?',
                opts: ['LRU', 'Optimal', 'FIFO', 'LFU'],
                a: 2
            },
            {
                q: 'In the context of OS, what is a semaphore primarily used for?',
                opts: ['Memory management', 'Process synchronisation', 'CPU scheduling', 'File I/O operations'],
                a: 1
            },
            {
                q: 'Which of the following is NOT one of the four necessary conditions for deadlock?',
                opts: ['Mutual Exclusion', 'Hold and Wait', 'Preemption', 'Circular Wait'],
                a: 2
            },
            {
                q: 'What is "thrashing" in operating systems?',
                opts: [
                    'Excessive CPU context switches',
                    'Low CPU utilisation caused by excessive paging activity',
                    'Memory overflow due to large programs',
                    'A type of scheduling anomaly'
                ],
                a: 1
            },
            {
                q: 'Which Unix system call is used to create a new child process?',
                opts: ['exec()', 'spawn()', 'fork()', 'create()'],
                a: 2
            },
            {
                q: 'Virtual memory allows a process to:',
                opts: [
                    'Run without any RAM',
                    'Execute programs larger than physical RAM',
                    'Access another process\'s memory',
                    'Bypass the file system'
                ],
                a: 1
            },
            {
                q: 'In which memory-allocation scheme does external fragmentation NOT occur?',
                opts: ['Segmentation', 'Variable-size partitioning', 'Paging', 'Best-fit allocation'],
                a: 2
            },
            {
                q: 'The critical section problem ensures which property so that only one process executes its critical section at a time?',
                opts: ['Starvation freedom', 'Mutual Exclusion', 'Bounded waiting', 'Progress'],
                a: 1
            },
            {
                q: 'RAID stands for:',
                opts: [
                    'Random Access of Independent Disks',
                    'Rapid Array of Integrated Drives',
                    'Redundant Array of Independent Disks',
                    'Remote Access of Indexed Data'
                ],
                a: 2
            }
        ]
    },

    fsd: {
        label: 'Full Stack Development',
        questions: [
            {
                q: 'Which of the following is a server-side (back-end) JavaScript runtime?',
                opts: ['React', 'Angular', 'Node.js', 'Vue.js'],
                a: 2
            },
            {
                q: 'What does REST stand for in web development?',
                opts: [
                    'Remote Execution State Transfer',
                    'Representational State Transfer',
                    'Remote State Transfer Protocol',
                    'Representational System Transfer'
                ],
                a: 1
            },
            {
                q: 'Which HTTP method is semantically correct for updating an existing resource?',
                opts: ['GET', 'POST', 'PUT', 'DELETE'],
                a: 2
            },
            {
                q: 'In HTML, which tag is used to link an external CSS file?',
                opts: ['<style>', '<css>', '<script>', '<link>'],
                a: 3
            },
            {
                q: 'Which of the following is a NoSQL database?',
                opts: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle'],
                a: 2
            },
            {
                q: 'What does the CSS property "display: flex" primarily do?',
                opts: [
                    'Makes an element invisible',
                    'Enables a flex-container layout for child elements',
                    'Centers an element on the page',
                    'Adds a border to an element'
                ],
                a: 1
            },
            {
                q: 'Which tool is the industry standard for source-code version control?',
                opts: ['JIRA', 'Postman', 'Docker', 'Git'],
                a: 3
            },
            {
                q: 'What is the default port number for HTTP?',
                opts: ['8080', '443', '21', '80'],
                a: 3
            },
            {
                q: 'Which JavaScript method is used to convert a JSON string into a JavaScript object?',
                opts: ['JSON.stringify()', 'JSON.parse()', 'JSON.convert()', 'JSON.decode()'],
                a: 1
            },
            {
                q: 'In a typical MERN stack, what does "M" stand for?',
                opts: ['MySQL', 'MongoDB', 'Middleware', 'Mongoose'],
                a: 1
            }
        ]
    },

    maths: {
        label: 'Maths III',
        questions: [
            {
                q: 'The Laplace transform of e^(at) is:',
                opts: ['1 / (s − a)', '1 / (s + a)', 's / (s − a)', 'a / (s + a)'],
                a: 0
            },
            {
                q: 'The inverse Laplace transform of 1/s² is:',
                opts: ['1', 't', 't²', 'e^t'],
                a: 1
            },
            {
                q: 'The Fourier series of an odd function contains only:',
                opts: ['Cosine terms', 'Sine terms', 'Both sine and cosine terms', 'Only the constant term'],
                a: 1
            },
            {
                q: 'What is the order of the differential equation:  d³y/dx³ + 2(dy/dx) = 0 ?',
                opts: ['1', '2', '3', '4'],
                a: 2
            },
            {
                q: 'If L{f(t)} = F(s), then L{f\'(t)} equals:',
                opts: ['sF(s)', 'sF(s) − f(0)', 'F(s)/s', 'F(s − a)'],
                a: 1
            },
            {
                q: 'The Z-transform of the unit step sequence u[n] is:',
                opts: ['z / (z − 1)', '1 / (z − 1)', 'z / (z + 1)', '1 / z'],
                a: 0
            },
            {
                q: 'The Fourier transform of a Gaussian function f(t) = e^(−t²) is:',
                opts: ['A triangle function', 'Another Gaussian function', 'A sinc function', 'A rectangular pulse'],
                a: 1
            },
            {
                q: 'A square matrix A is said to be idempotent if:',
                opts: ['A² = I', 'A² = A', 'A = Aᵀ', 'A = A⁻¹'],
                a: 1
            },
            {
                q: 'For a causal sequence, the Region of Convergence (ROC) in the Z-domain lies:',
                opts: ['Inside a circle', 'Outside a circle', 'On the entire z-plane', 'On the imaginary axis'],
                a: 1
            },
            {
                q: 'Which of the following is a solution to the ODE  y\'\' + y = 0 ?',
                opts: ['e^x', 'x²', 'sin(x)', 'ln(x)'],
                a: 2
            }
        ]
    },

    hv: {
        label: 'Human Values',
        questions: [
            {
                q: 'What does the term "Ahimsa" mean in the context of human values?',
                opts: ['Bravery', 'Non-violence', 'Sacrifice', 'Devotion'],
                a: 1
            },
            {
                q: 'The Universal Declaration of Human Rights was adopted by the UN General Assembly in:',
                opts: ['1945', '1948', '1950', '1960'],
                a: 1
            },
            {
                q: 'Which value is widely considered the foundational pillar of all human values?',
                opts: ['Wealth', 'Power', 'Truth (Satya)', 'Beauty'],
                a: 2
            },
            {
                q: '"Empathy" in human values means:',
                opts: [
                    'Feeling sorry for someone',
                    'Understanding and sharing the feelings of others',
                    'Donating money to charity',
                    'Being outwardly polite'
                ],
                a: 1
            },
            {
                q: 'In professional ethics, "conflict of interest" arises when:',
                opts: [
                    'Two employees have a disagreement',
                    'A project exceeds its budget',
                    'Personal interests interfere with professional duties',
                    'A company changes its policies'
                ],
                a: 2
            },
            {
                q: '"Integrity" in professional life primarily means:',
                opts: [
                    'Having a high IQ',
                    'Being honest and adhering to strong moral principles',
                    'Possessing many technical skills',
                    'Following company rules only when monitored'
                ],
                a: 1
            },
            {
                q: 'The concept of "sustainable development" aims to:',
                opts: [
                    'Maximise economic growth at any cost',
                    'Achieve rapid industrialisation',
                    'Meet present needs without compromising the ability of future generations to meet theirs',
                    'Increase urbanisation'
                ],
                a: 2
            },
            {
                q: 'Which of the following is an example of civic responsibility?',
                opts: ['Starting a profitable business', 'Paying taxes honestly', 'Choosing a high-paying career', 'Maximising personal savings'],
                a: 1
            },
            {
                q: 'According to Maslow\'s Hierarchy of Needs, which need is at the top of the pyramid?',
                opts: ['Safety needs', 'Physiological needs', 'Love and belonging', 'Self-actualisation'],
                a: 3
            },
            {
                q: 'Which ethical theory judges the morality of an action based solely on its consequences?',
                opts: ['Deontology', 'Virtue Ethics', 'Consequentialism (Utilitarianism)', 'Divine Command Theory'],
                a: 2
            }
        ]
    },

    oops: {
        label: 'OOPs',
        questions: [
            {
                q: 'Which pillar of OOP bundles data and methods within one unit, hiding internal details?',
                opts: ['Inheritance', 'Abstraction', 'Polymorphism', 'Encapsulation'],
                a: 3
            },
            {
                q: 'Method overloading (same name, different parameters in the same class) is an example of:',
                opts: ['Runtime polymorphism', 'Compile-time polymorphism', 'Inheritance', 'Encapsulation'],
                a: 1
            },
            {
                q: 'Which concept allows a derived class to inherit properties and behaviours from a base class?',
                opts: ['Polymorphism', 'Encapsulation', 'Inheritance', 'Abstraction'],
                a: 2
            },
            {
                q: 'Which keyword is used to create an object in Java?',
                opts: ['create', 'object', 'new', 'make'],
                a: 2
            },
            {
                q: 'A constructor in OOP is:',
                opts: [
                    'A method that destroys an object',
                    'A special method called automatically when an object is created',
                    'A method used for sorting objects',
                    'A static utility method'
                ],
                a: 1
            },
            {
                q: 'Which of these is NOT a valid type of inheritance?',
                opts: ['Single', 'Multiple', 'Cyclic', 'Hierarchical'],
                a: 2
            },
            {
                q: 'An abstract class in Java:',
                opts: [
                    'Cannot contain any methods',
                    'Can be instantiated directly using "new"',
                    'Cannot be instantiated directly',
                    'Cannot have a constructor'
                ],
                a: 2
            },
            {
                q: 'The "this" keyword in OOP refers to:',
                opts: ['A new object', 'The current instance of the class', 'The parent class', 'A static variable'],
                a: 1
            },
            {
                q: 'Interfaces in Java are primarily used to achieve:',
                opts: ['Single inheritance only', 'Multiple inheritance (of type)', 'No inheritance', 'Cyclic inheritance'],
                a: 1
            },
            {
                q: 'Which OOP principle is demonstrated by method overriding?',
                opts: ['Encapsulation', 'Abstraction', 'Compile-time polymorphism', 'Runtime polymorphism'],
                a: 3
            }
        ]
    },

    dsa: {
        label: 'Advance DSA',
        questions: [
            {
                q: 'What is the time complexity of binary search on a sorted array of n elements?',
                opts: ['O(n)', 'O(n²)', 'O(log n)', 'O(n log n)'],
                a: 2
            },
            {
                q: 'Which data structure is used in BFS (Breadth-First Search) traversal?',
                opts: ['Stack', 'Queue', 'Priority Queue', 'Linked List'],
                a: 1
            },
            {
                q: 'What is the worst-case time complexity of Quick Sort?',
                opts: ['O(n log n)', 'O(n²)', 'O(n)', 'O(log n)'],
                a: 1
            },
            {
                q: 'Which algorithm finds the shortest path in a weighted graph with non-negative edges?',
                opts: ['BFS', 'DFS', 'Dijkstra\'s Algorithm', 'Kruskal\'s Algorithm'],
                a: 2
            },
            {
                q: 'What is the space complexity of Merge Sort?',
                opts: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
                a: 2
            },
            {
                q: 'Which of the following is a self-balancing Binary Search Tree?',
                opts: ['General Binary Tree', 'B-Tree', 'AVL Tree', 'Max-Heap'],
                a: 2
            },
            {
                q: 'Dynamic programming solves problems by exploiting:',
                opts: [
                    'Greedy choice property',
                    'Divide and conquer without storing results',
                    'Overlapping subproblems and optimal substructure',
                    'Backtracking with pruning'
                ],
                a: 2
            },
            {
                q: 'The height of a complete binary tree with n nodes is:',
                opts: ['O(n)', 'O(log n)', 'O(n²)', 'O(√n)'],
                a: 1
            },
            {
                q: 'Which sorting algorithm is stable and has O(n log n) time in all cases?',
                opts: ['Quick Sort', 'Heap Sort', 'Merge Sort', 'Shell Sort'],
                a: 2
            },
            {
                q: 'In a min-heap, the element at the root is:',
                opts: ['The largest element', 'The median element', 'The smallest element', 'A random element'],
                a: 2
            }
        ]
    }
};

const grades = [
    { min: 9, emoji: '🏆', label: 'Excellent!',  msg: 'Outstanding! You aced the quiz. Truly impressive!' },
    { min: 7, emoji: '🌟', label: 'Very Good!',  msg: 'Great job! You have a solid command of the topics.' },
    { min: 5, emoji: '👍', label: 'Good',        msg: "Well done! A bit more practice and you'll be unstoppable." },
    { min: 3, emoji: '📚', label: 'Average',     msg: "Not bad! Keep revising and you'll improve significantly." },
    { min: 0, emoji: '💪', label: 'Poor',        msg: "Don't give up! Every expert was once a beginner. Try again!" }
];

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

let currentSubjectKey = null;
let activeQuestions   = [];
let currentIndex      = 0;
let score             = 0;
let userAnswers       = [];
let answeredCount     = 0;
let selectedOption    = null;

function padZero(n) { return n < 10 ? '0' + n : String(n); }

function updateClock() {
    var now  = new Date();
    var day  = now.toLocaleDateString('en-IN', { weekday: 'short' });
    var date = padZero(now.getDate()) + '-' + padZero(now.getMonth() + 1) + '-' + now.getFullYear();
    var time = padZero(now.getHours()) + ':' + padZero(now.getMinutes()) + ':' + padZero(now.getSeconds());
    document.getElementById('live-clock').textContent = day + ', ' + date + '  ' + time;
}

updateClock();
setInterval(updateClock, 1000);

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(function(s) {
        s.classList.remove('active');
        s.style.display = 'none';
    });
    var el = document.getElementById(id);
    el.style.display = 'block';
    el.classList.add('active');
}

function selectSubject(key) {
    currentSubjectKey = key;
    startQuiz();
}

function startQuiz() {
    activeQuestions = questionBank[currentSubjectKey].questions;
    currentIndex    = 0;
    score           = 0;
    userAnswers     = [];
    answeredCount   = 0;
    selectedOption  = null;

    document.getElementById('active-subject-badge').textContent =
        questionBank[currentSubjectKey].label;

    showScreen('screen-quiz');
    renderQuestion();
}

function restartQuiz() {
    startQuiz();
}

function renderQuestion() {
    var q = activeQuestions[currentIndex];
    selectedOption = null;

    document.getElementById('progress-fill').style.width =
        ((currentIndex / activeQuestions.length) * 100) + '%';

    document.getElementById('q-counter').textContent =
        'Question ' + (currentIndex + 1) + ' / ' + activeQuestions.length;

    document.getElementById('live-answered').textContent = answeredCount;

    document.getElementById('question-text').textContent = q.q;

    document.getElementById('btn-next').classList.add('hidden');

    var grid = document.getElementById('options-grid');
    grid.innerHTML = '';

    q.opts.forEach(function(opt, i) {
        var btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.id = 'opt-' + i;
        btn.innerHTML =
            '<span class="opt-badge">' + OPTION_LABELS[i] + '</span>' +
            '<span class="opt-text">' + opt + '</span>';
        btn.addEventListener('click', function() { selectOption(i); });
        grid.appendChild(btn);
    });
}

function selectOption(chosen) {
    document.querySelectorAll('.option-btn').forEach(function(btn) {
        btn.classList.remove('selected');
    });

    document.getElementById('opt-' + chosen).classList.add('selected');
    selectedOption = chosen;

    document.getElementById('btn-next').classList.remove('hidden');
    var isLast = currentIndex === activeQuestions.length - 1;
    document.getElementById('btn-next').textContent = isLast ? 'See Results →' : 'Next →';
}

function nextQuestion() {
    if (selectedOption === null) return;

    var q = activeQuestions[currentIndex];
    var isRight = (selectedOption === q.a);
    if (isRight) score++;
    answeredCount++;

    userAnswers.push({ chosen: selectedOption, correct: q.a, isRight: isRight });

    selectedOption = null;
    currentIndex++;

    if (currentIndex < activeQuestions.length) {
        renderQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    var grade = grades.find(function(g) { return score >= g.min; });

    document.getElementById('result-trophy').textContent = grade.emoji;
    document.getElementById('result-grade').textContent  = grade.label;
    document.getElementById('result-msg').textContent    = grade.msg;
    document.getElementById('final-score').textContent   = score;

    var list = document.getElementById('breakdown-list');
    list.innerHTML = '';

    activeQuestions.forEach(function(q, i) {
        var ua      = userAnswers[i];
        var isRight = ua && ua.isRight;

        var item = document.createElement('div');
        item.className = 'bd-item ' + (isRight ? 'bd-correct' : 'bd-wrong');

        var chosenTxt  = ua
            ? OPTION_LABELS[ua.chosen] + '. ' + q.opts[ua.chosen]
            : 'Not answered';
        var correctTxt = OPTION_LABELS[q.a] + '. ' + q.opts[q.a];

        item.innerHTML =
            '<div class="bd-num">' + (i + 1) + '</div>' +
            '<div class="bd-content">' +
                '<div class="bd-q">' + q.q + '</div>' +
                '<div class="bd-answer">' +
                    (isRight
                        ? '✅ Your answer: ' + chosenTxt
                        : '❌ You chose: ' + chosenTxt + '<br>✅ Correct: ' + correctTxt
                    ) +
                '</div>' +
            '</div>' +
            '<div class="bd-icon">' + (isRight ? '✅' : '❌') + '</div>';

        list.appendChild(item);
    });

    showScreen('screen-result');
}

window.addEventListener('DOMContentLoaded', function() {
    showScreen('screen-welcome');
});
