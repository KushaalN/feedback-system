document.getElementById('feedbackForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Get JWT token from localStorage
    const token = localStorage.getItem("token");
    if (!token) {
        alert("Please log in first!");
        return;
    }

    const feedbackData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        feedback: document.getElementById('feedback').value,
        rating: document.getElementById('rating').value
    };

    const res = await fetch('http://localhost:5000/feedback', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(feedbackData)
    });

    const data = await res.json();
    document.getElementById('message').innerText = data.message || data.error;
});
     