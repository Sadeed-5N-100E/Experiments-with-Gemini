document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const resultsDiv = document.getElementById('results');

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const query = searchInput.value.trim();
        if (!query) return;

        // Show loading state
        resultsDiv.style.display = 'block';
        resultsDiv.innerHTML = '<div class="loading">Generating response...</div>';
        searchButton.disabled = true;

        fetch('/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: query })
        })
        .then(response => response.json())
        .then(data => {
            resultsDiv.style.display = 'block';
            if (data.error) {
                resultsDiv.innerHTML = `<div class="error">Error: ${data.error}</div>`;
            } else {
                // Format the response text (preserve newlines and spacing)
                const formattedText = data.results.replace(/\n/g, '<br>');
                resultsDiv.innerHTML = `<div class="response">${formattedText}</div>`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultsDiv.innerHTML = '<div class="error">An error occurred while searching.</div>';
        })
        .finally(() => {
            searchButton.disabled = false;
        });
    }
}); 