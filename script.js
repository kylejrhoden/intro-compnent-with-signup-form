const form = document.getElementById('form');
const first = document.getElementById('firstname');


form.addEventListener('submit', e => {
    e.preventDefault();
    

    const firstValue = form['firstname'].value;

    alert(firstValue);

    
});

