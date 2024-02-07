document.addEventListener('DOMContentLoaded', () => {
    const elderlyForm = document.getElementById('elderlyForm');
    const volunteerForm = document.getElementById('volunteerForm');

    if (elderlyForm) {
        elderlyForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(elderlyForm);
            const formDataObject = {};
            formData.forEach((value, key) => {
                formDataObject[key] = value;
            });

            try {
                const response = await fetch('/submit-elderly', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formDataObject)
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                alert('Your request for assistance has been submitted successfully!');
                elderlyForm.reset();
            } catch (error) {
                console.error('There was a problem with your request:', error.message);
                alert('There was a problem with your request. Please try again later.');
            }
        });
    }

    if (volunteerForm) {
        volunteerForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(volunteerForm);
            const formDataObject = {};
            formData.forEach((value, key) => {
                formDataObject[key] = value;
            });

            try {
                const response = await fetch('/submit-volunteer', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formDataObject)
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                alert('Your volunteer sign-up has been submitted successfully!');
                volunteerForm.reset();
            } catch (error) {
                console.error('There was a problem with your request:', error.message);
                alert('There was a problem with your request. Please try again later.');
            }
        });
    }
});