const allContent = document.querySelector('.all-content');
const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');

PageTransition = () => {
    //changing the active button
    for (let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', function() {
            let activeBtn = document.querySelectorAll('.active-btn');
            activeBtn[0].className = activeBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //changing sections
    allContent.addEventListener('click', (e) => {
        //console.log(e.target)
        const id = e.target.dataset.id;
        if (id) {
            secBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            sections.forEach((section) => {
                section.classList.remove('active');
            })
            const Element = document.getElementById(id);
            Element.classList.add('active');
        }
    })
}

PageTransition();


// addEventListener FOR CHANGING MODES
const modes = document.querySelector('#modes');
modes.addEventListener('click', () => {
    let elements = document.body;
    elements.classList.toggle('light-mode');

    const day = document.querySelector('.day');
    const night = document.querySelector('.night');
    day.classList.toggle('img-hide');
    night.classList.toggle('light');
})

// INTERSECTION OBSERVER

const Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.add('show1');
            entry.target.classList.add('show2');
        } else {
            entry.target.classList.remove('show');
            entry.target.classList.remove('show1');
            entry.target.classList.remove('show2');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((ele) => {
    Observer.observe(ele);
})
const hiddenElements1 = document.querySelectorAll('.hidden1');
hiddenElements1.forEach((ele) => {
    Observer.observe(ele);
})
const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((ele) => {
    Observer.observe(ele);
})

// GSAP CURSOR ANIMATION
var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),

    mouseX = 0,
    mouseY = 0

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function() {

        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

cursorScale.forEach((link) => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if (link.classList.contains('small')) {
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }

    });
})

// CURSOR IN/OUT

document.addEventListener('mouseout', function() {
    cursor.style.visibility = "hidden";
})
document.addEventListener('mouseover', function() {
    cursor.style.visibility = "visible";
})