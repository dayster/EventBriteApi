// Instanciate both class

const eventbrite = new EventBrite();
const ui = new UI();

document.getElementById('submitBtn').addEventListener('click', function(e){
    e.preventDefault();

    const eventName = document.getElementById('event-name').value;
    const category = document.getElementById('category').value;

    if(eventName !== ''){
        console.log('Success');
    }else{
        ui.printMessage('Add an event or city', 'text-center alert alert-danger mt-4');
    }
});